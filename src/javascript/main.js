import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const $nav = document.querySelector(".hero__navbar");
const $navBtn = document.querySelector("#burger");
const $articles = document.querySelectorAll(".article");
const $navItems = document.querySelectorAll(".hero__navbar a");
const $textSquares = document.querySelectorAll(".home__titleContainer");

$navItems.forEach((a) => a.addEventListener("click", () => activeMenu()));
const activeMenu = () => {
  $nav.classList.toggle("active");
  $navBtn.classList.toggle("active");
  $articles.forEach((article) => article.classList.toggle("hidden"));
  $textSquares.forEach((square) => square.classList.toggle("hidden"));
};
$navBtn.addEventListener("click", activeMenu);

var parallaxIt = function(e, target, parent, movement) {
  var relX = e.pageX - offset(parent).left;
  var relY = e.pageY - offset(parent).top;
  var x = ((relX - parent.offsetWidth / 2) / parent.offsetWidth) * movement;
  var y = ((relY - parent.offsetHeight / 2) / parent.offsetHeight) * movement;

  target.style.setProperty("--parallax-x", x + "px");
  target.style.setProperty("--parallax-y", y + "px");
};

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

document.querySelectorAll(".container").forEach((container) =>
  container.addEventListener("mousemove", function(e) {
    parallaxIt(e, this.querySelector("h1"), this, 80);
  })
);

console.log(typeof 42);
