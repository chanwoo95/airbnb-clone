const nav = document.querySelector(".header__container");
const navHeight = nav.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (navHeight * 2 > window.scrollY) {
    nav.classList.remove("scroll");
  } else {
    nav.classList.add("scroll");
  }
});
