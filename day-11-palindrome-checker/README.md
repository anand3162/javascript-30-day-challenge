# Day 11 – Palindrome Checker

A set of string utility functions, centred on a palindrome checker that ignores case, spaces, and punctuation.

## Features
- Detects palindromes in words and full phrases
- Normalizes input by lowercasing it and removing non-letter characters
- Finds the longest word in a sentence
- Counts the vowels in a string

## Functions
| Function | Description |
|----------|-------------|
| `isPalindrome(text)` | Returns `true` if the text reads the same forwards and backwards |
| `longestWord(sentence)` | Returns the longest word in a sentence |
| `countVowels(text)` | Returns the number of vowels in a string |

## Key Concepts
- String methods: `toLowerCase`, `split`, `join`, `includes`
- Array methods: `reverse`
- Looping through strings with `for...of`
- Building a new string character by character
- Comparing characters by their Unicode order (`char >= "a" && char <= "z"`)
- Strings can't be changed in place, so string methods return a new string

## Implementation Notes
- **Normalization:** characters are kept only if they fall between `a` and `z` after lowercasing, which strips spaces and punctuation without using regex.
- **Reversing a string:** strings have no `reverse()` method, so the string is split into an array, reversed, and joined back together.

## Example Output
“Was it a car or a cat I saw” → true
“Madam, I’m Adam” → true
“A man, a plan, a canal: Panama” → true
“Hello, world!” → false
“Racecar” → true

## Usage
```bash
node script.js
```