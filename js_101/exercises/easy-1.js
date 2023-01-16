/* ------ Loop ------ */
/**
 * Log all odd numbers from 1 to 99, inclusive, to the console,
 * with each number on a separate line.
 * Log all even numbers from 1 to 99, inclusive
 * to the console, with each number on a separate line.
 **/
const loop = (end, start = 1) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) console.log(i);
  }
};

// loop(99)
/* ------ END ------ */

/* ------ Is Odd ------ */
/** Write a function that takes one integer argument,
 * which may be positive, negative, or zero. This method
 * returns true if the number's absolute value is odd.
 * You may assume that the argument is a valid integer value.
 **/

const isOdd = (num) => {
  return num % 2 === 0 ? false : true;
};

//   console.log(isOdd(3)); // returns truee
/* ------ END ------ */

/* ------ Leap Year ------ */
/**
 * In the modern era under the Gregorian Calendar, leap years occur in every year that is
 * evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly
 * divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.
 *
 * The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752,
 * they used the Julian Calendar. Under the Julian Calendar,
 * leap years occur in any year that is evenly divisible by 4.
 **/

import rlSync from "readline-sync";

//const yearInput = rlSync.questionInt("Is the year a leap year? Check: ");
const leapYear = (year) => {
  return year > 1752
    ? year % 4 === 0 && !(year % 100 === 0 || year % 400 === 0)
      ? true
      : false
    : year % 4 === 0
    ? true
    : false;
};

// const output = leapYear(yearInput);
// console.log(output);
/* ------ END ------ */

/* ------ Room Area ------ */
/**
 * Build a program that asks the user to enter the length and width of a room in meters,
 * and then logs the area of the room to the console in both square meters and square feet.
 *
 * Build a program that asks the user to enter the length and width of a room in meters,
 * and then logs the area of the room to the console in both square meters and square feet.
 * Note: 1 square meter == 10.7639 square feet
 **/
const roomArea = () => {
  let length = rlSync.question("Length of the room in meters: ");
  let width = rlSync.question("Width of the room in meters: ");

  let areaMeters = length * width;
  let areaFeet = areaMeters * 10.7639;

  console.log(`Area of the room is ${areaMeters} meters (${areaFeet} feet)`);
};

// roomArea()

/* ------ Sum Multiples of Three and Five ------ */
/**
 * Write a function that computes the sum of all numbers between 1 and some other number,
 * inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20,
 * the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
 *
 * You may assume that the number passed in is an integer greater than 1.
 **/

const sumThreeFive = () => {
  const num = rlSync.questionInt(
    "Sum numbers divisible by 3 or 5 from 1 to an input.\nEnter a number: "
  );

  let sum = 0;
  for (let i = 3; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
};

// const output = sumThreeFive();
// console.log(output);
/* ------ END ------ */

/* ------ Short Long Short ------ */
/**
 * Write a function that takes two strings as arguments,
 * determines the length of the two strings, and then returns the result
 * of concatenating the shorter string, the longer string, and the shorter
 * string once again. You may assume that the strings are of different lengths.
 **/

const shortLongShort = (strA, strB) => {
  return strA.length < strB.length ? strA + strB + strA : strB + strA + strB;
};

// const output = shortLongShort("hi", "Boomer");
// console.log(output);
/* ------ END ------ */

/* ------ Tip Calculator ------ */
/**
 * Create a simple tip calculator.
 * The program should prompt for a bill amount and a tip rate.
 * The program must compute the tip, and then log both the tip
 * and the total amount of the bill to the console.
 * You can ignore input validation and assume that the user will enter numbers.
 *
 **/

const calculateTip = () => {
  const bill = rlSync.question("Total bill:");
  const tipRate = rlSync.question("Percent tip:");

  let tip = bill * (tipRate / 100);

  console.log(
    `Order Summary\nBill: $${bill} \nTip: $${tip}\nTotal: $${
      parseInt(bill) + parseInt(tip)
    }`
  );
};

// calculateTip()
/* ------ END ------ */

/* ------ Calculate Sum Or Product ------ */
/**
 * Write a program that asks the user to enter an integer greater than 0,
 * then asks whether the user wants to determine the sum or the product of
 * all numbers between 1 and the entered integer, inclusive.
 **/

const calculateSumOrProduct = () => {
  console.log(
    "Calculate a Sum or Product of all numbers between 1 and the entered integer, inclusive.\n"
  );
  const num = rlSync.questionInt("Enter an integer greater than 0: ");
  const choice = rlSync.question(
    "Do you want to know the sum or the product?\n"
  );
  choice.toLowerCase();
  const arr = [num];

  for (let i = num - 1; i > 0; i--) {
    arr.unshift(i);
  }

  console.log(
    `Calculation result is ${arr.reduce((prev, curr) =>
      choice.includes("sum") ? (curr += prev) : (curr *= prev)
    )}`
  );
};

// calculateSumOrProduct()
/* ------ END ------ */

/* ------ UTF-16 String Value ------ */
/**
 * Write a function that determines and returns
 * the UTF-16 string value of a string passed
 * in as an argument. The UTF-16 string value is the
 * sum of the UTF-16 values of every character in the string.
 *
 * (You may use String.prototype.charCodeAt()
 * to determine the UTF-16 value of a character.)
 **/
const utf16Value = (str) => {
  const arr = str.split("");
  return arr.reduce((acc, curr, i) => {
    return (acc += str.charCodeAt(i));
  }, 0);
};

// const OMEGA = "\u03A9";
// const output = utf16Value(OMEGA + OMEGA + OMEGA);
// console.log(output); // 2811
/* ------ END ------ */
