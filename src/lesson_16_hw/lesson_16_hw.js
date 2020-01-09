import "./lesson_16_hw.scss";

class MyTime {
  constructor(mountPoint, hours, minutes, seconds, fullTime) {
    this.mountPoint = mountPoint;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.fullTime = fullTime;
  }
  render() {
    this.el = document.createElement("div");
    this.el.classList.add("mainClock");
    this.mountPoint.appendChild(this.el);
  }
  changeTime() {
    setInterval(() => {
      let date = new Date();
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.fullTime = this.hours + " : " + this.minutes + " : " + this.seconds;
      this.el.innerHTML = this.fullTime;
    }, 1000);
  }
}

const mp = document.querySelector("body");
const actualTime = new MyTime(mp);
actualTime.render();
actualTime.changeTime();
