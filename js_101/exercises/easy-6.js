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

const output = reverseNumber(12345);    // 54321
console.log(output);
