/**
 * Double Char (Part 1)
 * Write a function that takes a string, doubles every character in the string,
 * and returns the result as a new string.
 *
 * Ex:
 * repeater('Hello');        // "HHeelllloo"
 * repeater('Good job!');    // "GGoooodd  jjoobb!!"
 * repeater('');             // ""
 *
 * function repeater(str: String) => String
 *
 * Algorithm:
 * Spit the string into an array
 * Loop through each character,
 * - replace current character with the double of itself
 * Join the array into string
 * Return the string
 */

const repeater = (str) => str.split('').map(e => e + e).join('');

/**
 * Double Char (Part 2)
 * Write a function that takes a string, doubles every consonant character in
 * the string, and returns the result as a new string. The function should not
 * double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
 *
 * Ex: doubleConsonants('String');          // "SSttrrinngg"
 * Ex: doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
 * Ex: doubleConsonants('July 4th');        // "JJullyy 4tthh"
 * Ex: doubleConsonants('');                // ""
 *
 * function doubleConsonants(str: String) => String
 *
 * Algorithm:
 * Split the string
 * Loop characters
 * If constant, double
 * Join the split
 * Return
 */
const doubleConsonants = (str) => str.split('').map((char) => {
  if (char.match(/[^aeiou\s-\/\\^$*+?.()|[\]{}\d]/i)) {
    return char.repeat(2)
  }
  return char;
  }).join('');

/**
 * Reverse Number
 * Write a function that takes a positive integer as an argument and
 * returns that number with its digits reversed.
 *
 * Ex:
 * reverseNumber(12345);    // 54321
 * reverseNumber(12213);    // 31221
 * reverseNumber(456);      // 654
 * reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
 * reverseNumber(1);        // 1
 *
 * function reverseNumber(num: Number) => Number
 *
 * Algorithm:
 * Init an empty array
 * Parse to string
 * For the length of the string
 * - Unshift digit to array
 * Join the array
 */

function reverseNumber(num) {
  const arr = [];
  const str = String(num);

  for (let i = 0; i < str.length; i++) {
    arr.unshift(str[i]);
  }

  return Number(arr.join(''));
}

/**
 * Sequence Count
 *
 * Create a function that takes two integers as arguments. The first argument is
 * a count, and the second is the starting number of a sequence that your
 * function will create. The function should return an array containing the same
 * number of elements as the count argument. The value of each element should be
 * a multiple of the starting number.
 *
 * You may assume that the count argument will always be an integer greater than
 * or equal to 0. The starting number can be any integer. If the count is 0, the
 * function should return an empty array.
 *
 * Ex: sequence(5, 1);          // [1, 2, 3, 4, 5]
 * Ex: sequence(4, -7);         // [-7, -14, -21, -28]
 * Ex: sequence(3, 0);          // [0, 0, 0]
 * Ex: sequence(0, 1000000);    // []
 *
 * function sequence(count: Number, start: Number) => Array [...Number]
 *
 * Algorithm:
 * Set an empty array named result
 * Loop num statring at start, while result's length is less then count, increment by start
 * - push num to the result
 * Return result
 */

function sequence(count, start) {
  const result = [];
  for (let num = start; result.length < count; num += start) {
    result.push(num);
  }
  return result;
}

const output = sequence(5, 1);          // [1, 2, 3, 4, 5]
console.log(output);
