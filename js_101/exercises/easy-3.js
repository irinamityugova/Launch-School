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

console.log(removeDuplicates ('abaa'));