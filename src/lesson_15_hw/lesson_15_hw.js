import "./lesson_15_hw.scss";
import { Garland } from "../common/garland";

const mp = document.querySelector("body");
const garland = new Garland(mp, 500, 1000);
garland.start(2);
