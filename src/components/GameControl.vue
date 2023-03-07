<script setup>
const emit = defineEmits(["step-taken"]);

defineProps({
  isReversed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const takeStep = () => {
  emit("step-taken");
};
</script>
<template>
  <q-btn
    @click="takeStep"
    size="32px"
    :class="isReversed ? 'is-reversed' : ''"
    round
    color="primary"
    icon="mdi-foot-print"
  />
</template>
<style lang="scss" scoped>
.is-reversed {
  transform: scaleX(-1);
}
</style>
