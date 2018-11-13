<template>
  <div>
    <rty-progress></rty-progress>
    <rty-progress :percent='34'></rty-progress>
    <rty-progress :percent='68' :innerColor="'#F56C6C'"></rty-progress>
    <rty-progress :percent='48' :showText="false"></rty-progress>
    <rty-progress :percent='58' :innerColor="'#F56C6C'" :barWidth="500"></rty-progress>
  </div>
</template>

<script>
import { rtyProgress } from "@/components";
export default {
  components: {
    rtyProgress
  }
};
</script>