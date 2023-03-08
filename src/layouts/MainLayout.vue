<script setup>
import { useRoute } from "vue-router";
import { useGameStore } from "src/stores/gameStore";

const route = useRoute();
const gameStore = useGameStore();
const logout = () => {
  gameStore.logout();
};
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> RLGL </q-toolbar-title>

        <div v-if="route.name !== 'Home'" @click="logout">
          <q-icon size="24px" name="logout" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="main-content">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.main-content {
  padding: 0 1rem;
  height: calc(100vh - (50px + 2rem));
}
</style>
