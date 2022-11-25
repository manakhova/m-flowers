import "./scss/main.scss";

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  scrollY > 40
    ? header.classList.add("scrolled")
    : header.classList.remove("scrolled");
});
