// Day 03 – Simple Calculator
// Converts two string inputs to numbers and prints every arithmetic result.

const numAString = "20";
const numBString = "3";

const numA = Number(numAString);
const numB = Number(numBString);

console.log("Addition-",numA + numB);
console.log("Subtraction-",numA - numB);
console.log("Multiplication-",numA * numB);
console.log("Division-",numA / numB);

console.log("Modulo-",numA % numB);
console.log("Power-",numA ** numB);

const size = numA > numB ? "numA is greater" : numA < numB ? "numB is greater" : "numA and numB are equal";
console.log(size);

const isWhole = (numA % numB === 0);
console.log("Is division whole?",isWhole);