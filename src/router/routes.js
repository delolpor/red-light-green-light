import { useGameStore } from "src/stores/gameStore";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "Home", component: () => import("pages/HomeView.vue") },
      {
        path: "game",
        name: "Game",
        component: () => import("pages/GameView.vue"),
        beforeEnter: () => {
          const gameStore = useGameStore();
          if (!gameStore.playerHasJoined) return { name: "Home" };
        },
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    redirect: "/",
  },
];

export default routes;
