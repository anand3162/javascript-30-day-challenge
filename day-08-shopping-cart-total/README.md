# Day 08 – Shopping Cart Total

A script that processes a shopping cart to calculate the subtotal, apply a discount, and print a formatted bill sorted by price.

## Features
- Calculates the subtotal from each item's price and quantity
- Applies a 10% discount when the subtotal is over 100
- Prints a formatted bill with items sorted from most to least expensive
- Lists items ordered in quantities greater than 1
- Formats all money values to two decimal places

## Key Concepts
- Arrays of objects
- `map()` to transform each item into a line total
- `reduce()` to combine values into a single subtotal
- `sort()` with a compare function to order objects by a property
- `filter()` to select items that match a condition
- Method chaining (`map` → `reduce`)
- Column alignment with `padEnd()`

## Implementation Notes
- **Separate subtotal and total:** the discounted total is stored in its own variable, so the original subtotal stays available.
- **Display-only formatting:** `.toFixed(2)` returns a string, so it's used only when printing, never in calculations.
- **`sort()` changes the original array:** the bill is printed after sorting. Use `slice()` first if you need to keep the original order.

## Usage
```bash
node script.js
```