import "./lesson_15.scss";
import { Lamp, Button } from "../common/lamp";
import { Lighter } from "../common/lighter";
// import { createButton } from "../common/";

const mp = document.querySelector("body");

const lamps = [];
for (let i = 0; i < 50; i++) {
  const lamp = new Lamp(mp);
  lamp.render();
  lamp.toggleOn();
  lamps.push(lamp);
}
window.lamps = lamps;

const btn = new Button(mp, "TOGGLE ALL", () => {
  lamps.forEach((lamp, i) => {
    setTimeout(() => {
      lamp.toggle();
    }, 200 * i);
  });
});

btn.render();

const lighter = new Lighter(mp);
lighter.render();
// class Car {
//   constructor(title, consumption, fuel) {
//     this.title = title;
//     this.consumption = consumption;
//     this.fuel = fuel;
//   }

//   move() {
//     this.fuel -= this.consumption;
//     console.log("Moved ", this.title);
//   }
// }

// function greet() {
//   console.log("hello");
// }

// const user = {
//   name: "Ilya",
//   adress: ["str.Str 19", "str.Str 20"],
//   greet: function() {
//     console.log("Hello, ", user.name);
//   }
// };

// const user2 = {
//   name: "Ilya",
//   adress: ["str.Str 19", "str.Str 20"],
//   greet: function() {
//     console.log("Hello, ", user2.name);
//   }
// };

// console.log(user.name);
// user.greet();
// user2.greet();

// function Car(title, consumption, fuel) {
//   this.title = title;
//   this.consumption = consumption;
//   this.fuel = fuel;
//   this.move = moving;
// }

// function moving() {
//   this.fuel -= this.consumption;
//   console.log("Moved ", this.title);
// }

// const car1 = new Car("Ford", 7, 45);
// const car2 = new Car("Skoda", 9, 58);
// const car3 = new Car("Mercedess", 15, 70);

// window.car1 = car1;
// window.car2 = car2;
// window.car3 = car3;
