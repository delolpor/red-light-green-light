import { ref, onMounted } from "vue";
import { useGameStore } from "src/stores/gameStore";
const gameStore = useGameStore();

export function useLight() {
  const lightIsGreen = ref(false);

  const score = gameStore.playerScore;

  const timeoutRedLight = 3000;
  const timeoutGreenLight =
    Math.max(10000 - score * 100, 2000) + Math.floor(Math.random(-1500, 1501));

  const switchLight = () => {
    lightIsGreen.value = !lightIsGreen.value;
    setTimeout(
      switchLight,
      lightIsGreen.value ? timeoutGreenLight : timeoutRedLight
    );
  };

  onMounted(() => {
    switchLight();
  });

  return {
    lightIsGreen,
  };
}
