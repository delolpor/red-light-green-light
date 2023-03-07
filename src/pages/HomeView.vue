<script setup>
import { useGameStore } from "src/stores/gameStore";
import { useAppStore } from "src/stores/appStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const playerName = ref("");

const gameStore = useGameStore();
const appStore = useAppStore();

const createPlayer = () => {
  if (playerName.value.trim()) {
    gameStore.savePlayer(playerName.value);

    router.push("/game");
  } else {
    appStore.showToast(`The name cannot be empty`, "warning");
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
  height: calc(100% - 6rem);
  margin: auto;
}
</style>
