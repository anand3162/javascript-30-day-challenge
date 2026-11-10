# Day 13 – Color Switcher

An interactive color switcher that changes the page background using a single delegated event listener.

## Features

- **Color Swatches** – five preset colors applied to the page background on click
- **Active Highlight** – the selected swatch is outlined so the current choice is always visible
- **Random Color** – generates a random hex color on each click
- **Click Filtering** – clicks on empty space inside the container are ignored

## Concepts Practiced

- Event delegation with one listener on a parent container
- Identifying the clicked element with `event.target`
- Reading custom attributes with `dataset`
- Checking elements with `classList.contains()`
- Early returns to skip irrelevant clicks
- Generating random hex colors with `Math.random()` and `Math.floor()`
- Keeping logic DRY by deciding the color first, then applying it once

## How to Run

Open `index.html` with the Live Server extension in VS Code, or open it directly in a browser.

## Files

├── index.html   # Page structure and color swatches
├── style.css    # Page and button styles
└── script.js    # Delegated click handling and color logic