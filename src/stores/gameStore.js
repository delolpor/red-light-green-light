import { defineStore } from "pinia";
import { useAppStore } from "./appStore";
import { vibrate } from "src/utils/vibration";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    playerName: "",
    activeScore: {},
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
    getLastScore() {
      return this.activeScore[this.playerName] ?? 0;
    },
  },
  actions: {
    savePlayer(playerName) {
      if (playerName !== "") {
        this.playerName = playerName;
        if (!this.checkForReturningPlayer) {
          this.activeScore[playerName] = 0;
        } else {
          this.playerScore = this.getLastScore;
        }
      }
    },
    logout() {
      this.saveScore();
      this.playerName = "";
      this.router.push({ name: "Home" });
    },
    checkForReturningPlayer() {
      return Object.keys(this.savedHighScores).includes(this.playerName);
    },
    saveScore() {
      // Last score
      this.activeScore[this.playerName] = this.playerScore;
      // High score
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
