// 图片加载完之后重新计算可滚动高度，在失去活跃和得到活跃之后使用和关闭图片加载事件
export const mixin = {
  data() {
    return {
      itemGoodeLister: null,
    }
  },
  mounted() {
    this.itemGoodeLister = () => {
      this.$refs.scroll.Scroll.refresh()
    }
  },
  activated() {
    this.$bus.$on('goodsImgLoad', this.itemGoodeLister)
  },
  deactivated() {
    this.$bus.$off('goodsImgLoad', this.itemGoodeLister)
  },
}

// 返回顶部
import ScrollTop from 'components/content/scrolltop/ScrollTop.vue'
export const scrollTopTwo = {
  data() {
    return {
      isScrollTop: false,
    }
  },
  components: {
    ScrollTop,
  },
  methods: {
    ScrollTopClick() {
      this.$refs.scroll.Scroll.scrollTo(0, 0, 500)
    },
  },

}

