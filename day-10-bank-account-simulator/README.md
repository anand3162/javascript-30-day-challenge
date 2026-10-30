# Day 10 – Bank Account Simulator

An account object that manages its own balance and transaction history through methods.

## Features
- Deposit funds and record the transaction
- Withdraw funds, with a guard that refuses withdrawals larger than the balance
- Apply interest as a percentage of the current balance
- Print a statement showing account details and the full transaction history

## Methods
| Method | Description |
|--------|-------------|
| `deposit(amount)` | Adds to the balance and records the transaction |
| `withdraw(amount)` | Subtracts from the balance if funds are sufficient |
| `interest(rate)` | Increases the balance by a percentage and records the amount earned |
| `printStatement()` | Prints account details and every transaction |

## Key Concepts
- Object methods and `this`
- Guard conditions to reject invalid actions
- Storing transactions as objects (`{ type, amount }`) for structured history
- `Object.entries()` to loop over an object's properties dynamically
- `typeof` to filter out methods when printing object data

## Implementation Notes
- **Structured history:** each transaction is stored as an object, not a string, so it can be filtered, totalled, or extended later.
- **Dynamic details:** `printStatement()` uses `Object.entries()` to print account properties automatically, skipping methods and the history array.

## Usage
```bash
node script.js
```