const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

toggle?.addEventListener("click", () => {
  const open = links.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    links.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});
