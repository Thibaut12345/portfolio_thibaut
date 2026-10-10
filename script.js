// Small, framework-free interactions. All content lives in index.html.
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("portfolio-theme");

// Use the visitor's system preference until they choose a theme.
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (prefersDark ? "dark" : "light"));

function setTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === "dark" ? "☀" : "☾";
  toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

toggle.addEventListener("click", () => {
  const theme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(theme);
  localStorage.setItem("portfolio-theme", theme);
});

document.getElementById("year").textContent = new Date().getFullYear();
