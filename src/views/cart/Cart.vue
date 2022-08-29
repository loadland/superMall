<template>
  <div id="cart">
    <!-- 购物车头部导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">我的购物车 -- 预购：{{ cartListLength }}</div>
    </nav-bar>
    <!-- bug-scroll滚动 -->
    <scroll class="scroll" ref="scroll">
      <!-- 购物车列表 -->
      <cart-list :cartList="cartList" />
    </scroll>
    <!-- 购物车底部 -->
    <cart-bottom-bar :cartList="cartList" />
  </div>
</template>

<script>
// 购物车头部导航
import NavBar from 'components/common/navbar/NavBar'
// 购物车列表
import CartList from './childrenCopm/CartList'
// 购物车底部
import CartBottomBar from './childrenCopm/CartBottomBar'


// 调用bug-scroll实现滚动
import scroll from 'components/content/scroll/Scroll'
// 调用vuex中的mapGetters方法能直接在computed中使用getters中的方法
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    // 购物车头部导航
    NavBar,
    // 购物车列表
    CartList,
    // 购物车滚动
    CartBottomBar,
    // 使用scroll滚动
    scroll,
  },
  computed: {
    // 使用mapGetters的方法
    ...mapGetters(['cartListLength', 'cartList']),
  },

  // 活跃状态
  activated() {
    // 活跃状态下重新计算可滚动高度
    this.$refs.scroll.Scroll.refresh();
  },
}
</script>

<style lang="less" scoped>
#cart {
  height: 100vh;
}

.nav-bar {
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