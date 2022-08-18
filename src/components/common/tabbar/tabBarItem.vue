<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="isActionsColor">
      <slot name="item-icon"></slot>
    </div>
    <div :style="isActionsColor">
      <slot name="item-text"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: 'tabBar',
  props: {
    path: String,
    actionsColor: {
      type: String,
      default: 'pink'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(() => { })
    }
  },
  computed: {
    isActions() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActionsColor() {
      return this.isActions ? { color: this.actionsColor } : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  margin-top: 3px;
}

.tab-bar-item p {
  text-align: center;
}

.tab-bar-item i {
  font-size: 20px;
  display: block;
  text-align: center;
}
</style>