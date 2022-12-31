let rlSync = require('readline-sync');
let num = rlSync.questionInt("Enter a number\n");

function factorial(n) {
  if (n <= 1) return 1; //f(0) is 1, f(1) is 1
  return n*factorial(n-1);
}

console.log(`factorial(${num}) =`, factorial(parseInt(num)));