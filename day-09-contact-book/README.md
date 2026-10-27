# Day 09 – Contact Book

A small contact book stored as an array of objects. The user searches for a contact by name, and the program prints that contact, updates their phone number, and adds a new contact.

## Features
- Search contacts by name using user input
- Print a formatted contact line using destructuring
- Update a contact's phone number directly on the object
- Add new contacts with a reusable function
- Each contact includes a nested address object (city and country)

## Functions
| Function | Description |
|----------|-------------|
| `findContact(name)` | Returns the matching contact object, or `undefined` if none is found |
| `addContact(contact)` | Adds a new contact object to the array |

## Key Concepts
- Objects and arrays of objects
- Nested objects (`address`)
- `find()` to return the first matching item
- Object destructuring
- Updating object properties directly
- `const` arrays and objects can still have their contents changed

## Edge Cases Handled
- **Contact not found:** `find()` returns `undefined`, and destructuring `undefined` throws an error. The result is checked before destructuring, and a "not found" message is shown instead.

## Usage
```bash
node script.js
```
