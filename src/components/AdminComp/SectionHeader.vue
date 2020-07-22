<template>
  <div class="section-header">
    <h3 class="section-title">
      <slot name="title"></slot>
    </h3>
    <div class="action">
      <slot name="action">
        <ve-Button type="submit" color="default" @click="AddMethod">
          Add
        </ve-Button>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionHeader",
  props: ["AddMethod"],
};
</script>
<style lang="scss" scoped>
.section-header {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .section-title {
    margin: 0;
  }
}
</style>
