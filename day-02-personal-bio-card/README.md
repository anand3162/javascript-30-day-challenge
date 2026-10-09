# Day 02 – Personal Bio Card

## Task
Use variables of different data types to print a multi-line bio to the console, and log the type of each variable.
Bonus: add a `null` variable and try reassigning a `const`.

## What I learned
- `const` is for values that won't change, `let` is for values that might change
- Primitive types: string, number, boolean, null
- `typeof` tells you a value's type
- Template literals (backticks) let me put variables inside strings with `${}`
- `\n` adds a new line inside a string

## What confused me
- `${}` didn't work with double quotes, only with backticks
- `typeof null` returns "object", which is a known JavaScript bug from the early days
- Reassigning a `const` throws: TypeError: Assignment to constant variable

## How to run
node script.js