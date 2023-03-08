export const vibrate = (duration = 200) => {
  // Functionality is currently disabled in Firefox for Android https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate#browser_compatibility
  window.navigator?.vibrate?.(duration);
};
