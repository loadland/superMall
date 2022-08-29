<template>
  <div class="toast" :class="{ actions: isActions }">
    <div>{{ isMessage }}</div>
  </div>
</template>
  
  <script>
export default {
  name: "Toast",
  data() {
    return {
      isMessage: '',
      isActions: false,
    }
  },
  methods: {
    show(message = '这是一个toast', countDown = 2000) {
      this.isActions = true;
      this.isMessage = message;

      setTimeout(() => {
        this.isActions = false;
        this.isMessage = '';
      }, countDown)
    }
  }
}
</script>
  
  <style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);
  
    line-height: 30px;
  
    color: #ffffff;
  
    border-radius: 5px;
    padding: 0 10px;
    background-color: #000;
    opacity: 0;
  
    transition: all 1s;
  }
  
  .actions {
    opacity: 1;
  }
  </style>