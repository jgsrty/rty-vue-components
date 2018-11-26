<template>
  <div>
    <rty-button :text="'打开气泡提示'" :type="'primary'" @click="showPop"></rty-button>
  </div>
</template>

<script>
export default {
  methods: {
    showPop() {
      this.$rtyPop();
    }
  }
};
</script>

<style scoped>
</style>