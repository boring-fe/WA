//function of creating some quantity of lamps
let createBlock = quantity => {
  for (let i = 0; i < quantity; i++) {
    let lamp = document.createElement("button");
    lamp.className = "lamp-element";
    document.body.append(lamp);
  }
};

//function of asking of User: how many lamps he wants to create
let quantityOfElements = () => {
  return parseInt(prompt("Enter a quantity of the lamps", "0"));
};

//creating needed quantity of lamps
let quantityElem = quantityOfElements();
createBlock(quantityElem);

const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};
const getRandomColor = () => {
  return `rgb(
      ${getRandomNumber(255)}, 
      ${getRandomNumber(255)}, 
      ${getRandomNumber(255)})`;
};
let randomColor = getRandomColor();

//creating onclick event on the every lamp

const singleLamp = document.querySelectorAll(".lamp-element");
for (let i = 0; i < quantityElem; i++) {
  singleLamp[i].onclick = () => {
    let randomColor = getRandomColor();
    singleLamp[i].style.backgroundColor = randomColor;
    singleLamp[i].style.transition = "all 0.5s";
  };
}
