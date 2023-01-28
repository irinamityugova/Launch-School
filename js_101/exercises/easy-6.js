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

const output = repeater('Hello');        // "HHeelllloo"
console.log(output);