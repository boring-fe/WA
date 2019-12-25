const btn = document.createElement("button");
console.log(btn);
btn.style.background = "red";
btn.textContent = "Call button!";

const body = document.querySelector("body");

body.appendChild(btn);
