import "./lamp.scss";
import { getRandomColor } from "../utils/index";

export class Lamp {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
    this.color = getRandomColor();
    this.isActive = false;
    // console.log(this);
  }
  render() {
    this.el = document.createElement("button");
    this.el.classList.add("lamp");
    this.el.addEventListener("click", () => {
      this.toggle();
    });
    this.mountPoint.appendChild(this.el);
  }
  toggleOn() {
    this.el.style.background = this.color;
    this.isActive = true;
  }
  toggleOff() {
    this.el.style.background = "";
    this.isActive = false;
  }
  toggle() {
    if (this.isActive) {
      this.toggleOff();
    } else {
      this.toggleOn();
    }
  }
}

export class Button {
  constructor(
    mountPoint = document.querySelector("body"),
    title,
    onClick,
    type
  ) {
    this.mountPoint = mountPoint;
    this.title = title;
    this.onclick = onclick;
    this.type = type;
  }
  render() {
    this.el = document.createElement("button");
    this.el.onclick = this.onclick;
    this.el.textContent = this.title;
    this.el.classList.add("btn");
    if (this.type === "success") {
      this.el.classList.add("btn_success");
    }
    this.mountPoint.appendChild(this.el);
  }
}
