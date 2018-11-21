<template>
  <div>
    <div style="margin:20px 0">
      <rty-button :text="'全屏loading'" :type="'primary'" @click="displayLoad1"></rty-button>
      <rty-loading :visible="showLoading1"></rty-loading>
    </div>
    <div>
      <rty-button :text="'局部loading'" :type="'primary'" @click="displayLoad2"></rty-button>
      <div style="position:relative;width:500px;height:200px;border:1px solid #333;">
        <rty-loading :visible="showLoading2" :position="'absolute'"></rty-loading>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoading1: false,
      showLoading2: false,
    }
  },
  methods: {
    displayLoad1() {
      this.showLoading1 = true
      setTimeout(() => {
        this.showLoading1 = false
      },2000)
    },
    displayLoad2() {
      this.showLoading2 = true
      setTimeout(() => {
        this.showLoading2 = false
      },2000)
    }
  },
};
</script>

<style scoped>
</style>