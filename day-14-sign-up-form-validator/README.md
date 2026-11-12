# Day 14 – Sign Up Form Validator

A sign up form that validates user input and shows a clear message for the first failing rule.

## Features

- **Username Check** – requires at least 3 characters
- **Email Check** – requires an `@` and a `.`
- **Password Check** – requires at least 8 characters
- **Password Match** – confirms both password fields are identical
- **Success Message** – shown when all rules pass
- **Live Message Clearing** – messages clear as soon as the user starts typing
- **Password Strength Indicator** – rates passwords as Weak, Medium, or Strong based on length and character variety

## Concepts Practiced

- Handling form submission with the `submit` event
- Preventing page reload with `event.preventDefault()`
- Reading input values with `.value` and `.trim()`
- Early returns to report only the first failing rule
- Listening for typing with the `input` event
- Checking characters with `includes()` and simple regular expressions
- Score-based logic for password strength

## How to Run

Open `index.html` with the Live Server extension in VS Code, or open it directly in a browser.

## Files

├── index.html   # Sign up form structure
├── style.css    # Form and message styles
└── script.js    # Validation and strength logic