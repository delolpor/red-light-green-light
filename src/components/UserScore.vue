<script setup>
import { useGameStore } from "src/stores/gameStore";
import { watch, computed, ref, onMounted, nextTick } from "vue";

const gameStore = useGameStore();

const tweenedNumber = ref(0);

const animatedNumber = computed(() => {
  return tweenedNumber.value.toFixed(0);
});
const animate = (newValue) => {
  gsap.to(tweenedNumber, { duration: 0.5, value: newValue });
};
watch(
  () => gameStore.playerScore,
  (newValue, oldValue) => {
    animate(newValue);
  }
);

onMounted(() => {
  animate(gameStore.playerScore);
});
</script>
<template>
  <div class="score">
    <p class="score__user">
      Welcome{{ gameStore.checkForReturningPlayer() ? " back" : "" }},
      {{ gameStore.playerName }}
    </p>

    <Transition>
      <p class="score__points">Score: {{ animatedNumber }}</p>
    </Transition>
    <p class="score__high-score">
      Previous high score: {{ gameStore.getHighScoreFromActivePlayer }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.score {
  width: 80vw;
  background-color: $secondary;
  border-radius: 5px;
  margin: auto;
  margin-top: 1rem;
  padding: 0.5rem;
  color: $font-color-light;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0.25rem 0.25rem;
  p {
    margin: 0;
  }

  &__user,
  &__points {
    font-size: 1.5rem;
  }
  &__high-score {
    width: 100%;
    text-align: end;
  }
}
</style>
