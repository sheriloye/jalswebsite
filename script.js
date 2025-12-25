document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Active nav link
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // Theme toggle (saved)
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (toggle) {
      const isDark = theme === "dark";
      toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      toggle.innerHTML = isDark ? "☀️" : "🌙";
    }
  };




  // Default theme:
  // - use saved value if present
  // - otherwise start in dark mode (construction vibe looks great)
  const saved = localStorage.getItem("theme");
  applyTheme(saved || "dark");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
});
