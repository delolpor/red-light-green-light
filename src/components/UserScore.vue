<script setup>
import { useGameStore } from "src/stores/gameStore";
import { watch, computed, ref } from "vue";

const gameStore = useGameStore();

const tweenedNumber = ref(0);

const animatedNumber = computed(() => {
  return tweenedNumber.value.toFixed(0);
});

watch(
  () => gameStore.playerScore,
  (newValue, oldValue) => {
    gsap.to(tweenedNumber, { duration: 0.5, value: newValue });
  }
);
</script>
<template>
  <div class="score">
    <p class="score__high-score">
      High score: {{ gameStore.getHighScoreFromActivePlayer }}
    </p>
    <Transition>
      <p class="score__points">Score: {{ animatedNumber }}</p>
    </Transition>
  </div>
</template>
<style lang="scss" scoped>
.score {
  width: 60vw;
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
