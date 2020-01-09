import "./lesson_16.scss";
import { Button } from "../common/button";

const loginButton = new Button(
  document.querySelector("body"),
  "Log in",
  () => {
    prompt("Enter username");
  },
  "success"
);

const cancelButton = new Button(
  document.querySelector("body"),
  "Log in",
  () => {
    prompt("Enter username");
  },
  "danger"
);
