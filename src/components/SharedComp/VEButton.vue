<template>
  <div>
    <button :type="type" :class="['ve-btn', `ve-btn-${color}`]">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "ve-Button",
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
      validator: function(value) {
        // The value must match one of these strings
        return ["submit", "button"].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      required: false,
      default: "default",
      validator: function(value) {
        return ["default", "info", "success", "danger"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.ve-btn {
  background-color: #eee;
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  &-info {
    background-color: #64afff;
    color: #fff;
  }
  &-success {
    background-color: #2ac34d;
    color: #fff;
  }
  &-danger {
    background-color: #e6394a;
    color: #fff;
  }
  &:hover {
    opacity: 0.7;
    -webkit-box-shadow: 0 0 12px 0 rgba(130, 121, 121, 0.2);
    -moz-box-shadow: 0 0 12px 0 rgba(130, 121, 121, 0.2);
    box-shadow: 0 0 12px 0 rgba(130, 121, 121, 0.2);
    transform: translate(0, -10px);
    -webkit-transform: translate(0, -10px);
  }
}
</style>
