import { eventListeners } from "@popperjs/core";
import { Button } from "bootstrap";
import "./style.css";
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#theexcuse").innerHTML = generateExcuse();
    console.log("Hello Rigo from the console!");
  });
};
let generateExcuse = () => {
  let pronoun = ["The", "My", "His", "Our"];
  let thePronoun = Math.floor(Math.random() * pronoun.length);

  let subject = ["King", "president", "Dad", "Dog"];
  let theSubject = Math.floor(Math.random() * subject.length);

  let Action = ["Ran", "Flew", "Swims", "Jumped"];
  let theAction = Math.floor(Math.random() * Action.length);
  return (
    pronoun[thePronoun] + " " + subject[theSubject] + " " + Action[theAction]
  );
};
