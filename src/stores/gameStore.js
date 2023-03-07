import { defineStore } from "pinia";
import { useAppStore } from "./appStore";
import { vibrate } from "src/utils/vibration";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    playerName: "",
    playerScore: 0,
    lastFootUsed: null,
    savedHighScores: {},
  }),
  getters: {
    playerHasJoined() {
      return this.playerName !== "";
    },
    getHighScoreFromActivePlayer() {
      return this.savedHighScores[this.playerName] ?? 0;
    },
  },
  actions: {
    savePlayer(playerName) {
      if (playerName !== "") {
        this.playerName = playerName;
      } else {
      }
    },
    checkForReturningPlayer() {
      return Object.keys(this.savedHighScores).includes(this.playerName);
    },
    saveScore() {
      if (this.playerScore > this.getHighScoreFromActivePlayer) {
        this.savedHighScores[this.playerName] = this.playerScore;
      }
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
    loseGame() {
      const appStore = useAppStore();

      vibrate();

      this.saveScore();
      appStore.showToast(
        `Game over.
         Your score was ${this.getHighScoreFromActivePlayer}`,
        "info"
      );
      this.resetScore();
    },
    takeStep(foot, lightIsGreen) {
      if (!lightIsGreen) {
        this.loseGame();
      } else {
        foot === this.lastFootUsed ? this.decrement() : this.increment();
        this.lastFootUsed = foot;
      }
    },
  },
});
