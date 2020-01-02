import "./lesson_14.scss";
import { slideShow } from "../common/slideshow";
import { analize } from "../common/myCoolMetric";
import { accordion } from "../common/accordion";

const body = document.querySelector("body");
slideShow(body);
analize();
accordion(body);
