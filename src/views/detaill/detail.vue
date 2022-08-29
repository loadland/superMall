<template>
  <div id="detail">
    <!-- 头部导航 -->
    <nav-bar-detail class="nav-bar-detail" @detailClick="detailClick" ref="nav" />
    <!-- 优雅的滚动 -->
    <scroll class="scroll" ref="scroll" @scroll="contentScroll">
      <!-- 轮播图 -->
      <swiper-detail :swiperDetailImg="swiperDetailImg" />
      <!-- 商品介绍 -->
      <detail-base-info :getDetailBase="getDetailBase" />
      <!-- 店铺信息 -->
      <shop :Shop="Shop" />
      <!-- 商品详情 -->
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <!-- 商品参数 -->
      <detail-params-info :paramsInfo="paramsInfo" ref="detailParamsInfo" />
      <!-- 商品评论 -->
      <detail-rate :detailRate="detailRate" ref="detailRate" />
      <!-- 推荐信息 -->
      <goods :goods="recommend" ref="goods" />
    </scroll>
    <!-- 返回顶部 -->
    <scroll-top @click.native="ScrollTopClick" v-show="isScrollTop" />
    <!-- 底部导航 -->
    <detail-bottom-bar @detailBottomBarClick="detailBottomBarClick" />
  </div>
</template>

<script>
// 头部导航
import NavBarDetail from './navbardetail/NavBarDetail'
// 轮播图
import swiperDetail from './swiperdetail/swiperDetail'
// 商品介绍
import detailBaseInfo from './detailbaseinfo/detailBaseInfo'
// 店铺信息
import Shop from './detailshopinfo/detailShopInfo'
// 商品详情
import detailGoodsInfo from './detailgoodsinfo/detailGoodsInfo'
// 商品参数
import detailParamsInfo from './detailprarmsinfo/detailParamsInfo'
// 商品评论
import detailRate from './detailrate/detailRate'
// 推荐信息
import goods from '../home/goods/goods.vue'
// 底部导航
import detailBottomBar from './detailbottombar/detailBottomBar.vue'

// 优雅的滚动
import Scroll from 'components/content/scroll/Scroll.vue'

// 商品id的请求
import { getDetail, getDetailBaseInfo, getShop, getGoodsParams, getRecommend } from 'network/detail'

// 导入混入(mixin)文件
import { mixin, scrollTopTwo } from 'common/mixin'

export default {
  name: 'detail',
  // 使用mixin的图片加载后滚动
  mixins: [mixin, scrollTopTwo],
  data() {
    return {
      // 保存商品的所有信息
      swiperDetailImg: null,
      // 商品介绍
      getDetailBase: {},
      // 店铺信息
      Shop: {},
      // 商品详情
      detailInfo: {},
      // 商品参数信息
      paramsInfo: {},
      // 商品评论
      detailRate: [],
      // 商品推荐
      recommend: [],
      // 头部导航与主题联动
      itemNavY: [],
    }
  },
  components: {
    // 优雅的滚动
    Scroll,
    // 头部导航
    NavBarDetail,
    // 轮播图
    swiperDetail,
    // 商品介绍
    detailBaseInfo,
    // 店铺信息
    Shop,
    // 商品详情
    detailGoodsInfo,
    // 商品参数
    detailParamsInfo,
    // 商品评论
    detailRate,
    // 推荐信息
    goods,
    // 底部导航
    detailBottomBar,
  },
  computed: {
    // 获取点击进来的商品的id
    detailIid() {
      return this.$route.params.iid
    }
  },
  created() {
    // 获取对应id的商品
    this.getDetail()
    this.getRecommend()
  },
  methods: {
    // 封装，获取整个商品信息的网络请求
    getDetail() {
      getDetail(this.detailIid).then((res) => {
        const data = res.result
        // 商品推荐图片
        this.swiperDetailImg = data.itemInfo.topImages
        // 商品介绍数据
        this.getDetailBase = new getDetailBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)
        // 店铺信息数据
        this.Shop = new getShop(data.shopInfo)
        // 商品详情数据
        this.detailInfo = data.detailInfo
        // 商品参数
        this.paramsInfo = new getGoodsParams(data.itemParams.info, data.itemParams.rule)
        // 商品评论
        if (data.rate.cRate !== 0) {
          this.detailRate = data.rate.list
        }
      })
    },
    // scroll的滚动事件
    contentScroll(position) {
      let positionY = -position.y
      // 在到一定距离的时候让scrollTop出现
      this.isScrollTop = (positionY) > 1000;
      // 在滚动主题的时候让navBar联动
      for (let i = 0; i < this.itemNavY.length - 1; i++) {
        if (this.$refs.nav.isNavBarIndex !== i && positionY >= this.itemNavY[i] && positionY < this.itemNavY[i + 1]) {
          this.$refs.nav.isNavBarIndex = i
        }
      }
    },
    // 获取推荐信息
    getRecommend() {
      getRecommend().then(res => {
        this.recommend = res.data.list
      })
    },
    // 商品信息图片加载完
    imgLoad() {
      // 加载完之后重新计算可滚动高度
      this.$refs.scroll.Scroll.refresh()

      this.itemNavY = []
      // 第一个值是默认商品的offsetTop
      this.itemNavY.push(0);
      // 将参数的offsetTop值添加到itemNavY
      this.itemNavY.push(this.$refs.detailParamsInfo.$el.offsetTop);
      // 将评论的offsetTop值添加到itemNavY
      this.itemNavY.push(this.$refs.detailRate.$el.offsetTop);
      // 将推荐的offsetTop值添加到itemNavY
      this.itemNavY.push(this.$refs.goods.$el.offsetTop);
      // 将number的最大值添加到itemNavY
      this.itemNavY.push(Number.MAX_VALUE);
    },
    // 点击事件---商品添加购物车(vuex)
    detailBottomBarClick() {
      // 获取购物车需要展示的信息
      const product = {}
      product.image = this.swiperDetailImg[0]
      product.desc = this.detailInfo.desc
      product.title = this.getDetailBase.title
      product.price = this.getDetailBase.price
      product.iid = this.detailIid
      // 将购物车需要展示的信息添加到vuex中
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 2000)
      })
    },
    // 头部导航点击事件
    detailClick(index) {
      // 点击相应的导航滚动到对应的位置
      this.$refs.scroll.Scroll.scrollTo(0, -this.itemNavY[index], 300)
    }
  },
}
</script>

<style lang="less" scoped>
.nav-bar-detail {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}

#detail {
  height: 100vh;
  position: relative;
  z-index: 20;
  background-color: #fff;
}

.scroll {
  position: absolute;
  top: 46px;
  left: 0;
  right: 0;
  bottom: 49px;
  background-color: #fff;
}
</style>