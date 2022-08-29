<template>
  <div id="goods-item" @click="itemClick">
    <img :src="goodsImg" alt="" @load="goodsImgLoad">
    <div class="p-text">
      <p>{{ goodsItem.title }}</p>
      <span class="span-text">{{ price }}</span><span> ⭐ {{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'goodsItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    goodsImgLoad() {
      this.$bus.$emit('goodsImgLoad')
    },
    itemClick() {
      // 详细信息的参数传递，以及路由跳转
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    goodsImg() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
    price() {
      return this.goodsItem.price || this.goodsItem.orgPrice
    }
  },

}
</script>

<style scoped>
#goods-item {
  position: relative;
  width: 45%;
}

#goods-item img {
  border-radius: 10px;
  width: 100%;
}

.p-text {
  margin: 10px 0;
}

.p-text p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.span-text {
  margin-right: 30px;
  color: pink;
}
</style>