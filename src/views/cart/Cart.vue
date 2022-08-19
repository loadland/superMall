<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">我的购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'Cart',
  components: {
    NavBar,
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
}
</style>