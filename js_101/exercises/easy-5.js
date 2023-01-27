/**
 * Cute Angles
 *
 * Write a function that takes a floating point number representing an angle
 * between 0 and 360 degrees and returns a string representing that angle in
 * degrees, minutes, and seconds. You should use a degree symbol (˚) to represent
 * degrees, a single quote (') to represent minutes, and a double quote (") to
 * represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.
 *
 *
 * Ex: dms(76.73);        // 76°43'48"
 * Ex: dms(30);           // 30°00'00"
 *
 * function dms(float: Number) => String
 *
 * Algorithm:
 * Floor the float to get degrees
 * Subtract it from float to get percent of minutes
 * Multiply percent by 60 to get time
 * Floor time to get minutes
 * Subtract minutes from time to get percent of seconds
 * Multiply percent of seconds by 60 to get seconds, floor it
 * Connect degrees, minutes and seconds into a string and return it
 */

function dms(float) {
  const MIN_IN_DEGREE = 60;
  const SEC_IN_MIN = 60;
  const degCode = '\u00B0';

  const deg = Math.floor(float);
  const percentMins = float - deg;
  const time = percentMins * MIN_IN_DEGREE;
  const mins = Math.floor(time);

  const percentSec = time - mins;
  const sec = Math.floor(percentSec * SEC_IN_MIN);

  return `${deg}${degCode}${mins}'${sec}"`;
}

/**
 * Combining Arrays
 *
 * Write a function that takes two arrays as arguments and returns an array
 * containing the union of the values from the two. There should be no duplication
 * of values in the returned array, even if there are duplicates in the original
 * arrays. You may assume that both arguments will always be arrays.
 *
 * Ex: union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
 *
 * function union(a: Array, b: Array) => Array
 *
 * Algorithm:
 * Copy the first array. Shallow copy's okay.
 * Loop through the second array,
 * - If copy includes the number, continue the array
 * - Else, push the number to the copy
 * Return the copy
 */

function union(a, b) {
  const copy = a.slice();
  for (let num of b) {
    if (copy.includes(num)) continue;
    copy.push(num);
  }
  return copy;
}

/**
 * Halvsies
 *
 * Write a function that takes an array as an argument and
 * returns an array that contains two elements, each of which
 * is an array. Put the first half of the original array
 * elements in the first element of the return value, and
 * put the second half in the second element. If the
 * original array contains an odd number of elements,
 * place the middle element in the first half array.
 *
 * Ex: halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
 * Ex: halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
 *
 * function halvsies(arr: Array) => Array
 *
 * Algorithm:
 * Set elbow as the middle index to length of an array divided by 2 and ceil the decimal
 * Set first to a slice of array from 0 index to the elbow (not included)
 * Set second array from melbow to the end of the Array
 * Return an array of first and second
 */

function halvsies(arr) {
  const elbow = Math.ceil(arr.length / 2);
  const first = arr.slice(0, elbow);
  const second = arr.slice(elbow);
  return [first, second];
}

/**
 * Find the Duplicate
 * Given an unordered array and the information that exactly one value in the array occurs twice
 * (every other value occurs exactly once), determine which value occurs twice. Write a function
 * that will find and return the duplicate value that is in the array.
 *
 * Ex: findDup([1, 5, 3, 1]);                                // 1
 * findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
 *          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
 *          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
 *          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
 *          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
 *          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
 *          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
 *          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
 *          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
 *           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
 *
 * function findDup(numbers: Array) => Number
 *
 * Algorithm:
 * Loop through numbers with i index
 * - Set slice to numbers at the next index to the end
 * - Set currentNumber to the current number (labels are important)
 * - If slice includes the current number, return the number
 * After the loop, return "No duplicates"
 *
 */

function findDup(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const slice = numbers.slice(i + 1); // Test more often. Here is a good spot
    const currentNumber = numbers[i]; // Test for syntax errors here
    if (slice.includes(numbers[i])) return numbers[i]; // Test if method works as expected
  }
  return 'No duplicates';
}

/**
 * Combine Two Lists
 * Write a function that combines two arrays passed as arguments, and returns a
 * new array that contains all elements from both array arguments, with each
 * element taken in alternation.
 *
 * You may assume that both input arrays are non-empty, and that they have the
 * same number of elements.
 *
 * Ex: interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
 *
 * function interleave(first: Array, second: Array) => Array
 *
 * Algorithm:
 * Create an empty result array
 * Loop through the first array by i index
 * - push items at the current index of the loop to the result array
 * Return result
 */

function interleave(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    result.push(first[i], second[i]);
  }
  return result;
}

const output = interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
console.log(output);
