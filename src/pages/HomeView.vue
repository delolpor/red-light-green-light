<script setup>
import { useGameStore } from "src/stores/gameStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const playerName = ref("");

const gameStore = useGameStore();

const createPlayer = () => {
  if (playerName.value) {
    gameStore.savePlayer(playerName.value);

    router.push("/game");
  }
};
</script>

<template>
  <h1>Create new player</h1>
  <form class="form" @submit.prevent="createPlayer">
    <q-input v-model="playerName" label="Introduce your name" />
    <q-btn @click="createPlayer" color="primary" label="Start a new game" />
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  width: 90%;
  margin: auto;
}
</style>
