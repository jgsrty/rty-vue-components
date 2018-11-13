## Introduce
用于展示操作进度，告知用户当前状态和预期

## Use
```
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
```

## Options
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| barWidth | 进度条 |  |  |  |
| innerColor |  |  |  |  |
| percent |  |  |  |  |
| showText |  |  |  |  |