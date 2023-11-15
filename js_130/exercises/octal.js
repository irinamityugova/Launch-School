// octal.toDecimal()

/*
Octal
Implement octal to decimal conversion. Given an octal input string, your program should produce a decimal output. Treat invalid input as octal 0.

Note: Implement the conversion yourself. Don't use any built-in or library methods that perform the necessary conversions for you. In this exercise, the code necessary to perform the conversion is what we're looking for.

About Octal (Base-8)

Octal numbers use a base-8 system. A number 233 in base 8 can be understood as a linear combination of powers of 8:

The rightmost digit gets multiplied by 80 = 1
The next digit gets multiplied by 81 = 8
The digit after that gets multiplied by 82 = 64
The digit after that gets multiplied by 83 = 512
...
The n*th* digit gets multiplied by 8n-1.
All of these values are then summed.
Thus:

  233 # octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155
*/

module.exports = class Octal {
  constructor(octal) {
    this.octal = octal;
  }
  toDecimal() {
    let BASE = 8;
    let str = this.octal.toString();
    if(str.match(/[A-Za-z89]/)) return 0;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      let num = Number(str[i]);
      let power = str.length - 1 - i;
      sum += num * BASE ** power;
    }
    this.decimal = sum;
    return sum;
  }
}