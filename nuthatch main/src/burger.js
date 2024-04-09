/*https://www.youtube.com/watch?v=flItyHiDm7E&ab_channel=WebDevTutorials*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
