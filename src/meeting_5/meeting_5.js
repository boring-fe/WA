import "./meeting_5.scss";
//function of creating some quantity of lamps
let createBlock = quantity => {
  for (let i = 0; i < quantity; i++) {
    let div = document.createElement("div");
    div.className = "block";
    document.body.append(div);
  }
};

//function of asking of User: how many lamps he wants to create
let quantityOfElements = () => {
  return parseInt(prompt("Enter a quantity of the lamps", "0"));
};

//creating needed quantity of lamps
let quantityElem = quantityOfElements();
createBlock(quantityElem);

const lamp = document.querySelectorAll("div.block");
console.log(lamp);
//functions of creating random color like rgb(0..255, 0..255, 0..255)
function randomNumber255() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  return `rgb(${randomNumber255()}, ${randomNumber255()}, ${randomNumber255()})`;
}

//assign a random color to the lamps

let lamp1 = document.querySelectorAll("div.block");
for (let i = 0; i < lamp1.length; i++) {
  let randomColor = getRandomColor();
  console.log(getRandomColor());
  lamp1[i].style.backgroundColor = "randomColor";
  //The problem is: the color doesn't assigns to the element.
}
