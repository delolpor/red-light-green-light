import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      toastText: "",
      toastType: null,
      toastIsVisible: false,
    };
  },
  actions: {
    showToast(message, type) {
      this.toastText = message;
      this.toastType = type;
      this.toastIsVisible = true;
      setTimeout(() => {
        this.toastIsVisible = false;
      }, 2000);
    },
  },
});
