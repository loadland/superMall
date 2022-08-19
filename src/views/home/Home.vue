<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeBenNer } from 'network/home'

export default {
  name: 'Home',
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
    }
  },
  components: {
    NavBar,
  },
  // 生命周期 --->组件创建之后
  created() {
    getHomeBenNer().then(res => {
      this.banner = res.data.banner.list
      this.dKeyword = res.data.dKeyword.list
      this.keywords = res.data.keywords.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
}
</style>