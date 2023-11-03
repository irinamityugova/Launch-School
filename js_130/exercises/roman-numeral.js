// Write some code that converts modern decimal numbers into their Roman number equivalents.

/*
Problem
Digit (Number) => Roman numeral (String)

Rules
- if the next numeral

574 (total) => DLXXIV
[500, 50, 10, 10, -1, 5]

*/

module.exports = class RomanNumeral {
  constructor(decimal) {
    this.decimal = decimal;
  }

  toRoman() {
    let dictionary = {
      '1000': 'M',
      '500': 'D',
      '100': 'C',
      '50': 'L',
      '10': 'X',
      '5': 'V',
      '1': 'I'
    };

    let total = this.decimal;

    function getAllKeys() {
      let keys = [];
      while (total > 0) {
        let digit = String(total);
        let num = digit[0];
        let digitLength = digit.length;
        let pow = digitLength - 1;
        keys.push(...getKey(num, pow));
      }
      return keys;
    }

    function modifyTotal(amount) {
      total-=amount;
    }

    function getKey(num, pow, keys = []) {
      switch (num.toString()) {
        case '1':
          keys.push(10 ** pow);
          keys.forEach(key => modifyTotal(key));
          return keys;
        case '2':
        case '3':
          keys.push(10 ** pow);
          return getKey(num - 1, pow, keys);
        case '4':
          keys.push(-1 * 10 ** pow, 5 * 10 ** pow);
          keys.forEach(key => modifyTotal(key));
          return keys;
        case '5':
          keys.push(5 * 10 ** pow);
          keys.forEach(key => modifyTotal(key));
          return keys;
        case '6':
        case '7':
        case '8':
          keys.push(5 * 10 ** pow);
          return getKey(num - 5, pow, keys);
        case '9':
          keys.push(-1 * 10 ** pow, 10 ** (pow + 1));
          keys.forEach(key => modifyTotal(key));
          return keys;
      }
      throw Error(`Invalid num: ${num}`);
    }

    function getRoman() {
      return getAllKeys().map(key => dictionary[Math.abs(key)]).join('');
    }

    return getRoman();
  }
}
