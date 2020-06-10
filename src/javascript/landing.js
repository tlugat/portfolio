import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const nav = document.querySelector(".hero__navbar");
const navBtn = document.querySelector("#burger");
const article = document.querySelectorAll(".article");
const navItems = document.querySelectorAll(".hero__navbar a");

navItems.forEach((a) => a.addEventListener("click", () => activeMenu()));
const activeMenu = () => {
  nav.classList.toggle("active");
  navBtn.classList.toggle("active");
  article.forEach((article) => article.classList.toggle("hidden"));
};
navBtn.addEventListener("click", activeMenu);
