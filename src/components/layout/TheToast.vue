<script setup>
import BaseToast from "../base/BaseToast.vue";
import { useAppStore } from "../../stores/appStore";
const appStore = useAppStore();
</script>
<template>
  <div class="toast-container">
    <Transition>
      <BaseToast
        v-show="appStore.toastIsVisible"
        :text="appStore.toastText"
        :type="appStore.toastType"
      />
    </Transition>
  </div>
</template>
<style lang="scss">
.toast-container {
  position: fixed;
  bottom: 50px;
  left: 50vw;
  transform: translateX(-50%);
  z-index: 100000;
}
.v-enter-active {
  transition: opacity 0.1s ease;
}
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
