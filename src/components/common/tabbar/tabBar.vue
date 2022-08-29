<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  z-index: 10;
}
</style>