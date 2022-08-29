<template>
  <nav-bar>
    <div slot="left" @click="leftClick">
      <div class="left-nav-bar"></div>
    </div>
    <div slot="center" class="center">
      <div v-for="(item, index) in detailL" :key="index" class="center-item"
        :class="{ navBarDetail: isNavBarIndex == index }" @click="detailClick(index)">{{ item }}</div>
    </div>
  </nav-bar>
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'NavBarDetail',
  data() {
    return {
      detailL: ['商品', '参数', '评论', '推荐'],
      isNavBarIndex: 0,
    }
  },
  components: {
    navBar,
  },
  computed: {
    detailIid() {
      return this.$route.params.iid
    }
  },
  methods: {
    detailClick(index) {
      this.isNavBarIndex = index
      this.$emit('detailClick', index)
    },
    leftClick() {
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>
.center {
  display: flex;

}

.center-item {
  flex: 1;
  font-size: 12px;

  transition: all .5s;
}

.navBarDetail {
  color: pink;
}

.left-nav-bar {
  width: 12px;
  height: 12px;
  border-top: 3px solid #ccc;
  border-left: 3px solid #ccc;

  margin-top: 18px;
  margin-left: 20px;

  transform: rotate(-43deg);
}
</style>