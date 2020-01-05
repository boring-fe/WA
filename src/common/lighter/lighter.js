import "../common/lighterDinamic.scss";

export class Lighter {
  constructor(mp = document.querySelector("body")) {
    this.mountPoint = mp;
    this.lamps = [];
  }
  render() {
    this.el = document.createElement("div");
    this.el.classList.add("traffic-lighter");
    this.renderLights();
    this.mountPoint.appendChild(this.el);
  }
  renderLights() {
    for (let i = 0; i < 3; i++) {
      const lamp = new Lamp(this.el);
      lamp.render();
      this.lamps.push(lamp);
    }
  }
}
