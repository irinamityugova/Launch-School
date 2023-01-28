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

/**
 * Multiplicative Average
 * Write a function that takes an array of integers as input, multiplies all of
 * the integers together, divides the result by the number of entries in the array,
 * and returns the result as a string with the value rounded to three decimal places.
 *
 * Ex: multiplicativeAverage([3, 5]);                   // "7.500"
 * Ex: multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
 *
 * function multiplicativeAverage(numbers: Array [...Number]) => String
 *
 * Algorithm:
 * Set the result equal to 1
 * Loop through the array of numbers
 * - Multiply the result by each number
 * Divide the result by length of numbers array
 * Round the result to three decimal places
 * Return the result as a string
 *
 */

function multiplicativeAverage(numbers) {
  let result = 1;

  for (let num of numbers) {
    result *= num;
  }
  result /= numbers.length;

  return String(result.toFixed(3));
}

/**
 * Multiply Lists
 * Write a function that takes two array arguments, each containing a list of
 * numbers, and returns a new array that contains the product of each pair of
 * numbers from the arguments that have the same index. You may assume that the
 * arguments contain the same number of elements.
 *
 * Ex: multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
 *
 * function multiplyList(
 *  first: Array [...Numbers],
 *  second: Array [...Numbers]); => Array [...Numbers]
 *
 * Algorithm:
 * Set the result to an empty array
 * Loop through i index of the first array
 * - Multiply items of both arrays aat that index
 * - Push the result to the result
 * Return result
 */

function multiplyList(first, second) {
  let result = [];
  for (let i = 0; i < first.length; i++) {
    result.push(first[i] * second[i])
  }
  return result;
}

/**
 * List of Digits
 * Write a function that takes one argument, a positive integer, and returns a
 * list of the digits in the number.
 *
 * Ex: digitList(12345);       // [1, 2, 3, 4, 5]
 * Ex: digitList(7);           // [7]
 *
 * function digitList(int: Number) => Array [...Number]
 *
 * Algorithm:
 * Parse the number to a string
 * Return the split of that the string
 */

const digitList = (int) => String(int).split('');

/**
 * How Many?
 * Write a function that counts the number of occurrences of each element in a
 * given array. Once counted, log each element alongside the number of occurrences.
 * Consider the words case sensitive e.g. ("suv" !== "SUV").
 *
 * Ex: let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
 *                     'motorcycle', 'motorcycle', 'car', 'truck'];
 *
 * countOccurrences(vehicles);
 * // console output -- your output sequence may be different
 * car => 4
 * truck => 3
 * SUV => 1
 * motorcycle => 2
 *
 * function countOccurrences(arr: Array) => null (logs to the console)
 *
 * Algorithm:
 * Set count to an empty object
 * Loop through the input array by items
 * - If the item does not exist in our count,
 *   create an instance at 0
 * - Increment the item at the count
 * Loop through keys in count
 * - Log key => value to the console
 * Return null
 */

function countOccurrences(arr) {
  const count = {};
  arr.map((item) => {
    if (count[item] === undefined) count[item] = 0;
    count[item]++;
  });
  for (let key in count) {
    console.log(`${key} => ${count[key]}`);
  }
  return null;
}

/**
 * Array Average
 * Write a function that takes one argument, an array of integers, and returns
 * the average of all the integers in the array, rounded down to the integer
 * component of the average. The array will never be empty, and the numbers will
 * always be positive integers.
 *
 * Ex: average([1, 5, 87, 45, 8, 8]);       // 25
 * Ex: average([9, 47, 23, 95, 16, 52]);    // 40
 *
 * function average(numbers: Array [...Number]) => Number
 *
 * Algorithm:
 * Set result to 0;
 * Loop through numbers
 * - Add number to the result
 * Divide the result by length of numbers
 * Round down, or floor, the result to an integer
 * Return result
 */

function average(numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  result /= numbers.length;
  return Math.floor(result);
}

// let output = average([1, 5, 87, 45, 8, 8]);       // 25
// console.log(output);

/**
 * Or...
 * Algorithm:
 * Reduce numbers with addition
 * Divide it by numbers length
 * Round it down
 * Return
 */

const averageReduce = (numbers) => Math.floor(numbers.reduce((acc, num) => acc + num) / numbers.length);

// output = averageReduce([1, 5, 87, 45, 8, 8]);       // 25
// console.log(output);

/**
 * After Midnight (Part 1)
 *
 * The time of day can be represented as the number of minutes before or after
 * midnight. If the number of minutes is positive, the time is after midnight.
 * If the number of minutes is negative, the time is before midnight.
 *
 * Write a function that takes a time using this minute-based format and returns
 * the time of day in 24 hour format (hh:mm). Your function should work with
 * any integer input.
 *
 * You may not use javascript's Date class methods.
 * Disregard Daylight Savings and Standard Time and other complications.
 *
 * Ex: console.log(timeOfDay(0) === "00:00");
 * Ex: console.log(timeOfDay(-3) === "23:57");
 * Ex: console.log(timeOfDay(35) === "00:35");
 * Ex: console.log(timeOfDay(-1437) === "00:03");
 * Ex: console.log(timeOfDay(3000) === "02:00");
 *
 * function timeOfDay(offset: Number) => String
 *
 * Algorithm:
 * Set MIN_TO_HR = 60;
 * Set HRS_TO_DAY = 24;
 * Declare mins, hrs and rem.
 *
 * Get the mins
 * - rem = offset % 60
 * - Convert remainder to time:
 *   If rem < 0,
 *   - mins is an additional hour added to negative remainder
 *   Else,
 *   - mins is the remainder
 *
 * Get hrs
 * - rem = (offset / MINS_TO_HR) % HRS_TO_DAY
 * - Convert remainder to time:
 *   If rem < 0,
 *   - hrs is an additional day added to negative remainder
 *   Else,
 *   - hrs is the remainder
 * - Floor the decimal to integer
 *
 * If hrs or mins < 10, add '0' in the front
 * Connect the two into a string and return
 */

function timeOfDay(offset) {
  const MINS_TO_HR = 60;
  const HRS_TO_DAY = 24;
  let mins;
  let hrs;
  let rem;

  const remToTime = (conversion, remainder) => remainder < 0 ? conversion + remainder : remainder;

  rem = offset % MINS_TO_HR;
  mins = remToTime(MINS_TO_HR, rem);

  rem = (offset / MINS_TO_HR) % HRS_TO_DAY;
  hrs = Math.floor(remToTime(HRS_TO_DAY, rem));

  if (mins < 10) mins = `0${mins}`;
  if (hrs < 10) hrs = `0${hrs}`;

  return `${String(hrs)}:${String(mins)}`;
}

/**
 * After Midnight (Part 2)
 * As seen in the previous exercise, the time of day can be represented as the
 * number of minutes before or after midnight. If the number of minutes is positive,
 * the time is after midnight. If the number of minutes is negative,
 * the time is before midnight.
 *
 * Write two functions that each take a time of day in 24 hour format, and
 * return the number of minutes before and after midnight, respectively. Both
 * functions should return a value in the range 0..1439.
 *
 * You may not use javascript's Date class methods.
 *
 * Ex:
 * afterMidnight("00:00") === 0
 * afterMidnight("12:34") === 754
 *
 * function afterMidnight(str: String) => Number
 *
 * Algorithm:
 * HR_TO_MINS = 60;
 * Set time to split of the time by colon, convert each to Number
 * Set edge case if (hrs % 24 && mins % 60 === 0) return 0
 * Set mins to hrs conversion plus minutes
 * Return mins
 */

function afterMidnight(str) {
  const HRS_TO_MINS = 60;
  const time = str.split(':').map(e => Number(e));
  const mins = time[0] * HRS_TO_MINS + time[1];
  return mins;
}

let output = afterMidnight("12:34"); // 754
console.log(output);

/**
 * Ex:
 * beforeMidnight("12:34") === 686
 * beforeMidnight("24:00") === 0
 *
 * Algorithm:
 * Set MINS_IN_DAY = 24 * 60
 * Set mins to calling afterMidnight
 * Return MINS_IN_DAY - mins
 */

function beforeMidnight(str) {
  const MINS_IN_DAY = 24 * 60;
  const mins = afterMidnight(str);
  return MINS_IN_DAY - mins;
}

output = beforeMidnight("12:34"); // 686
console.log(output);