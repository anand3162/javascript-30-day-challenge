# Day 04 – Grade Calculator

## Task
Take a numeric score and print the letter grade with feedback.
Use if/else if/else to find the grade and a switch to choose the feedback message.
Bonus: check that the score is between 0 and 100, and add +/- modifiers.

## What I learned
- if/else checks conditions in order and stops at the first one that's true
- switch compares one value against several cases, and break stops it from falling through
- default runs only when no case matches, so it works as a safety net
- && joins two conditions that must both be true
- % 10 gives the last digit of a number, which I used for the +/- modifier
- Code that should only run for valid input goes inside the if block

## What confused me
- letterGrade worked even though I never declared it, because JavaScript quietly created a global variable. I declared it with let to fix that.
- (0 || 1 || 2) doesn't mean "0 or 1 or 2". It evaluates to 1, so I used <= 2 instead.
- ${letterGrade, modifier} printed only the modifier, because ${} keeps only the last value. I used ${letterGrade}${modifier}.
- A ; after an if condition ends the if early, so the block runs every time
- There's no `when` in JavaScript, only `if`
- Invalid scores still printed a grade until I moved all the grade logic inside the validation if
- F and 100 shouldn't get modifiers

## How to run
node script.js