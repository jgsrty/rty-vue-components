<template>
  <div>
    <rty-button></rty-button>
    <rty-button :text="primary" :type="primary"></rty-button>
    <rty-button :text="success" :type="success"></rty-button>
    <rty-button :text="warning" :type="warning"></rty-button>
    <rty-button :text="danger" :type="danger"></rty-button>
    <rty-button :text="medium.text" :type="primary" :size="medium.size"></rty-button>
    <rty-button :text="small.text" :type="success" :size="small.size"></rty-button>
    <rty-button :text="mini.text" :type="warning" :size="mini.size"></rty-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primary: "primary",
      success: "success",
      warning: "warning",
      danger: "danger",
      medium: {
        size: "medium",
        text: "中等按钮"
      },
      small: {
        size: "small",
        text: "小型按钮"
      },
      mini: {
        size: "mini",
        text: "迷你按钮"
      }
    };
  }
};
</script>

<style scoped>
</style>