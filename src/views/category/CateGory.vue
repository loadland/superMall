<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="left" class="left">
        <div class="nav-bar-left-icon">口</div>
      </div>
      <div slot="center" class="center">
        <input type="search" placeholder="母婴" class="nav-bar-input">
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/content/scroll/Scroll'

export default {
  name: 'CateGory',
  components: {
    NavBar,
    Scroll,
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
}

.center {
  position: relative;
}

.nav-bar-left-icon {
  float: left;
  font-size: 14px;
  padding-left: 16px;
  padding-top: 3px;
}

.nav-bar-input {
  width: 100%;
  height: 30px;
  border-radius: 44px;
  border: 0;
  background-color: #f7f7f7;
  padding-left: 35px;
  font-size: 12px;
}

.center::after {
  content: '口';
  width: 30px;
  line-height: 30px;
  background-color: #f7f7f7;
  border-radius: 44px;
  padding-left: 10px;

  position: absolute;
  top: 9px;
  left: 0;

  font-size: 12px;
}
</style>