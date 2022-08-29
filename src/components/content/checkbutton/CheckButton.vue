<template>
  <div>
    <div class="checkButton" :class="{ active: isChecked }">
      <p class="p" :class="{ pActive: isChecked }"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    }
  },

}
</script>

<style lang="less" scoped>
.checkButton {
  width: .9333rem;
  height: .9333rem;
  background-color: #eeeeee;
  border-radius: 50%;
  border: solid 1px #aaa;
}

.active {
  border-color: #ff5777;
  border-radius: 50%;
  background-color: #ff5777;
}

.p {
  position: relative;
  z-index: 10;
}

.pActive {
  width: 10px;
  height: 10px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-35deg);
}
</style>