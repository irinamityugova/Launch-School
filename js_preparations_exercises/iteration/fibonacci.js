let rlSync = require('readline-sync');
let num = rlSync.questionInt("Enter a number\n");

function fibonacci(number) {
  if (number <= 1) return number;
  return number + fibonacci(number - 1);
}

console.log("fibonacci(num) =", fibonacci(num));