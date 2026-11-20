# Day 18 – Mini Utility Library

A collection of small, general-purpose utility functions that can be reused across projects.

## Functions

- **`sumAll(...numbers)`** – returns the total of any number of arguments
- **`mergeObjects(...objects)`** – merges any number of objects into one; later keys override earlier ones
- **`cloneArray(array)`** – returns a shallow copy of an array
- **`greet(name, greeting = "Hello")`** – returns a greeting string with an optional custom greeting
- **`getFirstAndRest(array)`** – returns `{ first, rest }` from an array
- **`average(...numbers)`** – returns the average, reusing `sumAll` internally

## Concepts Practiced

- Rest parameters (`...numbers`) to accept any number of arguments
- Spread syntax for arrays, objects, and function calls
- `reduce()` to combine values into a single result
- Default parameters
- Array destructuring with rest (`const [first, ...rest] = array`)
- Property shorthand when returning objects
- Reusing one function inside another

## How to Run

Run `node script.js` in the terminal, or open `index.html` and check the browser console.

## Files

├── index.html   # Page shell
├── style.css    # Basic page styles
└── script.js    # Utility functions and example output