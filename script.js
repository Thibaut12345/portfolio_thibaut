// Intentionally small: the site defaults to LIGHT on every new page load.
const toggle = document.querySelector(".theme-toggle");
const icon = document.querySelector(".theme-symbol");
toggle?.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  icon.textContent = dark ? "☀" : "☾";
  toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
});
document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());
