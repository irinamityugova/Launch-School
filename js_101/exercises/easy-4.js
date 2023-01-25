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

const output = isPalindrome('M6ada6$m'); // => true
console.log(output);
