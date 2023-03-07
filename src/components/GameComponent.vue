<script setup>
import GameControl from "src/components/GameControl.vue";
import { useGameStore } from "src/stores/gameStore";
import { useLight } from "src/composables/lightLogic";
const { lightIsGreen } = useLight();

const gameStore = useGameStore();
</script>
<template>
  <div class="game">
    <div
      class="game__light"
      :class="lightIsGreen ? 'game__light--green' : 'game__light--red'"
    ></div>
    <div class="game__controls">
      <GameControl
        @step-taken="gameStore.takeStep('left-foot', lightIsGreen)"
      /><GameControl
        :is-reversed="true"
        @step-taken="gameStore.takeStep('right-foot', lightIsGreen)"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.game {
  padding: 0 1rem 2rem 1rem;
  height: 90%;
  display: grid;
  grid-template-rows: 5fr auto;
  grid-template-areas:
    ". light ."
    "controls controls controls";
  &__light {
    grid-area: light;
    height: 15rem;
    width: 15rem;
    margin: auto;
    border-radius: 50%;
    &--green {
      background-color: green;
    }

    &--red {
      background-color: red;
    }
  }
  &__controls {
    grid-area: controls;
    display: flex;
    justify-content: space-between;
  }
}
</style>
