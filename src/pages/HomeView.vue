<script setup>
import { useUserStore } from "src/stores/userStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const playerName = ref("");

const userStore = useUserStore();

const createPlayer = () => {
  if (playerName.value) {
    userStore.savePlayer(playerName.value);

    router.push("/game");
  }
};
</script>

<template>
  <h1>Create new player</h1>
  <form class="form" @submit.prevent="createPlayer">
    <q-input v-model="playerName" label="Introduce your name" />
    <q-btn @click="createPlayer" color="primary" label="JOIN" />
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
