# Day 06 – Tip Calculator

A command-line tool that calculates the tip, total, and per-person share for a restaurant bill.

## Features
- Calculates the tip amount with a default rate of 15%
- Calculates the final total (bill + tip)
- Splits the total evenly between any number of people
- Formats all currency values to two decimal places
- Handles empty or invalid input with sensible defaults

## Functions
| Function | Description |
|----------|-------------|
| `calculateTip(billAmount, tipPercent = 15)` | Returns the tip amount |
| `calculateTotal(billAmount, tipPercent = 15)` | Returns the bill plus tip, reusing `calculateTip` |
| `splitBill(total, numberOfPeople = 1)` | Returns the amount owed per person |

## Key Concepts
- Function declarations, parameters, and return values
- Default parameters
- Composing functions to avoid repeated logic
- Separating calculation logic from input and output
- Reading user input with a reusable async helper (`utils/input.js`)

## Edge Cases Handled
- **Empty input:** an empty entry converts to `0`, not `undefined`, which would bypass the defaults. Input is checked for an empty value before conversion, so the defaults apply correctly.
- **Division by zero:** a person count of zero or less falls back to 1, so the result never shows `Infinity`.

## Usage
```bash
node script.js
```