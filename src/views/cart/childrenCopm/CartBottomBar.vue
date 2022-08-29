<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :isChecked="isCheckedALL" @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="count">合计¥:{{ totalPrice }}</div>
    <div class="calc">我要消费!!({{ totalPriceLength }})</div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkbutton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    checkButton,
  },
  computed: {
    ...mapGetters(['cartList', 'cartListLength']),
    totalPrice() {
      return this.cartList.filter(res =>
        res.carks
      ).reduce((previousValue, item) => {
        return previousValue + item.count * item.price
      }, 0).toFixed(2);
    },
    totalPriceLength() {
      return this.cartList.filter(res => res.carks).length
    },
    isCheckedALL() {
      if (this.cartListLength === 0) return false;
      return this.cartList.every(res => res.carks)
    }
  },
  methods: {
    checkClick() {
      if (this.isCheckedALL) {
        this.cartList.forEach(res => res.carks = false);
      } else {
        this.cartList.forEach(res => res.carks = true);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-bar {
  background-color: #dbe5ec;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  display: flex;
  height: 40px;
  line-height: 40px;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 10px;
}

.check-content {
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-left: 10px;
  width: 60px;
}

.count {
  color: #ff5777;
  padding-left: 50px;
  flex: 1;
  font-size: 13px;
}

.calc {
  width: 90px;
  color: white;
  text-align: center;
  background-color: #ff8198;
  font-size: 14px;
}
</style>
