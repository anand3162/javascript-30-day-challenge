# Day 07 – Interactive Console Todo List

A menu-driven todo list that runs in the terminal. Users can view, add, remove, find, and complete tasks until they choose to exit.

## Features
- Interactive menu that repeats after every action
- View current tasks and completed tasks in numbered lists
- Add new tasks
- Remove tasks by number
- Find a task by name and show its position
- Move tasks from the active list to a completed list
- Input validation for every action

## Functions
| Function | Description |
|----------|-------------|
| `findTask(tasks, taskName)` | Returns the index of a task, or `-1` if it isn't found |
| `main()` | Runs the menu loop and handles user input |

## Key Concepts
- Arrays and array methods: `push`, `splice`, `indexOf`, `forEach`
- `while` loop controlled by a flag variable
- Converting between user-facing numbers (starting at 1) and array indexes (starting at 0)
- `const` arrays can still have their contents changed
- Separating logic (`findTask`) from input and output (`main`)

## Edge Cases Handled
- **Invalid menu choice:** anything outside 1–6 shows "Invalid option"
- **Empty task name:** rejected instead of being added
- **Invalid task number:** `0`, negative numbers, numbers past the end, and non-numbers are rejected. This matters because `splice` with a negative index removes items from the end of the array.
- **Empty lists:** shows a message instead of printing nothing

## Usage
```bash
node script.js
```