# Day 15 – Interactive To-Do List

A to-do list app where all tasks live in an array and the page is redrawn from that array on every change.

## Features

- **Add Tasks** – submit the form to add a new task
- **Toggle Complete** – click a task to mark it done or not done
- **Delete Tasks** – each task has its own delete button
- **Live Counter** – shows completed versus total tasks
- **Clear Completed** – removes all finished tasks at once
- **Empty Input Guard** – blank or whitespace-only tasks are not added

## Concepts Practiced

- Storing state in an array of objects (`{ text, done }`)
- Rendering the UI from data with a single `render()` function
- Creating elements with `createElement()` and `appendChild()`
- Tracking positions with `forEach` index and `dataset`
- Event delegation with one listener on the list
- Updating arrays with `push()`, `splice()`, and `filter()`

## How to Run

Open `index.html` with the Live Server extension in VS Code, or open it directly in a browser.

## Files

├── index.html   # Form, counter, and list structure
├── style.css    # Layout, spacing, and completed-task styling
└── script.js    # State, rendering, and event handling