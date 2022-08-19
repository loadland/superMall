<template>
  <tab-bar>
    <tab-bar-item path="/home" actionsColor="purple">
      <i slot="item-icon">口</i>
      <p slot="item-text">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/category" actionsColor="pink">
      <i slot="item-icon">口</i>
      <p slot="item-text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/cart" actionsColor="lightBlue">
      <i slot="item-icon">口</i>
      <p slot="item-text">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="/profile" actionsColor="orange">
      <i slot="item-icon">口</i>
      <p slot="item-text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from '../../common/tabbar/tabBar.vue'
import tabBarItem from '../../common/tabbar/tabBarItem'

export default {
  name: 'mainTabBar',
  components: {
    tabBar,
    tabBarItem,
  }
}
</script>

<style scoped>
</style>