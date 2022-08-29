<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from 'components/content/maintabbar/mainTabBar.vue'

export default {
  name: 'app',
  components: {
    mainTabBar,
  }
}
</script>

<style>
@import url(assets/css/base.css);
</style>
