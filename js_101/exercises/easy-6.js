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

/**
 * Reverse It (Part 1)
 * Write a function that takes a string argument and returns a new string
 * containing the words from the string argument in reverse order.
 *
 * Ex: reverseSentence('');                       // ""
 * Ex: reverseSentence('Hello World');            // "World Hello"
 * Ex: reverseSentence('Reverse these words');    // "words these Reverse"
 *
 * function reverseSentence(str: String) => String
 *
 * Algorithm:
 * Chain methods on the string: split, reverse, join!
 */

const reverseSentence = (str) => str.split(' ').reverse().join(' ')

/**
 * Reverse It (Part 2)
 * Write a function that takes a string argument containing one or more words
 * and returns a new string containing the words from the string argument.
 * All five-or-more letter words should have their letters in reverse order.
 * The string argument will consist of only letters and spaces. Words will be
 * separated by a single space.
 *
 * Ex: reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
 *
 * function reverseWords(str: String) => String
 *
 * Algorithm:
 * Split by space
 * For each word
 * - If the word's length is over 4 characters
 *   Split, Reverse, Join the word
 * Join by spaces
 */

function reverseWords(str) {
  return str.split(' ').map(((word) => {
    if (word.length > 4) return word.split('').reverse('').join('');
    return word;
  })).join(' ');
}

/**
 * Reversed Arrays
 * Write a function that takes an Array as an argument and reverses its elements
 * in place. That is, mutate the Array passed into this method. The return value
 * should be the same Array object.
 *
 * You may not use Array.prototype.reverse().
 *
 * Ex:
 * let list = [1, 2, 3, 4];
 * let result = reverse(list);
 * console.log(result); // logs [4,3,2,1]
 * console.log(list === result); // logs true
 *
 * function reverse(list: Array) => Array
 *
 * Algorithm:
 * Create a copy of the list
 * Loop from the end to the front of the copy
 * - Remove the first item of the list
 * - Add the current item of copy
 * Return the list
 */

// function reverse(list) {
//   const copy = list.slice();
//   for (let i = copy.length - 1; i >= 0 ; i--) {
//     list.shift();
//     list.push(copy[i]);
//   }
//   return list;
// }

/**
 * Or:
 * Use sort method where index of a is greater then index of b
 */

// function reverse(arr) {
//   arr.sort((a, b) => arr.indexOf(b) - arr.indexOf(a));
//   return arr;
// }

/**
 * Or:
 * Use a while loop to t
 * - Exchange left and right items
 * - Increment left
 * - Decrement right
 * - Terminate in the middle of the list
 * Return
 */

function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < arr.length / 2) {
    [arr[left], arr[right]] =
      [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

/**
 * Matching Parentheses?
 *
 * Write a function that takes a string as an argument and returns true if all
 * parentheses in the string are properly balanced, false otherwise. To be
 * properly balanced, parentheses must occur in matching '(' and ')' pairs.
 *
 * function isBalanced(str: String) => Boolean
 *
 * Algorithm:
 * split characters
 * filter parantheses
 * Loop i through the list,
 * - when you find a consecutive "(", ")",
 *   remove both,
 *   restart the i at 0
 * If you reached until the end and the array is empty, return true, else - false
 */

function isBalanced(str) {
  let parantheses = str.split('').filter((e) => e.match(/[()]/));

  for (let i = 1; i < parantheses.length; i++) {
    if (parantheses[i - 1] === '(' && parantheses[i] === ')') {
      parantheses.splice(i - 1, 2);
      i = 0;
    }
  }
  return parantheses.length === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);