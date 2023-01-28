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
  if (char.match(/[^aeiou]/i)) {
    return char.repeat(2)
  }
  return char;
  }).join('');

const output = doubleConsonants('String');          // "SSttrrinngg"
console.log(output);
