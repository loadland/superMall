<template>
  <swiper :interval="5000" :animDuration="500">
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js'

export default {
  name: 'HomeSwiper',
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperLoad() {
      this.$emit('swiperLoad')
    }
  }
}
</script>

<style scoped>
</style>