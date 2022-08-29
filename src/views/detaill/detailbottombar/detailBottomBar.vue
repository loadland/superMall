<template>
  <div class="detail-bottom-bar flex">
    <div class="bot-bar-item">
      <p>口</p>
      <p>客服</p>
    </div>
    <div class="bot-bar-item">
      <p>口</p>
      <p>店铺</p>
    </div>
    <div class="bot-bar-item">
      <p>口</p>
      <p>收藏</p>
    </div>
    <div class="btn cart-btn" @click="detailBottomBarClick">加入购购物车</div>
    <div class="btn buy-btn">购买</div>
  </div>
</template>

<script>
export default {
  name: "detailBottomBar",
  methods: {
    detailBottomBarClick() {
      this.$emit('detailBottomBarClick')
    }
  }
}
</script>

<style lang="less" scoped>
.flex {
  display: flex;
}

.detail-bottom-bar {

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;

  height: 49px;
  background-color: #fff;

  .bot-bar-item {
    width: 16%;
    font-size: 12px;
    color: #333;
    text-align: center;

    padding-top: 10px;
  }

  .btn {
    width: 26%;
    font-size: 13px;
    line-height: 49px;
    text-align: center;
  }

  .cart-btn {
    background-color: #F9CD0B;
    line-height: 49px;
  }

  .buy-btn {
    color: #fff;
    background-color: var(--color-high-text);
  }
}
</style>