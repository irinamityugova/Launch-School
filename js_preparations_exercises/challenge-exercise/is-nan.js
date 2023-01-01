let rlSync = require("readline-sync");
let input = rlSync.question("Enter a NaN\n");

function isNotANumber (num) {
  return num !== num;
}

console.log(isNotANumber(input))