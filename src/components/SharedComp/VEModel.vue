<template>
  <div class="model-container">
    <div class="model-content">
      <h1>Model Componenet</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "ve-Model",
};
</script>
<style lang="scss" scoped>
.model-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  .model-content {
    width: 100%;
    height: 400px;
    margin: 150px auto;
    max-width: 500px;
    background-color: #fff;
    padding: 25px;
    border-radius: 25px;
  }
}
</style>
