<template>
  <div id="detailBaseInfo" v-if="Object.keys(getDetailBase).length !== 0">
    <div class="title"> {{ getDetailBase.title }}</div>
    <div class="price-wrap">
      <div class="new-price">{{ getDetailBase.newPrice }}</div>
      <div class="old-price">{{ getDetailBase.oldPrice }}</div>
      <div class="discount" v-if="getDetailBase.discount">{{ getDetailBase.discount }}</div>
    </div>
    <div class="other-info">
      <div>{{ getDetailBase.columns[0] }}</div>
      <div class="other-info-center">{{ getDetailBase.columns[1] }}</div>
      <div class="other-info-right">{{ getDetailBase.services[0].name }}</div>
    </div>
    <div class="serves-wrap">
      <div v-for="index in getDetailBase.services.length" :key="index">
        <img :src="getDetailBase.services[index - 1].icon" alt="">
        {{ getDetailBase.services[index - 1].name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailBaseInfo',
  props: {
    getDetailBase: {
      type: Object,
      default() {
        return {}
      }
    },
  }
}
</script>

<style lang="less" scoped>
.title {
  margin: 10px 0;
  padding: 0 4px;
  font-size: 14px;
  line-height: 20px;
}

.price-wrap {
  display: flex;
  padding: 0 4px 10px;

  .new-price {
    color: var(--color-high-text)
  }

  .old-price {
    color: #999;
    font-size: 12px;
    margin: 0 4px;
    text-decoration: line-through;
  }

  .discount {
    color: #fff;
    font-size: 12px;
    border-radius: 100px;
    padding: 2px 6px;
    background-color: var(--color-high-text);
  }
}

.other-info {
  display: flex;
  color: #999;
  font-size: .64rem;
  padding: .5333rem .2133rem;
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;

  div {
    flex: 1;
  }

  .other-info-center {
    text-align: center;
  }

  .other-info-right {
    text-align: right;
  }
}

.serves-wrap {
  display: flex;
  font-size: .64rem;
  color: #333;
  padding: .5333rem .2133rem;
  justify-content: space-between;
  border-bottom: .1067rem solid #ededed;

  img {
    width: .64rem;
    height: .64rem;
    vertical-align: middle;
  }
}
</style>