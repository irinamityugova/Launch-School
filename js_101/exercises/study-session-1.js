// You are given a single string as an input.
// The format of the input string consists of only numbers and letters.
// Your job is to convert the digits found in the odd positions/indexes to a letter, there will always be a digit in the odd index positions.
// The input string will be in all lowercase.
// The digit represents a positive offset in the alphabet from the letter found before/to the left of your current index position, so if the
// digit in position/index 1 is the number `2` and the letter in position/index 0(before it) is an 'a`, the offset 2 from 'a` is the letter 'c'.
// You then would replace the digit `2` in the string with the letter `c`

/**
 * Problem
 * (Sting) => String
 *
 * ER: Numbers in odd positions, odd indexes (1, 3, 5 etc.)
 * ER: Lowercase character before the number marks the origin location for the offset of the substitute letter
 * ER: Return a string with digits replaced to the character offset by that digit's value
 *
 * Mind Map
 * "a1c1e1"
 * => "a", 1 => "b" => "ab"
 * => "c", 1 => "d" => "cd" => "abcd" ...
 * => "abcdef"
 *
 * Data Structure - None
 *
 * Algorithm
 * Set result to an empty string
 * Iterate through the input string by 2
 *  If there is no number at the second position,
 *  - concat the first letter and continue the loop
 *  Coerse number to a Numbers
 *  - Set offset to the Number
 *  Get origin from the location of the first letter
 *  Get the location of the second letter by adding offset to the origin
 *  Convert the location to the second letter
 *  Concatinate two letters to the result string
 * Return the result string
 */

const convert = (str) => {
  let result = '';

for ( let i = 0; i < str.length; i += 2) {
    const firstLetter = str[i];
    if (str[i + 1] === undefined) {
      result += firstLetter;
      break;
    }

    const offset = Number(str[i + 1]); // explicit coersion
    const origin = firstLetter.charCodeAt(); // default at index 0
    const secondLetter = String.fromCharCode(origin + offset);

    result += firstLetter + secondLetter;
  }

  return result;
};

console.log(convert("a1c1e1")); // "abcdef"
console.log(convert("a1b2c3d4e")); // "abbdcfdhe"
console.log(convert("t3")); // "tw"

console.log(convert("y1a25")); // "yzac5"




/*
Set charValArr to an empty array []
Iterate through strings of the input array
- Get charVal of the string
- Add the string and value to the strValArr
Select the strings with top three values

Code with Intent
forEach method would iterate through the input array
Split and Map methods combination can help count total values
CharCode would get me the values of characters
Reduce can help sum those values
Push to create string-value pairs

Sort by values, Slice first three, Map the first item
*/

// console.log(topThree(['apple', 'zebra', 'strict', 'closer', 'avoid', 'though'])); // [ 'strict', 'though', 'closer' ]
// console.log(topThree(['a', 'b', 'c', 'd', 'e', 'f'])); // [ 'f', 'e', 'd' ]
// console.log(topThree(['zzz', 'aaa', 'vvv', 'mmm', 'ggg', 'lll', 'bbbb'])); // [ 'zzz', 'vvv', 'mmm' ]



//---------------------sums of subarrays--------------------------//

// The sequence sums subarray problem consists in finding the count of sums of all possible contiguous subsequences in a list of integers.
// You will be given an array of positive or negative integers in number or string data type.
// Return an array with a count of every possible sum in the format [[SUM, NUMBER OF TIMES THIS SUM OCCURS]] sorted by the sum in ascending order.
// The input list [1, 2] would return the array [[ 1, 1 ], [ 2, 1 ], [ 3, 1 ]] because:
// The subarray sum 1 happens once, the subarray sum 2 happens once, and the subarray sum 3 happens once.  The array is sorted on the sum.
// Return null for an empty input list
//problem takes an array of integers as an argument.
//returns a nested array. each subarray has the format of sum as first elemetn, and number of times this sum occurs as the second element.
//input array can be popoualted with numbers or string nu,bers, negative numnbers,
// empty array return null.
//data structure. input : array of int/s output : nested array of 2 element arrays.
//algo
// declare a result array and init to the value of an [];
// iterate over the input array
// nested array
// --delcare a sub varaible and initialize to different slices of input array.
// get the sumnation of eeach slice, and push this value into result array.
//declare an object
//---- iterate over the result array, populating the object with the sumnation elelenmts from the result array as the key, and the occurences as the value.
// call Object.entries method and return this nested array.

function sequenceX(arr) {
  if (arr.length === 0) return null;

  let obj = {};

  arr = arr.map(num => Number(num));
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let sub = arr.slice(i, j);
      sub = sub.reduce((accum, num)=> accum + num, 0);
      result.push(sub);
    }
  }

  result.forEach(num => {
    obj[num] = (obj[num] || 0) + 1;
  });
  let ents = Object.entries(obj);

  ents.sort((a, b) => a[0]- b[0]);
  ents = ents.map(([key, value]) => [Number(key), value]);
  return ents;
}


console.log(sequenceX([0])); // [[ 0, 1 ]]
console.log(sequenceX([0, 0])); // [[ 0, 3 ]]
console.log(sequenceX([1, 2, 3]));  // [[ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 5, 1 ], [ 6, 1 ]]
console.log(sequenceX(['1', '2', '3']));  // [[ 1, 1 ], [ 2, 1 ], [ 3, 2 ], [ 5, 1 ], [ 6, 1 ]]
console.log(sequenceX([4, 4, 4, 4])); // [[ 4, 4 ], [ 8, 3 ], [ 12, 2 ], [ 16, 1 ]]
console.log(sequenceX([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [[-5,1], [-4,2], [-3,3], [-2,4], [-1,5], [0,3], [1,9], [2,7], [3,5], [4,3], [5,2], [6,1]]
console.log(sequenceX([-2, -1, -3, -4, -1, -2, -1, -5, -4])); // [[-23,1],[-21,1],[-20,1],[-19,1],[-17,2],[-16,1],[-14,1],[-13,3],[-12,2],[-11,3],
                                                              // [-10,3],[-9,3],[-8,4],[-7,2],[-6,2],[-5,2],[-4,4],[-3,4],[-2,2],[-1,3]]
console.log(sequenceX([]));  // null




//---------------------arithmetic progressions---------------------//
// You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

// In each progression, the differences between the elements must be the same.

// Example:
// [1, 2, 3, 5, 7, 9] ==> 5
// The above has 5 progressions, seen below:
// [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

// All array elements will be unique and the array will be sorted.

// PEDAC
// function takes an array of integers. returns the number of valid arithmentic progressions of three numbers that are possible from the input array.
// a valid progression contains three numbers from the iunpuit array whos absolute difference from eachother are equal.
// example. [1,2,3] this is a valud progression absolute difference between each neighboring pair is one. [1, 3, 5] this is valud each difference is 2. etc.

// data struct. input: array. output : number.  iteration

// algo ==>
// 1) declare a counter varaible and init to the value of zero;
// -- make a three level depth nested for loop;
// --declare num1 in outer loop, num2 in middle loop and num3 in inner loop.
// --- delcare `diff` varaible in middle loop and initialize to value of num2 - num1.
// ----declare current varaible and initizlie to num2 + diff. this will be the number that num3 needs to be to make progression valid
// ----- in inner loop
// ----------- condititional statement ==== if  num3 is equal to`current`=> increment count and break to not get any duplicate values.
// return counter.
// */

// Test Cases
function progressions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];
      let diff = num2 - num1;
      let current = num2 + diff;
      for (let k = j + 1; k < arr.length; k++) {
        let num3 = arr[k];
        if (num3 === current) {
          count++;
          break;
        }
      }
    }
  }
  return count;
}


// function progressions(nums) { // Will's supercode!
//   let count = 0;

//   nums.slice(0, nums.length - 2).forEach((num, idx) => {
//     nums.slice(idx + 1).forEach(nextNum => {
//       let thirdNum = nextNum + (nextNum - num);
//       if (nums.includes(thirdNum)) count += 1;
//     });
//   });

//   return count;
// }

// You can do one loop
/*
result array of matches

difference = arr[0]-arr[i]
[1, 2] => 1 -> add all 3 matches
[1, 3] => 2 -> add all 3 matches -> [1, 3, 5], [2, 5, 7], [5, 7, 9]
[1, 5] => 4 -> add if 3 matches
[1, 7] => 5 -> no matches

length of result is the answer
*/
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10