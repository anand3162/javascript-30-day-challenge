/**
 * Day 16 - Counter Factory
 * Javascript 30 Day Challenge
 *
 * Factory function that creates independent counters with private
 * state using closures. Supports custom step sizes and a private
 * history of every value the counter has held.
 */

function createCounter(startingValue = 0) {
  
  let count = startingValue;
  let history = [];
  return {
    increment(step = 1){
      count += step;
      history.push(count);
    },
    decrement(step = 1){
      count -= step;
      history.push(count);
    },
    getValue(){
      return count;
    },
    getHistory(){
      return history;
    }
  }
}

const counterA = createCounter();
const counterB = createCounter(5);

counterA.increment(3);
counterA.increment(10);
counterA.increment();

counterB.increment();

console.log(counterA.getValue()); 
console.log(counterB.getValue());
console.log(counterA.getHistory());
