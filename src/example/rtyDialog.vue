<template>
  <div>
    <rty-dialog :header="title">
      <div>body</div>
      <div name="footer">foot</div>
    </rty-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'header'
    };
  }
};
</script>

<style scoped>
</style>