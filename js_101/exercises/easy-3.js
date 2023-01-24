/**
 * ddaaiillyy ddoouubbllee
 * Write a function that takes a string argument and returns a new string that
 * contains the value of the original string with all consecutive duplicate
 * characters collapsed into a single character.
 *
 * Pseudocode:
 * Initiate an empty string
 * Iterate through the original string
 * - If the next character is different, concatinate the previous character
 *
 */

const removeDuplicates = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i+1]) result += str[i];
  }
  return result;
};

// console.log(removeDuplicates('abaa'));

/**
 * Stringy Strings
 * Write a function that takes one argument, a positive integer, and returns a
 * string of alternating '1's and '0's, always starting with a '1'. The length
 * of the string should match the given integer.
 *
 * function stringyStrings(length: Number) => String
 *
 * Algorithm:
 * initiate empty result
 * loop from 0 to length, inclusive
 *   if i is even, add '1' to the result
 *   else add '2' to the result
 * return result
 */

function stringyStrings(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    i % 2 === 0 ? result += '1' : result += '0';
  }
  return result;
}

/**
 * Fibonacci Number Location By Length
 * Write a function that calculates and returns the i of the first
 * Fibonacci number that has the number of digits specified by the argument.
 * (The first Fibonacci number has an i of 1.)
 * You may assume that the argument is always an integer greater than or equal to 2.
 *
 * function fibonacciLocation(length) => BigInt
 *
 * Algorithm:
 * Initiate previous input, value, current value and i
 * Loop while current value's length is under input value
 * - Add previous value to the current value
 * - Replace previous value to the current value
 *
 */

function fibonacciLocation() {
  const input = 10n;
  let nextNum = 1n;
  let prevNum = 0n;
  let num = 1n;
  let i = 1n;

  while (true) {
    nextNum = num + prevNum;
    prevNum = num;
    num = nextNum;
    i++;
    if (num.toString().length >= input) {
      return i;
    }
  }
}

const output = fibonacciLocation(4);
console.log(output.toString());
