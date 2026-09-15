const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

toggle?.addEventListener("click", () => {
  const open = links.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Close ✕" : "Menu";
});

document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => {
    links.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
    if (toggle) toggle.textContent = "Menu";
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && links.classList.contains("menu-open")) {
    links.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
    if (toggle) toggle.textContent = "Menu";
  }
});
