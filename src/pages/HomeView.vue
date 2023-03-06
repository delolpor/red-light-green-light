<script setup>
import router from "src/router";
import { ref } from "vue";
const playerName = ref("");

const createPlayer = () => {
  if (playerName.value) {
    saveUser(playerName.value);
    router.push("/game");
  }
};
</script>

<template>
  <h1>Create new player</h1>
  <input v-model="playerName" type="text" />
  <button @click="createPlayer">JOIN</button>
</template>
