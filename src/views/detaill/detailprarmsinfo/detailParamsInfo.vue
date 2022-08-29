<template>
  <div v-if="Object.keys(paramsInfo).length !== 0" class="params-wrap">
    <div v-for="(item, index) in paramsInfo.sizes" :key="index">
      <div v-for="(it, index) in item" :key="index" class="flex">
        <div v-for="(i, index) in it" :key="index" class="rule-list-item">
          {{ i }}
        </div>
      </div>
    </div>
    <div v-for="(info, index) in paramsInfo.infos" :key="'info' + index" class="flex info-list-wrap">
      <div class="info-list-tit">{{ info.key }}</div>
      <div>{{ info.value }}</div>
    </div>
    <div class="disclaimer"> {{ paramsInfo.disclaimer }}</div>
  </div>

</template>

<script>
export default {
  name: 'detailParamsInfo',
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.params-wrap {
  border-top: 4px solid #ececec;
  border-bottom: 4px solid #ececec;
}

.rule-list-item {
  flex: 1;
  font-size: 12px;
  width: 20%;
  border-bottom: 1px solid #ececec;
  padding: 10px 4px;
}

.flex {
  display: flex;
}

.disclaimer {
  margin: .2667rem 0;
  font-size: .32rem;
  color: pink;
}

.info-list-wrap {
  font-size: 14px;
  ;
  border-bottom: 1px solid #ececec;
  padding: 10px 4px;
  line-height: 20px;

  .info-list-tit {
    width: 18%;
  }
}
</style>