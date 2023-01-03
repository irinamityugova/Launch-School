let rlSync = require('readline-sync');
let number = rlSync.question("What number would you like to convert?\n");

function convert(num){
  // convert the number to a roman numeral
  const conversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let result = ""

for ( let key in conversion) {

  let digit = Math.floor(num / conversion[key])
  num = num - (digit * conversion[key])
  result = result + key.repeat(digit)

}

console.log(result)
return result;

}

convert(number)