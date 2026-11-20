/**
 * Day 18 - Mini Utility Library
 * Javascript 30 Day Challenge
 *
 * A small set of reusable utility functions built with spread,
 * rest parameters, default parameters and array destructuring.
 */
function sumAll(...numbers){
  return numbers.reduce((total, n) => total + n, 0);
}
function mergeObjects(...objects){
  return objects.reduce((mergedObjects, n) => ({ ...mergedObjects, ...n  }) , {});
}
function cloneArray(array){
  return [...array];
}
function greet(name, greeting = "Hello"){
  return greeting + " " +name;
}

function getFirstAndRest(array){
  const [first, ...rest] = array;
  return {first,rest};
}

function average(...numbers){
  return sumAll(...numbers)/numbers.length;
}

console.log("\n");
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20));
console.log("\n");
console.log(mergeObjects({ name: "Iris" }, { age: 30 }));
console.log(mergeObjects({ city: "Toronto" }, { job: "Dev" }, { pet: "Cat" }));
console.log("\n");
console.log(cloneArray([1, 2, 3]));
console.log(cloneArray(["a", "b"]));
console.log("\n");
console.log(greet("Anand"));
console.log(greet("Anand", "How are you"));
console.log("\n");
console.log(getFirstAndRest([10, 20, 30]));
console.log(getFirstAndRest(["a", "b", "c", "d"]));
console.log("\n");
console.log(average(1, 2, 3));
console.log(average(33, 89, 72));