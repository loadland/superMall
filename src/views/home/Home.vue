<template>
  <div id="home">
    <!-- 头部 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control ref="tabControl1" :tabItem="['精选', '时装', '折扣']" @isCounter="isCounter" class="tab-control-top"
      v-show="isControl">
    </tab-control>
    <scroll ref="scroll" @scroll="contentScroll" @pullingUp="latePullingUp" class="content">
      <!-- 轮播图 -->
      <home-swiper :banner="banner" @swiperLoad="swiperLoad" />
      <!-- 推荐 -->
      <home-recommend-view :recommend="recommend" />

      <tab-control :tabItem="['精选', '时装', '折扣']" @isCounter="isCounter" ref="tabControl2"></tab-control>

      <goods :goods="goods[isGoods].list"></goods>
    </scroll>
    <scroll-top @click.native="ScrollTopClick" v-show="isScrollTop"></scroll-top>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue'
import tabControl from 'components/content/tabcontrol/TabControl.vue'
import goods from './goods/goods.vue'
import Scroll from 'components/content/scroll/Scroll.vue'

import { getHomeBenNer, getHomeDate } from 'network/home'

import { mixin, scrollTopTwo } from 'common/mixin'


export default {
  name: 'Home',
  mixins: [mixin, scrollTopTwo],
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      isGoods: 'pop',
      isControl: false,
      tabControlY: 0,
      svgY: 0,

    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    tabControl,
    goods,
    Scroll,
  },
  // 生命周期 --->组件创建之后
  created() {
    this.getHomeBenNer()

    this.getHomeDate('pop')
    this.getHomeDate('new')
    this.getHomeDate('sell')
  },
  methods: {
    isCounter(index) {
      switch (index) {
        case 0:
          this.isGoods = 'pop';
          break;
        case 1:
          this.isGoods = 'new';
          break;
        case 2:
          this.isGoods = 'sell';
          break;
      }
      this.$refs.tabControl1.action = index
      this.$refs.tabControl2.action = index
    },
    // ScrollTopClick() {
    //   this.$refs.scroll.BScroll.scrollTo(0, 0, 500)
    // },
    contentScroll(position) {
      this.isScrollTop = (-position.y) > 1000;

      this.isControl = (-position.y) > this.tabControlY
    },
    latePullingUp() {
      this.getHomeDate(this.isGoods)

    },
    swiperLoad() {
      this.tabControlY = this.$refs.tabControl2.$el.offsetTop
    },
    // 网络请求
    getHomeBenNer() {
      getHomeBenNer().then(res => {
        this.banner = res.data.banner.list
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeDate(type) {
      let page = this.goods[type].page + 1;
      getHomeDate(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;

        this.$refs.scroll.Scroll.finishPullUp()
      })
    },
  },
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}

.home-nav {
  background-color: #fff;
}

.tab-control-top {
  position: relative;
  z-index: 10;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 47px;
  bottom: 49px;
}
</style>