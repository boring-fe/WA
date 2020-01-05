import { Lamp } from "../lamp";

export class Garland {
  constructor(mountPoint, lampsCount = 50, time = 500) {
    this.mountPoint = mountPoint;
    this.lampsCount = lampsCount;
    this.time = time;
  }
  render() {
    const lamps = [];
    for (let i = 0; i < this.lampsCount; i++) {
      const lamp = new Lamp(this.mountPoint);
      lamp.render();
      this.lamp = lamp;
      lamps.push(lamp);
    }
    window.lamps = lamps;
  }
  start(mode = 1) {
    if (mode == 1) {
      this.render();
      setInterval(() => {
        for (let i = 0; i < this.lampsCount; i++) {
          lamps[i].toggle();
        }
      }, this.time);
    } else if (mode == 2) {
      this.render();
      setInterval(() => {
        lamps[Math.floor(Math.random() * this.lampsCount)].toggle();
      }, this.time * 0.00025);
    }
  }
}
