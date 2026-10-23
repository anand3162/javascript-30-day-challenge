// Day 06 – Tip Calculator
// Asks for a bill, tip %, and number of people, then prints the tip, total, and split per person.

import { ask } from "../utils/input.js";

function calculateTip(billAmount, tipPercent = 15) {
  const tip = (billAmount * tipPercent) / 100;
  return tip;
}

function calculateTotal(billAmount, tipPercent = 15) {
  const total = billAmount + calculateTip(billAmount, tipPercent);
  return total;
}

function splitBill(total, numberOfPeople = 1) {
  const split = total / numberOfPeople;
  return split;
}

async function main() {
  const billAmount = Number(await ask("Enter the bill amount:"));
  const tipInput = await ask("Enter the tip percentage:");
  const tipPercent = tipInput === "" ? undefined : Number(tipInput);
  const numberOfPeopleInput = await ask("Enter the number of people:");
  const numberOfPeople =
    numberOfPeopleInput === "" || Number(numberOfPeopleInput) <= 0
      ? undefined
      : Number(numberOfPeopleInput);

  const tip = calculateTip(billAmount, tipPercent);
  const total = calculateTotal(billAmount, tipPercent);
  const split = splitBill(total, numberOfPeople);

  console.log(`The tip amount is: ${tip.toFixed(2)}`);
  console.log(`The total amount is: ${total.toFixed(2)}`);
  console.log(`The amount per person is: ${split.toFixed(2)}`);
}
main();
