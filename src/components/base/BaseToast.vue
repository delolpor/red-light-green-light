<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "info",
    validator(value) {
      return ["success", "warning", "error", "info"].includes(value);
    },
  },
});
</script>
<template>
  <div :class="`toast toast--${type}`">
    {{ text }}
  </div>
</template>
<style lang="scss" scoped>
@use "sass:color";
.toast {
  max-width: 80vw;
  border-radius: 15px;
  padding: 1rem 2rem;
  transition: all 0.5s ease;
}
@each $key, $value in $types {
  .toast--#{$key} {
    /* stylelint-disable-next-line function-no-unknown */
    background-color: color.adjust(rgba($value, 1), $lightness: 30%);
    border: 1px solid rgba($value, 0.5);
  }
}
</style>
