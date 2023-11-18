// Write a program that will take a string of digits and return all the possible consecutive number series of a specified length in that string.

// For example, the string "01234" has the following 3-digit series:

// 012
// 123
// 234
// Likewise, here are the 4-digit series:

// 0123
// 1234
// Finally, if you ask for a 6-digit series from a 5-digit string, you should throw an error.

/*
P
"digits", length => [...number series]
R
Series are consecutive
If length is > then digits.length -> Err
*/

module.exports = class Serie {
  constructor(digits) {
    this.digits = digits;
  }

  slices(len) {
    const DIG_LEN = this.digits.length;
    if (DIG_LEN < len) throw new Error("Slice length exceeds the digits length.");
    let slices = [];
    for (let i = 0; i <= DIG_LEN - len; i++) {
      slices.push(this.digits.slice(i, i + len).split("").map(num => Number(num)));
    }
    return slices;
  }
};