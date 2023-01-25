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

/**
 * Right Triangles
 * Write a function that takes a positive integer, n, as an argument and logs
 * a right triangle made of stars (*) whose sides each have n stars.
 * The hypotenuse of the triangle (the diagonal side in the images below) should
 * have one end at the lower-left of the triangle, and the other end at the upper-right.
 *
 * Ex:
 * triangle(5);
 *       *
 *      **
 *     ***
 *    ****
 *   *****
 *
 * function makeRightTriangle(n: Number) => String
 *
 * Algorithm:
 * Initiate a result array
 *
 * Loop from n to 1
 * - create spaces variable and store n - i number of spaces
 * - create stars variable and store n number of spaces
 * - add spaces to n number of stars
 * - unshift the result of the above to the result
 * Return result joined by newline characters
 */

function makeRightTriangle(n) {
  const result = [];

  for (let i = n; i > 0; i--) {
    const spaces = ' '.repeat(n - i);
    const stars = '*'.repeat(i);
    result.unshift(spaces + stars)
  }

  return result.join('\n')
}

/**
 * Madlibs
 * Create a simple madlib program that prompts for a noun, a verb, an adverb,
 * and an adjective, and injects them into a story that you create.
 *
 * Ex:
 * Enter a noun: dog
 * Enter a verb: walk
 * Enter an adjective: blue
 * Enter an adverb: quickly
 *
 * // console output
 * Do you walk your blue dog quickly? That's hilarious!
 * The blue dog walks quickly over the lazy dog.
 * The dog quickly walks up blue Joe's turtle.
 *
 * finction madlibs() => String
 *
 * Algorithm:
 * Initiate an empty object called words
 * Get user input
 * - Enter a noun:
 * - Enter a verb:
 * - Enter an adjective:
 * - Enter an adverb:
 * Save the inputs in words object
 * Log the output story with words to the console
 */
import rlSync from 'readline-sync';

function madlibs() {
  const words = {};
  words.noun = rlSync.question('Enter a noun: ');
  words.verb = rlSync.question('Enter a verb: ');
  words.adj = rlSync.question('Enter a adjective: ');
  words.adv = rlSync.question('Enter a adverb: ');

  console.log(`Did you ${words.verb} your ${words.adj} ${words.noun} quickly? That's hilarious!
The ${words.adj} ${words.noun} ${words.verb}s ${words.adv} over the lazy ${words.noun}.
The ${words.noun} quickly ${words.verb}s up Joe's ${words.adj} turtle`);
}

/**
 * Double Doubles
 * A double number is an even-length number whose left-side digits are exactly
 * the same as its right-side digits. For example, 44, 3333, 103103, and 7676
 * are all double numbers, whereas 444, 334433, and 107 are not.
 *
 * Write a function that returns the number provided as an argument multiplied
 * by two, unless the argument is a double number; otherwise, return the double
 * number as-is.
 *
 * function doubleDouble(num: Number) => Number
 *
 * Algorithm:
 * If the number length is even and the number is a double
 *   return number
 * Else,
 *   return number * 2
 */

function doubleDouble(num) {
  function isDouble(str) {
    const middle = str.length / 2;
    return str.substring(0, middle) === str.substring(middle);
  }

  if (num.toString().length % 2 === 0 && isDouble(num.toString())) {
    return num;
  }

  return num * 2;
}

const output = doubleDouble(232);
console.log(output);
