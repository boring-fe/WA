// const someButton = document.querySelectorAll(".my-btn");
// console.dir(someButton);
const buttons = document.querySelectorAll(".my-btn");
const masterButton = document.querySelector(".master-btn");
const colors = [
  "red",
  "green",
  "magenta",
  "rgba(0, 255, 255, 0.5)",
  "yellowgreen"
];

const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};
const getRandomColor = () => {
  return `rgb(${getRandomNumber(255)}, 
  ${getRandomNumber(255)}, 
  ${getRandomNumber(255)})`;
};

const toggleOn = (button, i) => {
  button.style.backgroundColor = getRandomColor();
  button.style.transform = `translateX(${100 * (i + 1)}%)`;
  button.style.transition = "all 0.5s";
  button.setAttribute("data-is-active", true);
};

const toggleOff = button => {
  button.style.backgroundColor = "transparent";
  button.style.transform = "translateX(0)";
  button.style.transition = "all 0.2s";
  button.removeAttribute("data-is-active");
};

masterButton.onclick = () => {
  const isActive = masterButton.getAttribute("data-is-active");

  for (let j = 0; j < buttons.length; j++) {
    //   const button = buttons[i];
    if (isActive) {
      toggleOff(buttons[j]);
    } else {
      toggleOn(buttons[j], j);
    }
  }

  if (isActive) {
    masterButton.removeAttribute("data-is-active");
  } else {
    masterButton.setAttribute("data-is-active", true);
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      const button = buttons[i];
      if (button.getAttribute("data-is-active")) {
        toggleOff(button);
      } else {
        toggleOn(button, i);
      }
    };
  }
};
