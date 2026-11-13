# Day 16 – Counter Factory

A `createCounter()` factory function that returns independent counter objects, each with its own private state.

## Features

- **Independent Counters** – each counter tracks its own value without affecting others
- **Private State** – the count cannot be read or changed directly from outside
- **Custom Starting Value** – counters can start from any number (default `0`)
- **Custom Step** – increment and decrement by any amount (default `1`)
- **Private History** – records every value the counter has held, available through a method

## Concepts Practiced

- Factory functions that return objects
- Closures for private state
- Object methods (`increment`, `decrement`, `getValue`, `getHistory`)
- Default parameters
- Compound assignment with `+=` and `-=`

## How to Run

Run `node script.js` in the terminal, or open `index.html` and check the browser console.

## Files

├── index.html   # Page shell
├── style.css    # Basic page styles
└── script.js    # Counter factory and demo output