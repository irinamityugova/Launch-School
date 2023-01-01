let rlSync = require('readline-sync');
let number = rlSync.questionInt("Enter a number for sqrt\n");

function sqrt (num = 37) {
  return `Root of ${num} is `+Math.sqrt(num).toFixed(2)
}

console.log(sqrt(number));