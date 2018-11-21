<template>
  <div>
    <div style="margin-bottom:20px">
      <rty-button @click="firstDialog = true" :text="'点击打开Dialog'"></rty-button>
      <rty-dialog :visible.sync="firstDialog" :header="'标题'" :width="'250px'">
        <div>dialog内容</div>
        <div slot="footer">
          <rty-button :text="'取消'" @click="firstDialog = false"></rty-button>
          <rty-button :text="'确定'" @click="firstDialog = false" :type="'primary'"></rty-button>
        </div>
      </rty-dialog>
    </div>
    <div>
      <rty-button @click="secondDialog = true" :text="'点击打开自定义Dialog'"></rty-button>
      <rty-dialog :visible.sync="secondDialog">
        <div>
          <rty-progress :percent='55' :innerColor="'#d4333c'"></rty-progress>
        </div>
      </rty-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstDialog: false,
      secondDialog: false
    };
  }
};
</script>

<style scoped>
</style>