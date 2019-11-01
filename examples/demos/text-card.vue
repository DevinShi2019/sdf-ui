<style lang="scss">
.demo-card {
  margin-right: 45px;
}
</style>
<script>
export default {
  name: 'text-demo'
}
</script>

<template>
  <div class="demo-block">
    <sdf-ui-text class="demo-card" message="这是卡片内容"></sdf-ui-text>
    <sdf-ui-text class="demo-card" theme-type="primary" message="这是卡片内容"></sdf-ui-text>
  </div>
</template>
