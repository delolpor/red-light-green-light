<script setup>
import GameControl from "src/components/GameControl.vue";
import { useLight } from "src/composables/lightLogic";
const { lightIsGreen } = useLight();
</script>
<template>
  <div class="game">
    <div
      class="game__light"
      :class="lightIsGreen ? 'game__light--green' : 'game__light--red'"
    ></div>
    <div class="game__controls">
      <GameControl />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.game {
  padding: 1rem;
  &__light {
    height: 5rem;
    width: 5rem;
    margin: auto;
    border-radius: 50%;
    &--green {
      background-color: green;
    }

    &--red {
      background-color: red;
    }
  }
}
</style>
