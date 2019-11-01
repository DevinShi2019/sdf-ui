<template>
  <div class="demo-block">
    <sdf-ui-base class="demo-card">
      <div slot="content">这是卡片内容</div>
      <div slot="footer">
        <div class="sdf-ui__footer-content">这是底部内容</div>
      </div>
    </sdf-ui-base>
    <sdf-ui-base class="demo-card" theme-type="primary">
      <div slot="content">这是卡片内容</div>
    </sdf-ui-base>
  </div>
</template>
<script>
export default {
  name: 'base-demo'
}
</script>
