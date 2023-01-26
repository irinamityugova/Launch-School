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

/**
 * Letter Counter (Part 1)
 * Write a function that takes a string consisting of zero or more space separated
 * words and returns an object that shows the number of words of different sizes.
 * Words consist of any sequence of non-space characters.
 *
 * Ex: wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 1, "6": 1 }
 * Ex: wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
 *
 * Letter Counter (Part 2)
 * Modify the wordSizes function from the previous exercise to exclude
 * non-letters when determining word size. For instance, the word size of "it's" is 3, not 4
 *
 * Ex: wordSizes("What's up doc?"); // { "2": 1, "3": 1, "5": 1 }
 * Ex: wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
 *
 * function wordSizes(str: String) // => Object
 *
 * Algorithm:
 * Create an empty object called count
 * Set a new array called words and set it to the following chain to the input string
 * - replace special characters with an empty string
 * - split words by spaces
 * Loop through words
 * - if word length's key in count is undefined,
 *   set the key equal to 0
 * - Increment the count of the count[length] by 1
 * Return the count object
 */

function wordSizes(str) {
  const count = {};
  const words = str.replace(/[^a-z0-9\s]/ig, '').split(/\s/g);
  for (let i = 0; i < words.length; i++) {
    if (count[words[i].length] === undefined) count[words[i].length] = 0;
    count[words[i].length]++;
  }
  return count;
}

/**
 * Letter Swap
 * Given a string of words separated by spaces, write a function that swaps
 * the first and last letters of every word.
 *
 * Ex: swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
 * Ex: swap('Abcde');                          // "ebcdA"
 *
 * function swapLetters(str: String) => String
 *
 * Algorithm:
 * Initiate a new empty array called result
 * Set worde to the split of the str by spaces
 * Loop through words
 * - set first equal to first letter
 * - set last equal to the last letter
 * - if word's length > 2,
 *   set swap equal to first + word.substring(2, length - 1) + last
 * - push swap to the array
 * Join the result by spaces
 * Return result
 */

function swap(str) {
  const result = [];
  const words = str.split(/\s/)

  for (let i = 0; i < words.length; i++) {
    const first = words[i][0];
    let last = '';
    if (words[i].length > 1) last = words[i].slice(words[i].length - 1);
    const swap = last + words[i].slice(1, words[i].length - 1) + first;
    result.push(swap);
  }
  return result.join(' ');
}

/**
 * Convert a String to a Number
 * Convert without using JS built in methods
 *
 * Ex: console.log(stringToInteger("4321") === 4321); // logs true
 * Ex: console.log(stringToInteger("570") === 570);   // logs true
 *
 * function stringToInteger(str: String) => Number
 *
 * Algorithm:
 * Create a d object for string to number conversion
 * Initiate a sum equal to 0
 * Initiate an place equal to 0
 * Loop through the string from the end (ones) to the beginning,
 * - Convert the current digit to a number using the dictionary, save it as a digit
 * - Add a digit to the sum, multiplying it by base 10 to the place exponent
 * - Increment the place
 * Return the sum
 */

function stringToInteger(str) {
  const d = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, };
  let sum = 0;
  let place = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    let digit = d[str[i]];
    sum += digit * (10 ** place);
    place++;
  }
  return sum;
}

/**
 * Convert a String to a Signed Number
 *
 * Ex: stringToSignedInteger("4321") === 4321; // => true
 * Ex: stringToSignedInteger("-570") === -570; // => true
 *
 * function stringToSignedInteger(str: String) => Number
 *
 * Algorithm:
 * Run a case check
 * If a string starts with '-',
 * - return the result of integer conversion multiplied by -1
 * Else,
 * - return the result of a regular conversion
 *
 */

function stringToSignedInteger(str) {
  if (str[0] === '-') {
    return -1 * stringToInteger(str.slice(1));
  }
  return stringToInteger(str);
}

/**
 * Convert a Number to a String
 * Don't use js built in methods or implicit conversion
 *
 * Ex: integerToString(4321);        // "4321"
 * Ex: integerToString(-0);           // "0"
 *
 * function integerToString(input: Number) => String
 *
 * Algorithm:
 * Set up a DIGITS dictionary
 * Initiate the result with an empty string
 * While numis greater than 0,
 * - set rem as a remainder of division by 10
 * - divide num by 10 and round it down
 * - set the result equal to the remainder according to DIGITS + result
 * If we had a negative number, add '-' in front of result
 * Return result
 *
 */

function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  let negative = num !== 0 && -num === Math.abs(num);

  do {
    let rem = num % 10;
    num = Math.floor(num / 10);

    result = DIGITS[rem] + result;
  } while (num > 0);
  if (negative) {
    result = '-'.concat(result);
  }

  return result;
}

const output = integerToString(-0);  // '0'
console.log(output);
