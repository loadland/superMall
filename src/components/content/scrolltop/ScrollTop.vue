<template>
  <div id="scroll-top">
    <div class="upload">口</div>
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
}
</script>

<style scoped>
.upload {
  width: 30px;
  height: 30px;
  background-color: powderblue;
  border-radius: 30px;

  text-align: center;
  line-height: 30px;
  font-size: 20px;
  color: cyan;

  position: fixed;
  right: 20px;
  bottom: 55px;

  z-index: 11;
}
</style>