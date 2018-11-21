<template>
  <div>
    <rty-button :text="'打开气泡提示'" :type="'primary'" @click="showPop=true"></rty-button>
    <rty-pop :visible.sync="showPop" :fade="2500" :text="'信息已提交，请耐心等待'"></rty-pop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPop: false
    };
  }
};
</script>

<style scoped>
</style>