import "./meeting_7_hw.scss";

class myDropDown {
  constructor(mp = document.querySelector("body")) {
    this.mp = mp;
    this.arr = arr;
  }

  render() {
    this.container = document.createElement("div");
    this.container.classList.add("dropdown");
    this.mp.appendChild(this.container);

    this.button = document.createElement("button");
    this.button.classList.add("dropbtn");
    this.button.innerHTML = "Title of dropdown";
    this.container.appendChild(this.button);

    this.container_2 = document.createElement("ul");
    this.container_2.classList.add("dropdown-content");
    this.container.appendChild(this.container_2);

    for (let i = 0; i < arr.length; i++) {
      this.renderItems(arr, i);
    }

    this.button.addEventListener("click", () => {
      this.container_2.classList.toggle("show");
    });
  }

  renderItems(arr, i) {
    let currentElement = arr[i];
    this.currentElement = document.createElement("li");
    this.currentElement.innerHTML = currentElement;
    this.container_2.appendChild(this.currentElement);
    this.currentElement.addEventListener("click", () => {
      this.button.innerHTML = currentElement;
    });
  }
}

const newDropDown = new myDropDown();
let arr = [
  "Home",
  "About",
  "Contact",
  "Career",
  "Customer support",
  "Our projects"
];
newDropDown.render(arr);
