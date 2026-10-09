# Day 03 – Simple Calculator

## Task
Take two numbers and print every basic arithmetic result, clearly labeled. Use a ternary to say which number is bigger.
Bonus: start with the numbers as strings and convert them with Number(), and check whether the division is a whole number using ===.

## What I learned
- Arithmetic operators: + - * / % **
- % (modulo) gives the remainder, and ** raises a number to a power
- A ternary handles two outcomes, so for three outcomes I chained two ternaries
- Number() converts a string to a number, but it returns a new value instead of changing the original
- If numA % numB === 0, the division is a whole number

## What confused me
- "20" + "10" gave "2010", because + joins strings instead of adding them
- The other operators (- * / % **) converted the strings automatically, so only + broke
- Number(numA, numB) didn't work, because Number() takes one value and I wasn't saving the result
- I couldn't do numA = Number(numA), because numA was a const

## How to run
node script.js