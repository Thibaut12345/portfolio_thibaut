// No frameworks — just a simple optional theme switch.
const themeButton = document.getElementById("theme");
const saved = localStorage.getItem("portfolio-theme");
// Light mode is always the default on first visit.
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === "dark" ? "☀" : "☾";
  themeButton.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}
applyTheme(saved === "dark" ? "dark" : "light");
themeButton.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("portfolio-theme", next);
});
document.getElementById("year").textContent = new Date().getFullYear();
