const menu_open = document.getElementById("menu_open");
const close_menu = document.getElementById("close");
const smallscreenmenudiv = document.getElementById("smallscreenmenudiv");

menu_open.addEventListener("click", () => {
  smallscreenmenudiv.classList.remove(
    "translate-x-full",
    "opacity-0",
    "pointer-events-none",
  );
  smallscreenmenudiv.classList.add(
    "translate-x-0",
    "opacity-100",
    "pointer-events-auto",
  );
});

close_menu.addEventListener("click", () => {
  smallscreenmenudiv.classList.add(
    "translate-x-full",
    "opacity-0",
    "pointer-events-none",
  );
  smallscreenmenudiv.classList.remove(
    "translate-x-0",
    "opacity-100",
    "pointer-events-auto",
  );
});

window.addEventListener("scroll", function () {
  const headernav = document.querySelector(".headernav");
  const scrollY = window.scrollY;
  const triggerPoint = window.innerHeight * 0.01;
  const navlinksdiv = document.querySelector(".navlinks");
  const links = navlinksdiv.querySelectorAll("a"); // FIXED

  if (scrollY > triggerPoint) {
    headernav.classList.add("bg-white");
    menu_open.classList.remove("text-white", "mb-4");
    menu_open.classList.add("text-black");

    links.forEach((link) => {
      link.classList.add("text-black");
      link.classList.remove("text-white");
    });
  } else {
    headernav.classList.remove("bg-white");
    menu_open.classList.remove("text-black");
    menu_open.classList.add("text-white", "mb-4");

    links.forEach((link) => {
      link.classList.add("text-white");
      link.classList.remove("text-black");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const close_menu = document.getElementById("close");
  const smallscreenmenudiv = document.getElementById("smallscreenmenudiv");
  const links = smallscreenmenudiv.querySelectorAll("a");

  function closeMenu() {
    smallscreenmenudiv.classList.add(
      "translate-x-full",
      "opacity-0",
      "pointer-events-none",
    );
  }

  close_menu.addEventListener("click", closeMenu);

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
