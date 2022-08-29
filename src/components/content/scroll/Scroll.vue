<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      Scroll: null,
    }
  },
  mounted() {
    this.Scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      // 拉升 ，一定是true不然不能拉动
      pullUpLoad: true,
    })

    this.Scroll.on('scroll', (position) => {
      this.Scroll && this.$emit('scroll', position)
    })

    this.Scroll.on('pullingUp', () => {
      this.Scroll && this.$emit('pullingUp')
    })
  },
}
</script>

<style scoped>
</style>