/**
 * Day 15 - Interactive To-Do List
 * Javascript 30 Day Challenge
 *
 * To-do app driven by a single todos array and render() function.
 * Supports adding, toggling, and deleting tasks via a delegated
 * click listener, with a live completed/total counter.
 */

let todos = [];

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const counter = document.querySelector("#counter");
const clearBtn = document.querySelector("#clear-btn");

function render() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.dataset.index = index;
    li.textContent = todo.text;

    if (todo.done) li.classList.add("done");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.dataset.index = index;
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
  const completed = todos.filter((todo) => todo.done);
  counter.textContent = completed.length + "/" + todos.length + " Completed";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let task = input.value.trim();
  if (task === "") {
    counter.textContent = "Please enter a task!";
    return;
  }
  todos.push({ text: task, done: false });
  render();
  console.log(todos);
  input.value = "";
});

list.addEventListener("click", (event) => {
  const index = Number(event.target.dataset.index);

  if (event.target.tagName === "BUTTON") {
    todos.splice(index, 1);
    render();
    return;
  }
  todos[index].done = !todos[index].done;
  render();
});

clearBtn.addEventListener("click", (event) => {
  todos = todos.filter((todo) => !todo.done);
  render();
});

render();
