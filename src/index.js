import "./scss/main.scss";

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  scrollY > 40
    ? header.classList.add("scrolled")
    : header.classList.remove("scrolled");
});

const nextButton = document.querySelector(".start__button--next");
const prevButton = document.querySelector(".start__button--prev");
const firstStep = document.querySelector("#first-step");
const secondStep = document.querySelector("#second-step");

nextButton.addEventListener('click', () => {
  firstStep.style.display = 'none';
  secondStep.style.display = "flex";
});
prevButton.addEventListener("click", () => {
  firstStep.style.display = "flex";
  secondStep.style.display = "none";
});

const navigation = header.querySelector(".header__nav");
const menuButton = header.querySelector(".header__menu-button");

menuButton.addEventListener('click', () => {
  header.classList.toggle("menuOpened");
  menuButton.classList.toggle("closeButton");
})