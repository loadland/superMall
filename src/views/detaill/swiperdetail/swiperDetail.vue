<template>
  <swiper class="swiper-item">
    <swiper-item v-for="(item, index) in swiperDetailImg" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js'

export default {
  name: 'swiperDetail',
  props: {
    swiperDetailImg: {
      type: Array,
      default() {
        return []
      }
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {

  }
}
</script>

<style scoped>
.swiper-item {
  height: 300px;
}
</style>