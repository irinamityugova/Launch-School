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
 * Palindromic Strings (Part 1)
 * Write a function that returns true if the string passed as an argument is a palindrome,
 * or false otherwise. A palindrome reads the same forwards and backwards.
 * For this problem, the case matters and all characters matter.
 *
 * Ex: isPalindrome('madam');               // true
 * Ex: isPalindrome('Madam');               // false (case matters)
 *
 * function isPalindrome(str: String) => Boolean
 *
 * Algorithm:
 * Create an empty string called reverse
 * Loop through letters from last index to first
 * - add current letter to the reverse string
 * After the loop,
 * Return the comparison of input string to the reverse string
 */

function isPalindrome(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse === str;
}

const output = isPalindrome('Madam');
console.log(output);
