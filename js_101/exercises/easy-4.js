import rlSync from 'readline-sync';

/**
 * Searching 101
 * Write a program that solicits six numbers from the user and logs a message that
 * describes whether the sixth number appears among the first five numbers.
 *
 * function search() => Boolean
 *
 * Algorithm:
 * Initiate an empty array called nums
 * Run a loop 6 times to get a number, and
 * - push the number to the array
 * After the loop,
 * Create a variable named bool:
 * - nums array from the beginning, not including the last item, includes the last item
 * Return the conditional
 */

function search() {
  const nums = [];
  for (let i = 0; i < 6; i++) {
    nums.push(rlSync.question('Enter a number: '));
  }
  const bool = nums.slice(0, nums.length - 1).includes(nums[nums.length - 1]);
  return bool;
}

/**
 * Palindromic Strings (Part 2)
 * Write a function that returns true if the string passed as an argument is a palindrome,
 * or false otherwise. A palindrome reads the same forwards and backwards.
 *
 * This time, however, your function should be case-insensitive, and should
 * ignore all non-alphanumeric characters.
 *
 * Ex: isPalindrome('Madam, I\'m Adam');               // true
 * Ex: isPalindrome('Madam');               // false (case matters)
 *
 * function isPalindrome(str: String) => Boolean
 *
 * Algorithm:
 * Create an empty string called reverse
 * Set the result of clean up method chain to letters:
 * - Set the string to lower case
 * - Split into letters
 * - Filter for alphanumeric characters
 * - Join into a string
 * Loop through letters from last index to first:
 * - add current letter to the reverse string
 * After the loop,
 * Return the comparison of letters to the reverse string
 */

function isPalindrome(str) {
  let reverse = '';
  const letters = str.toLowerCase().replace(/[.a-z0-9]/g, '');
  for (let i = letters.length - 1; i >= 0; i--) {
    reverse += letters[i];
  }
  return reverse === letters;
}

/**
 * Palindromic Numbers
 * Write a function that returns true if its integer argument is palindromic,
 * or false otherwise. A palindromic number reads the same forwards and backwards.
 */

function isNumPalindrome(num) {
  return isPalindrome(num.toString());
}

/**
 * Running Totals
 * Write a function that takes an array of numbers and returns an array with the same number
 * of elements, but with each element's value being the running total from the original array.
 *
 * Ex: totals([3, 4, 5]); // => [ 3, 7, 12 ]
 * Ex: totals([]); // => []
 *
 * function totals(arr: Array) => Array
 *
 * Algorithm:
 * Initiate an empty array called totals
 * Initiate a sum variable equal to 0
 * Loop the results
 * - add the result to sum
 * - add sum to the totals
 * Return totals
 */

function totals(results) {
  const totals = [];
  let sum = 0;
  for (let i = 0; i < results.length; i++) {
    sum += results[i];
    totals.push(sum);
  }
  return totals;
}

const output = totals([]); // => []
console.log(output);
