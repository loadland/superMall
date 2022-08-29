<template>
  <div id="goods">
    <goods-item v-for="(item, index) in goods" :key="index" :goodsItem="item" />
  </div>
</template>

<script>
import goodsItem from './GoodsItem.vue'

export default {
  name: 'goods',
  components: {
    goodsItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
#goods {
  margin-top: 10px;
  margin-bottom: 49px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>