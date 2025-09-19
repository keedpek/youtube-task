import { initThemeManager } from "./ThemeManager.js";
import { initVideoSlider } from "./videoSlider.js";

const initApp = () => {
  initThemeManager();
  initVideoSlider();
};

document.addEventListener("DOMContentLoaded", initApp);
