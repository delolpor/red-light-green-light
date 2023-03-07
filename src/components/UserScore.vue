<script setup>
import { useUserStore } from "src/stores/userStore";

const userStore = useUserStore();
</script>
<template>
  <div class="score">
    <p class="score__user">Player: {{ userStore.playerName }}</p>
    <p class="score__points">Score: {{ userStore.playerScore }}</p>
  </div>
</template>
<style lang="scss" scoped>
.score {
  width: 80vw;
  background-color: $secondary;
  border-radius: 5px;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  color: $font-color-light;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0.25rem 0.25rem;

  &__user,
  &__points {
    font-size: 1.5rem;
  }
}
</style>
