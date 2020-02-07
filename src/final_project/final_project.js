import "./final_project.scss";
import { slideshow } from "./js/slides";
import { headerView } from "./js/slides";

toggle.addEventListener("click", () => {
  turn.classList.toggle("page-nav_expand");
});

const main = document.querySelector(".main");
slideshow(main);

const afterheader = document.querySelector(".header");
headerView(afterheader);
