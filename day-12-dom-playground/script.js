/**
 * Day 12 - DOM Playground
 * Javascript 30 Day Challenge
 *
 * Interactive page demonstrating core DOM manipulation:
 * selecting elements, updating text, toggling classes,
 * and creating/removing elements on button clicks.
 */

const button1 = document.querySelector("#button1");
const heading = document.querySelector("#heading");

const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const itemList = document.querySelector("#item-list")

const counter = document.querySelector("#counter")
const button4 = document.querySelector("#button4");

let count = 0;

button1.addEventListener("click", () => {
    heading.textContent = "Namaskaram!";
});

button2.addEventListener("click", () => {
    heading.classList.toggle("highlight");
});

button3.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New item";
    itemList.appendChild(newItem);
    count++;
    counter.textContent = "Items added: " + count;
});

button4.addEventListener("click", () => {
    itemList.innerHTML = "";
    count = 0;
    counter.textContent = "Items added: " + count;
});