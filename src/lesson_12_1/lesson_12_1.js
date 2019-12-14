import "./lesson_12_1.scss";

const controlButton = document.querySelector(".traffic-lights__control-button");

const red_lamp = document.getElementById("red_lamp");

controlButton.onclick = function() {
  console.log("asdasdas");
};
const lightButtons = document.querySelectorAll(".traffic-lights__lamp");
const redButton = document.querySelector(".traffic-lights__lamp_red");
const yellowButton = document.querySelector(".traffic-lights__lamp_yellow");
const greenButton = document.querySelector(".traffic-lights__lamp_green");

function clearColors() {
  redButton.style.backgroundColor = "rgb(39, 34, 34)";
  yellowButton.style.backgroundColor = "rgb(39, 34, 34)";
  greenButton.style.backgroundColor = "rgb(39, 34, 34)";
}

redButton.setAttribute("data-is-active", true);
yellowButton.setAttribute("data-is-active", true);
greenButton.setAttribute("data-is-active", true);
console.log(redButton.getAttribute("data-is-active"));

redButton.onclick = function() {
  if (redButton.getAttribute("data-is-active")) {
    clearColors();
    redButton.style.backgroundColor = "red";
  }
};

yellowButton.onclick = function() {
  if (yellowButton.getAttribute("data-is-active")) {
    clearColors();
    yellowButton.style.backgroundColor = "yellow";
  }
};

greenButton.onclick = function() {
  if (greenButton.getAttribute("data-is-active")) {
    clearColors();
    greenButton.style.backgroundColor = "green";
  }
};

controlButton.onclick = function() {
  clearColors();
  redButton.removeAttribute("data-is-active", "false");
  yellowButton.removeAttribute("data-is-active", "false");
  greenButton.removeAttribute("data-is-active", "false");
};
