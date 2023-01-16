import rlSync from 'readline-sync';

/**
 * Welcome Stranger
 *
 * Create a function that takes 2 arguments, an array and an object. The array
 * will contain 2 or more elements that, when combined with adjoining spaces,
 * will produce a person's name. The object will contain two keys, "title" and
 * "occupation", and the appropriate values. Your function should return a
 * greeting that uses the person's full name, and mentions the person's title.
 *
 */

// const greetings = (nameArr, data) => `Greetings, ${data.title} ${nameArr.join(' ')}!
// We needed a ${data.occupation}`;

// const output = greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });
// console.log(output);

/**
 * Greeting a user
 *
 * Write a program that will ask for user's name. The program will then greet the user.
 * If the user writes "name!" then the computer yells back to the user.
 *
 */

// const userGreeting = () => {
//   const name = rlSync.question('What\'s your name?\n');
//   if (name.endsWith('!')) {
//     console.log(`HELLO, ${name.toUpperCase()} WHY ARE WE SCREAMING?`);
//   } else {
//     console.log(`Hello, ${name}.`);
//   }
//   return null;
// };

// userGreeting();

/**
 * Multiplying Two Numbers
 *
 * Create a function that takes two arguments, multiplies them together, and returns the result.
 *
 */

// const multiply = (num1, num2) => num1 * num2;

// const output = multiply(2, 3);
// console.log(output); // 6

/**
 * Squaring an Argument
 *
 * Using the multiply() function from the "Multiplying Two Numbers" problem, write
 * a function that computes the square of its argument (the square is the result
 * of multiplying a number by itself).
 *
 */

// const square = (base, exponent = 2) => base**exponent;

// const output = square(2, 3);
// console.log(output); // 8

/**
 * Arithmetic Integer
 *
 * Write a program that prompts the user for two positive integers, and then prints
 * the results of the following operations on those two numbers:
 * addition, subtraction, product, quotient, remainder, and power.
 * Do not worry about validating the input.
 *
 * Whoops... Rabbithole took me through eval().
 *
 */

// const calculate = () => {
//   // valid input starts with one or more digits and ends with a digit or an 'n' for BigInt
//   const validInput = (label = '> ', regex = /^\d+[n]*$/) => {
//     let output;
//     while (output === undefined || !output.match(regex)) {
//       output = rlSync.question(label);
//     }
//     return output;
//   };

//   const num1 = validInput('> Number 1: ');
//   const num2 = validInput('> Number 2: ');

//   const operands = ['+', '-', '*', '**', '/', '%'];
//   let result = '';
//   operands.forEach((symbol) => {
//     const operation = `${num1} ${symbol} ${num2}`;
//     const evaluation = (0, eval)(operation);
//     result += `${symbol}: ${operation} = ${evaluation}\n`;
//     // Is there a better way to parse symbols without importing extra libraries?
//   });

//   return result;
// };

// const output = calculate();
// console.log(output);

/**
 * The End Is Near But Not Here
 *
 * Write a function that returns the next to last word in the String passed to it as an argument.
 *
 */

// const getNextToLast = (str) => {
//   const arr = str.split(/\s+/);
//   return arr[arr.length - 2];
// };

// const output = getNextToLast('hi no   woot!');
// console.log(output);

/**
 * Exclusive Or
 *
 * In this exercise, you will write a function named xor that takes two arguments,
 * and returns true if exactly one of its arguments is truthy, false otherwise.
 * Note that we are looking for a boolean result instead of a truthy/falsy value
 * as returned by || and &&.
 *
 */

// const xor = (a, b) => {
//   return Boolean((a && !b) || (!a && b));
// };

// const output = xor('', '4'); //true
// console.log(output);

/**
 * Odd Lists
 *
 * Write a function that returns an Array that contains every other element of
 * an Array that is passed in as an argument. The values in the returned list
 * should be those values that are in the 1st, 3rd, 5th, and so on elements of
 * the argument Array.
 *
 */

// const getOdd = (arr) => {
//   const result = [];
//   for (let i = 0; i< arr.length; i+=2) {
//     result.push(arr[i]);
//   }
//   return result;
// };

// const output = getOdd([1, 2, 3, 4, 5]);
// console.log(output);

/**
 * How Old is Teddy?
 *
 * Build a program that randomly generates Teddy's age, and logs it to the console.
 * Have the age be a random number between 20 and 120 (inclusive).
 *
 */

// const askAge = (name) => {
//   return `${name} is ${(20 + Math.random()*100).toFixed(0)} years old!`;
// };

// const output = askAge('Teddy');
// console.log(output);

/**
 * When Will I Retire?
 *
 * Build a program that logs when the user will retire and how many more years
 * the user has to work until retirement.
 *
 * Pseudocode:
 * Ask the user's age
 * Compare to retirement age
 * If user's age is bigger than retirement, print "You should be already retired!"
 * Otherwise, print years left to retirement
 *
 */

// const printTimeToRetire = () => {
//   const RETIREMENT_AGE = 65;
//   const userAge = rlSync.questionInt('What\'s your age? ');
//   return userAge < 65 ? `You retire in ${RETIREMENT_AGE - userAge} years` : 'You should be already retired!';
// };
// const output = printTimeToRetire();
// console.log(output);

/**
 * Get Middle Character
 *
 * Write a function that takes a non-empty string argument and returns the middle
 * character(s) of the string. If the string has an odd length, you should return
 * exactly one character. If the string has an even length, you should return
 * exactly two characters.
 *
 * Pseudocode:
 * Take the string
 * Find the middle character(s)
 * - Find out if its length has a remainder 'abc' => 3 % 2 = 1;
 * - If the length is odd, get the middle character index = (word.length/2).toFixed(0)
 * - Else slice it with word.length/2-2 inclusive and word.length/2
 * Print the result
 *
 */

// const printMiddleCharacter = (str) => {
//   if (str === undefined) return 'Please enter a string';
//   let len = str.length;
//   return (len % 2 > 0) ? str[Math.floor(len / 2)] : str.slice((len/2-2), len/2);
// };

// const output = printMiddleCharacter('Launch'); //au
// console.log(output);

/**
 * Always Return Negative
 *
 * Write a function that takes a number as an argument. If the argument is
 * a positive number, return the negative of that number. If the argument is
 * a negative number, return it as-is.
 *
 */
// const getNegative = (num) => num > 0 ? -num : num;

// const output = getNegative(0);
// console.log(output);
