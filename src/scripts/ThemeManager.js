class ThemeManager {
  constructor() {
    this.themes = ["light", "dark"];
    this.themeIndex = 1;
    this.storageKey = "app-theme";
    this.themeBtn = document.getElementById("theme-toggle");
  }

  setTheme(index) {
    const theme = this.themes[index];
    this.themeIndex = index;
    localStorage.setItem(this.storageKey, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  toggleTheme() {
    this.setTheme((this.themeIndex + 1) % this.themes.length);
  }
}

export const initThemeManager = () => {
  const themeMngr = new ThemeManager();
  const storedTheme = localStorage.getItem(themeMngr.storageKey);
  if (storedTheme) {
    themeMngr.setTheme(themeMngr.themes.indexOf(storedTheme));
  } else {
    themeMngr.setTheme(0);
  }
  themeMngr.themeBtn.addEventListener("click", () => themeMngr.toggleTheme());
};
