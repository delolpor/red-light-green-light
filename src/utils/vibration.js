export const vibrate = (duration = 200) => {
  window.navigator?.vibrate?.(duration);
};
