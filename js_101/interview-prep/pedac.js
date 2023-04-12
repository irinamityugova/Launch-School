/*
Problem 1: 25mins
*/

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

/*
P - create an array of counts using a given array

Input: Array [...Numbers]
Output: Array [...Numbers]

R
Smaller numbers - smaller than the current number
Only unique count

MM
[8, 1, 2, 2, 3] => [3, 0, 1, 1, 2]

8, [1, 2, 3] => 3
1, [] => 0
2, [1] => 1
2, [1] => 1

D
Arrays

A
Set result to an empty array
For each number of the input array (input loop)
  Set a count to 0
  For each sNum of the input array (smaller loop)
    If the sNum is smaller and it is the first occurance of this number,
      Increment the count
  End smaller loop
  Add the count to the result array
End input loop
Return result

*/
function firstOccurance(num, i, arr) {
  return arr.indexOf(num) === i;
}

function smallerNumbersThanCurrent(arr) {
  return arr.map((num) => {
    let count = 0;
    arr.forEach((sNum, i, arr) => {
      if (sNum < num && firstOccurance(sNum, i, arr)) count += 1;
    })
    return count;
  })
}

// Examples:

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]


/** Problem 2 **/
// 23mins

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains less than 5 elements, the function should return null.

/**
 * P
 * minimumSum(Array [...Numbers]) => Number or null
 *
 * R
 * Minnimum sum - smallest sum
 * 5 consecutive integers - following one another
 * Array with < 5 elements returns null
 *
 * MM
 * [1, 2, 3, 4, 5, -5]) === 9
 * i(0, 4) [1, 2, 3, 4, 5] === 15
 * i(1, 5)[2, 3, 4, 5, -5] === 9
 * 9 < 15 --> 9
 *
 * D - array
 *
 * A
 * Set lastIndex to array's length - 5
 * Initiate leastSum
 * If the lastIndex is < 0, return null
 * For each 5 int slice of the array,
 *  Compute the sum
 *  If leastSum is greater than sum,
 *    Reassign leastSum
 * Return the minnimum sum
 * */

function minimumSum(arr) {
  const CONSECUTIVE_LENGTH = 5;
  const LAST_INDEX = arr.length - CONSECUTIVE_LENGTH;
  if (LAST_INDEX < 0) return null;
  let leastSum;

  for (let i = 0; i <= LAST_INDEX; i += 1) {
    let slice = arr.slice(i, i + CONSECUTIVE_LENGTH);
    let sum = slice.reduce((acc, curr) => curr + acc);
    if (leastSum === undefined || leastSum > sum) leastSum = sum;
  }
  return leastSum;
}


// Examples:

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

/* Problem 3 */
// 30 mins

// Write a function named toWeirdCase that accepts a string, and returns the same sequence of characters with every 4th character in every second word converted to uppercase. Other characters should remain the same.

/**
 * toWeirdCase(String) => String
 *
 * P
 * sequence of characters
 *  every 4th character in every
 *   second word
 *    converted to uppercase
 *
 * R
 * If the second word does NOT have a 4th char, it is left as is.
 *
 * D
 * Array of words
 *
 * A
 * Set words to a string split by spaces
 *
 * For every second word,
 * - Set secondWord to the current word
 * - Set weirdWord to the secondWord
 * - If secondWord's length is below 4, skip
 * - For every 4th char,
 *    - Replace the current letter with uppercase
 * - End char loop
 *
 * - Replace the word in the words array to the secondWord
 * End second words loop
 *
 * Join words together and return
 *
 * C - Intent
 * For loop to specify indexes
 * Splice to replace the character
 * Split and join with spaces
 */

function toWeirdCase(str) {
  const EVERY_CHAR = 4;
  const EVERY_WORD = 2;
  const words = str.split(' ');

  for (let i = EVERY_WORD - 1; i < words.length; i += EVERY_WORD) {
    let secondWord = words[i];
    let weirdWord = secondWord;

    if (secondWord.length < EVERY_CHAR) continue;

    for (let j = EVERY_CHAR - 1; j < secondWord.length; j += EVERY_CHAR) {

      weirdWord = weirdWord.slice(0, j) + secondWord[j].toUpperCase() + weirdWord.slice(j + 1)
    }
    words.splice(i, 1, weirdWord);
  }
  return words.join(' ');
}

// Examples:

// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//               'Lorem IpsUm is simPly dummy texT of the printing worLd');
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".


/* Problem 4 */
// 20mins

// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/*
closestNumbers(Array [...Numbers]) => Array [...Numbers]

R
closest together in value
difference in value
if the difference is 0, stop there

MM
[12, 7, 17] => [12, 7]
0 to 1 | 12 - 7 = 3  | 0, 1
0 to 2 | 12 - 17 = 5
1 to 2 | 7 - 17 = 10

[19, 25, 32, 4, 27, 16] => [25, 27]
19, 25 ... 19, 16 => [19, 16] diff = 3
25, 32 ... 25, 16 => [25, 27] diff = 2

D Arrays

A

Set the pair to the first two values
Set the cDiff to the current difference of the pair
For each number,
  For each following number fNum
    Count the new difference nDiff
    If the difference is smaller than the cDiff,
      Replace the pair to the [num, fNum]
      Replace the cDiff to the nDiff
  End fNum loop
End num loop
Return the pair
 */

const countDiff = (num, fNum) => Math.abs(num - fNum);

function closestNumbers(nums) {
  let pair = [nums[0], nums[1]];
  let cDiff = countDiff(pair[0], pair[1]);
  let nDiff;

  nums.forEach((num, i) => {
    nums.slice(i + 1).forEach(fNum => {
      nDiff = countDiff(num, fNum);
      if (cDiff > nDiff) {
        cDiff = nDiff;
        pair = [num, fNum];
      }
    })
  })

  return pair;
}
// Examples:

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]

/* Problem 5 */
//

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".

/* Problem 5 */
// 25mins

// Write a function that takes a string as an argument and returns the character that occurs least often in the given string. If there are multiple characters with the  same lowest number of occurrences, then return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

/*
P
Input: String
Output: String

R
Number of occurances
Return a character that occurs least often in the given string
If there are the same number of occurances, return one that appears first in the string
Q: are space characters counted or not? Yes

D
Object counter = {char: occurance}

MM
"Hello World" => "h"
{'h': 1, 'e': 1... 'd': 1}

A
Set the counter to an empty Object
For each char of the string
  If char exists in the counter,
    Increment it
  Else
    Create It
    Set value to 0
End string loop

Set the minValue to the first letter's counter value
Set the minChar to the first letter

For each char in counter object
  If the value is less than a min
    Replace the char
End the counter loop

Return char

C
Reduce to find the minnimum value
for loop to iterate the string
 */

function leastCommonChar(input) {
  const str = input.toLowerCase();
  const counter = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (counter[char]) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }
  }
  let firstChar = str[0];
  let minChar = firstChar;
  let minVal = counter[firstChar];

  for (let char in counter) {
    let curVal = counter[char];
    if (curVal < minVal) {
      minChar = char;
      minVal = curVal;
    }
  }
  return minChar;
}

// Examples:

// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".