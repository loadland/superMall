<template>
  <div class="tab-control">
    <div v-for="(item, index) in tabItem" :key="index" class="tab-control-content" :class="{ actions: action == index }"
      @click="isActions(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      action: 0
    }
  },
  props: {
    tabItem: {
      type: Array,
    },
  },
  methods: {
    isActions(index) {
      this.action = index
      this.$emit('isCounter', index)
    },

  }
}
</script>

<style scoped>
.tab-control {
  display: flex;

  height: 40px;
  padding-top: .5333rem;
  text-align: center;
  border-top: 2px solid #ccc;
  background-color: #fff;
}

.tab-control-content {
  flex: 1;
}

.tab-control-content span {
  padding: 5px;
}

.actions {
  color: pink;
}

.actions span {
  border-bottom: 3px solid palevioletred;
}
</style>