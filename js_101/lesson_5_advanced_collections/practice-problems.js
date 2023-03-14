let output = "Not assigned";
/*
Practice Problem 1 - 3 min
How would you order the following array of number strings by
descending numeric value (largest number value to smallest)?
*/

// let arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => Number(b) - Number(a));

/*
Practice Problem 2 - 4 min
How would you order the following array of objects based on the
year of publication of each book, from the earliest to the latest?
*/

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];
books.sort((a, b) => Number(a.published) - Number(b.published));

/*
Practice Problem 3 - 5 mins
For each of these collection objects, demonstrate how you would
access the letter g.
*/

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// output = arr1[2][1][3];

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// output = arr2[1]["third"][0];

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// output = arr3[2]["third"][0][0];

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// output = obj1["b"][1];

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// output = Object.keys(obj2["third"])[0];

/*
Practice Problem 4 - 5 mins
For each of these collection objects, demonstrate how you would
change the value 3 to 4.
*/

// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1["first"][2][0] = 4;
// console.log(obj1);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2["a"]["a"][2] = 4;
// console.log(obj2);

/*
Practice Problem 5 74-68 6 mins
Compute and display the total age of the male members of
the family.

Consider the following nested object:
*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// let sum = 0;

// for (let name in munsters) {
//   if (munsters[name]["gender"] === 'male') {
//     sum += munsters[name]["age"];
//   }
// }

/*
Practice Problem 6 67-63 4 mins
One of the most frequently used real-world string operations
is that of "string substitution," where we take a hard-coded
string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age,
and gender of each family member.

Each output line should follow this pattern:
(Name) is a (age)-year-old (male or female).
*/

// for (let name in munsters) {
//   console.log(`${name} is a ${munsters[name]['age']}-year-old ${munsters[name]['gender']}.`)
// }

/*
Practice Problem 7 62-59 3 mins
Given the following code, what will the final values of a and
b be? Try to answer without running the code.
*/

// let a = 2;
// let b = [5, 8];
// let arr = [a, b]; // [2, [5, 8]]

// arr[0] += 2; // [4, [5, 8]]
// arr[1][0] -= a; // [4, [3, 8]]

/* b is modified as well
 because this is a reference*/

/*
Practice Problem 8 59-50 9 mins
Using the forEach method, write some code to output all vowels
from the strings in the arrays. Don't use a for or while loop.
*/

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// const vowels = RegExp(/[aeiou]/i);

// Object.keys(obj).forEach(key => {
//   obj[key].forEach(word => {
//     word.split('').forEach(letter => {
//       if (letter.match(vowels)) console.log(letter);
//     });
//   });
// });

/*
Practice Problem 9 49-43 6 mins

Given the following data structure, return a new array with
the same structure, but with the values in each subarray
ordered -- alphabetically or numerically as appropriate --
in ascending order.
*/

// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']]

// const arr2 = arr.map(subArr => {
//   if (typeof arr[0] === Number) {
//     return subArr.slice().sort((a, b) => Number(a) - Number(b));
//   }
//   return(subArr.slice().sort());
// });

// console.log(arr2)

/*
Practice Problem 10 43-35 12 mins
Perform the same transformation of sorting the subarrays we did
in the previous exercise with one difference; sort the elements
in descending order.
*/

// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// const arr2 = arr.map(subArr => {
//   if (typeof arr[0] === Number) {
//     return subArr.slice().sort((a, b) => Number(b) - Number(a));
//   }
//   return subArr.slice().sort((a, b) => -Number(a >= b));
// });

// console.log(arr2);

/*
Practice Problem 11 20 mins
Given the following data structure, use the map method to
return a new array identical in structure to the original but,
with each number incremented by 1. Do not modify the original
data structure.
*/
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// output = arr.map(obj => {
//   return Object.fromEntries(Object.keys(obj).map(key => {
//     let value = obj[key] + 1;
//     return [key, value];
//   }));
// });

// console.log(" New array:", output, "\n", "Old array:", arr);

/*
Practice Problem 12 88-84 4 mins
Given the following data structure, use a combination of methods,
including filter, to return a new array identical in structure
to the original, but containing only the numbers that are
multiples of 3.
*/

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// output = arr.map(subArr => {
//   return subArr.filter(e => e % 3 === 0);
// });

// console.log(output);

/*
Practice Problem 13 83-76 7 mins
Given the following data structure, sort the array so that the
sub-arrays are ordered based on the sum of the odd numbers that
they contain.

Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should
look like this:
[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
*/

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// output = arr.slice().sort((a, b) => {
//   const sumA = getOddSum(a);
//   const sumB = getOddSum(b);
//   return sumA - sumB;
// });

// function getOddSum(arr) {
//   const oddNumbers = arr.filter(e => e % 2 !== 0);
//   return oddNumbers.reduce((acc, curr) => acc + curr);
// }

// console.log("Original:", arr);
// console.log("Sorted:", output);

/*
Practice Problem 14 75-58 17 mins
Given the following data structure write some code to return an
array containing the colors of the fruits and the sizes of the
vegetables. The sizes should be uppercase, and the colors should
be capitalized.

The return value should look like this:
[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

P
colors of fruits capitalized, arrays
size of vegetables uppercase, strings

A
Set result to an empty array
Loop through each inventory item
- If type is "fruit",
  Loop through each color
  - Capitalize the color
  Add colors subarray to the result
- If type is "vegetable",
  Set the size to upper case
  Add size to the result
Return result
*/

// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// output = [];

// Object.keys(obj).forEach(key => {
//   const item = obj[key];
//   if (item['type'] === 'fruit') {
//     let fruit = item['colors'].map(color => capitalize(color));
//     output.push(fruit);
//   } else {
//     let vegetable = item['size'].toUpperCase();
//     output.push(vegetable);
//   }
// });

// function capitalize(color) {
//   return color[0].toUpperCase() + color.slice(1);
// }

// console.log(output);

/*
Practice Problem 15 56-45 11 mins
Given the following data structure, write some code to return
an array which contains only the objects where all the numbers
are even.
*/

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// output = arr.filter(obj => {
//   return Object.values(obj).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   });
// });

// console.log(output);

/*
Practice Problem 16 31-29 2 mins
Given the following data structure, write some code that defines
an object where the key is the first item in each subarray, and
the value is the second.
*/

// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// // expected value of object
// // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// output = Object.fromEntries(arr);
// console.log(output);

/*
Practice Problem 17 29-6 13 mins
A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.

P
0-9 ok
a-f have char codes, 97-102

*/

function getRandomChars(length) {
  let string = '';

  for(length; length > 0; length--) {
    if (Math.random() < (1 / 1.8)) { // 9:5 ratio
      let number = Math.floor((Math.random() * 10));
      string += number;
    } else {
      const charCode = 97 + Math.floor((Math.random() * 6));
      string += String.fromCharCode(charCode);
    }
  }
  return string;
}

function getUUID() {
  const sections = [8, 4, 4, 4, 12];
  return sections.map(num => getRandomChars(num)).join("-");
}

console.log(getUUID());