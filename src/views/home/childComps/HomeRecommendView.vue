<template>
  <div class="home-recommend-view">
    <div v-for="(item, index) in recommend" :key="index" class="home-recommend-view-container">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
}
</script>

<style scoped>
.home-recommend-view {
  display: flex;

  font-size: .32rem;
  text-align: center;

  border-bottom: .0533rem solid #ccc;
}

.home-recommend-view-container {
  flex: 1;
}

.home-recommend-view-container img {
  width: 3.6rem;
  margin-bottom: .5333rem;
}

.title {
  margin-bottom: .5333rem;
}
</style>