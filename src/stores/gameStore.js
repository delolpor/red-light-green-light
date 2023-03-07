import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    playerName: "",
    playerScore: 0,
    lastFootUsed: null,
  }),
  actions: {
    savePlayer(playerName) {
      this.playerName = playerName;
    },
    increment() {
      this.playerScore++;
    },
    decrement() {
      if (this.playerScore !== 0) this.playerScore--;
    },
    resetScore() {
      this.playerScore = 0;
    },
    takeStep(foot, lightIsGreen) {
      if (!lightIsGreen) {
        this.resetScore();
      } else {
        foot === this.lastFootUsed ? this.decrement() : this.increment();
        this.lastFootUsed = foot;
      }
    },
  },
});
