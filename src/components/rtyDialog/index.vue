<template>
  <div class="rty-dialog">
    <div class="title">
      <slot name="title">
        <span>{{header}}</span>
      </slot>
      <button>x</button>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ""
    }
  },
  mounted(){
    console.log(this.header)
  }
};
</script>

<style scoped lang="scss">
</style>