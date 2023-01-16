/**
 * The Array.prototype.reverse method reverses the order of elements in an array,
 * and Array.prototype.sort can rearrange the elements in a variety of ways,
 * including descending. Both of these methods mutate the original array as shown
 * below. Write two distinct ways of reversing the array without mutating the
 * original array. Use reverse for the first solution, and sort for the second.
 *
 */

// // copy an array with a built-in object
// let numbers = [1, 2, 3, 4, 5];
// let mumbers = new Array(...numbers);
// mumbers.reverse();
// console.log(numbers);
// console.log(mumbers); // [ 5, 4, 3, 2, 1 ]

// // copy an array with a for of loop
// mumbers = [];
// for (let value of numbers) {
//   mumbers.push(value);
// }
// mumbers.sort((num1, num2) => num2 - num1);
// console.log(numbers);
// console.log(mumbers); // [ 5, 4, 3, 2, 1 ]

// // unshift the numbers to get reverse order, lifo style
// mumbers = [];
// numbers.forEach(num => mumbers.unshift(num));
// console.log(numbers);
// console.log(mumbers); // [ 5, 4, 3, 2, 1 ]

// // available options to avoid mutating the original array
// let reversedArray = numbers.slice().reverse();
// console.log(reversedArray); // [ 5, 4, 3, 2, 1 ]

// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedArray); // [ 5, 4, 3, 2, 1 ]

/**
 * Add these arrays. They should not be nested
 *
 */

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// flintstones = [].concat(...flintstones); //.flat() works too

// console.log(flintstones);

/**
 * Create an array from object and return [ 'Barney', 2 ]
 *
 */

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// console.log(Object.entries(flintstones).filter(e => e[0] === 'Barney'));

/**
 * How would you check whether the objects assigned to variables numbers
 * and table below are arrays?
 *
 */

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Object.is(typeof 1, Number));
