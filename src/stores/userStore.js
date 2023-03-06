import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    playerName: "",
    playerScore: 0,
  }),
  actions: {
    savePlayer(playerName) {
      this.playerName = playerName;
    },
    increment() {
      this.playerScore++;
    },
    decrement() {
      this.playerScore--;
    },
    resetScore() {
      this.playerScore = 0;
    },
  },
});
