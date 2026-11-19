# Day 17 – Recipe Card Renderer

Renders a list of recipes as cards on the page, safely handling any missing fields.

## Features

- **Recipe Cards** – each recipe shows its title, cooking time, servings, and notes
- **Default Notes** – recipes without notes show "No notes provided"
- **Optional Author** – an author name is shown only when one is present
- **Sorted by Time** – recipes are ordered from fastest to slowest

## Concepts Practiced

- Object destructuring inside a loop
- Optional chaining (`?.`) for nested fields
- Nullish coalescing (`??`) for default values
- Sorting objects with `sort((a, b) => a.minutes - b.minutes)`
- Creating and appending elements with `createElement()` and `appendChild()`
- Flexbox layout for horizontal cards

## How to Run

Open `index.html` with the Live Server extension in VS Code, or open it directly in a browser.

## Files

├── index.html   # Page structure
├── style.css    # Card and layout styles
└── script.js    # Recipe data, sorting, and rendering