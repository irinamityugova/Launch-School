let output = 'Output was not assigned';

/* JS101-JS119 - Small Problems List Processing */

/* Inventory Item Availability 18 mins
Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.
*/

/* Irina */
/*
P
function (item, transactions) => true/false

item = id
= Number

transaction
= Array [...Objects {id, movement, quantity} ]

R
inventory item is available if the sum of the quantity values of the item's transactions is greater than zero
 A movement value of 'out' will decrease the item's quantity by quantity amount
 ID exists

A
Select transactionsFor itemID
Iterate through each transaction
- If movement is "in", add the quantity to the sum,
- Else subtract the quantity from the sum
If the sum is above 0, return true. else, false

C
reduce to iterate and get the sum
*/

function isItemAvailable(item, transactions) {
  const selection = transactionsFor(item, transactions);
  const sum = selection.reduce((sum, transaction) => {
    if (transaction["movement"] === "in") return sum + transaction.quantity;
    return sum - transaction.quantity;
  }, 0);
  return sum > 0;
}


// Examples:
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

/*
Inventory Item Transactions 9 mins
Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

P
function transactionsFor (Number, Array [...Objects]) (itemID, transactions) => Array [...Objects]

Result is filtered to match the itemID

A
Select transactions that match the itemID
Filter transactions
Access the object's ID
Compare to the given id
*/

function transactionsFor(itemID, transactions) {
  return transactions.filter(transaction => transaction["id"] === itemID);
}

// // Example:1
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                     { id: 105, movement: 'in',  quantity: 10 },
//                     { id: 102, movement: 'out', quantity: 17 },
//                     { id: 101, movement: 'in',  quantity: 12 },
//                     { id: 103, movement: 'out', quantity: 20 },
//                     { id: 102, movement: 'out', quantity: 15 },
//                     { id: 105, movement: 'in',  quantity: 25 },
//                     { id: 101, movement: 'out', quantity: 18 },
//                     { id: 102, movement: 'in',  quantity: 22 },
//                     { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 },]


/* Grocery List 20 mins
Write a function that takes a grocery list in a two-dimensional
array and returns a one-dimensional array. Each element in the
grocery list contains a fruit name and a number that represents
the desired quantity of that fruit. The output array is such
that each fruit name appears the number of times equal to its
desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

P
buyFruit(Array[...Arrays]) => Array

grocery list = two-dimensional array of fruits [name, quantity]
output array has each fruit name repeat the desired quantity number of times [["apple", 3]] => ["apple", "apple", "apple"]

D
Arrays

A
Iterate each fruit
    Iterate quantity number of times
    Add the fruitName to the shopping list
Return the shopping list

C
for of to iterate each fruit
for i to iterate quantity
push to add to the shopping list
*/

// function buyFruit(arr) {
//   const shoppingList = [];

//   return arr.map(ele => {
//     let fruit = ele[0];
//     let times = ele.splice(1)[0];

//     for (let i = 1; i < times; i += 1) {
//       ele.push(fruit);
//     }
//     return ele;
//   }).flat();
// }

function buyFruit(fruits) {
    const shoppingList = [];
    for (let i = 0; i < fruits.length; i++) {
        for (let quantity = fruits[i][1]; quantity > 0; quantity--) {
            shoppingList.push(fruits[i][0]);
        }
    }
    return shoppingList;
}

// Example:
// output = buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/*
Sum of Sums
10:48-11:11 21 min
Write a function that takes an array of numbers and returns the
sum of the sums of each leading subsequence in that array.
Examine the examples to see what we mean. You may assume that
the array always contains at least one number.

P
sumOfSums(Array[...Numbers]) => Number
leading subsequence starts with the first number every time
[3, 5, 2] => (3) + (3 + 5) + (3 + 5 + 2) => 21

D
Array

A
Iterate leading subsequence
  Sum the sequence
Accumulate the sum of subsequences
Return the sum

C
split to make subsequences
reduce to iterate and get the sums

*/

function sumOfSums(arr) {
  return arr.reduce((acc, _, i) => {
    const sub = arr.slice(0, i + 1);
    const subSum = sub.reduce((acc, curr) => acc + curr);
    return acc + subSum;
  }, 0);
}

//Examples:

// output = sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// output = sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// output =sumOfSums([4]);              // 4
// output = sumOfSums([1, 2, 3, 4, 5]);  // 35

/*
Palindromic Substrings 10:15am-10:55 40 mins
Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

P
palindromic - reads the same forward and backward
substrings - sequencial sections of a string
return is in order of appearance of a start character in the input string
special character count towards a palindrome
duplicates ok
build a helper function
case sensitive
single characters are NOT palindromes

palindromes(String) => Array [...Strings] // palindromic substrings

MM
palindromes('madam');      // [ "madam", "ada" ]
ma, mad, mada // false
madam // true -> ["madam"]
ad, // false
ada // true -> ["madam", "ada"]
...am // false
End

D
Arrays

A
- Set substrings to []
- Iterate the start of substrings
  - Generate substrings
- Filter substrings to palindromes
- Return palindromes

P
Generate All Substrings
createSubstrings(Start Number, String) => Array [...Substrings]
- Iterate from the next letter to the end of the string
  - Add substrings to the aarray
- Return substrings

C
for loop to go through indexes
slice to get a substring
map chained with filter
split and reverse to check if palindrome
push to add to the result/substrings array

Feedback
Algorithm is cody. Go broader. More generic and less detailed.
Readability matters more than the length of the code
Create all, filter for a role, select the best
*/

function isPalindrome(substrings) {
  return substrings.filter(substring => {
    const reverse = substring.split("").reverse().join("");
    return substring.length > 1 && reverse === substring;
  });
}

function palindromes(str) {
  const substrings = substrings(str);
  let palindromes = isPalindrome(substrings);

  return palindromes;
}

// Examples:

// palindromes('abcd');       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// palindromes('knitting cassettes');
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


/*
All Substrings 1:03 - 1:16 13 mins

Write a function that returns a list of all substrings of a
string. Order the returned list by where in the string the
substring begins. This means that all substrings that start
at index position 0 should come first, then all substrings
that start at index position 1, and so on. Since multiple
substrings will occur at each position, return the substrings
at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function
you wrote in the previous exercise:

P
substrings(String) => Array [...Substrings]
all substrings

*/

function substrings(str) {
  const chars = str.split('');
  return chars.map((_, i) => chars.map((_, j) =>
  str.substring(i, j + 1))).flat()
  .filter((e, i, arr) => e && arr.indexOf(e) === i);
}

//Example:

// output = substrings('abcde');
//
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

/*
Leading Substrings 12:42 - 12:53 11 mins 1:00 7 mins
Write a function that takes a string argument and returns a
list of substrings of that string. Each substring should begin
with the first letter of the word, and the list should be
ordered from shortest to longest.

P
function leadingSubstrings(String) => [...Strings]

R
all substrings that begin from the first letter,
including just the letter
return the array of substrings

D
Array

A
Set result to []
Iterate indexes from 0 to the end
Add each substring to the result
Return result

C
for loop for the string characters
substring to get a substring
push to add to the array

Rewrite leadingSubstrings using list processing functions.
That is, convert the string into an array of some sort and
use functions like map, filter, or reduce to get the desired
substrings. (You will also need to use join.) Try not to use
forEach as that is too similar to the for loop approach.

P
Split the string into an array, and use array methods to solve
the problem.

A
Map iterates through each character
Replace each element to a substring from start to the index
Return the result of map
*/

const leadingSubstrings = str => str.split('').map((_, i) => str.slice(0, i + 1));

// Examples:

// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


/*
Multiply All Pairs 12:27 - 12:42 19 mins
Write a function that takes two array arguments, each containing
a list of numbers, and returns a new array containing the
products of all combinations of number pairs that exist between
the two arrays. The returned array should be sorted in ascending
numerical order.

You may assume that neither argument will be an empty array.

P
function multiplyAllPairs(arr1[...Numbers], arr2[...Numbers]) =>
[...Numbers] all combinations of number pairs that exist between
the two arrays

R
combinations of number pairs -> multiplication products
ascending numerical order

D
2x4 = 8 [8]
2x3 = 6 [8, 6]
... sort => [2, 4, 4, 6, 8, 8, 12, 16]

A
1. Initiate the result to []
2. Iterate through each item of the first array
  a. Multiply fNum to each num in the second array
  b. Add the product to the result
3. Sort the result by numeric ascending order

C
forEach to iterate the arrays
push to increment the result array
sort to sort by numeric ascending order
*/

// Example:

function multiplyAllPairs(arr1, arr2) {
  const result = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => result.push(num1*num2));
  });
  return result.sort((a, b) => a - b);
}

// output = multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]


/*
11:13-12:23 10 mins
Alphabetical Numbers
Write a function that takes an array of integers between 0 and 19
and returns an array of those integers sorted based on the English
word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten,
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen,
eighteen, nineteen
*/

function alphabeticNumberSort(nums) {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const result = Object.entries(words).sort((a, b) => a[1].charCodeAt() - b[1].charCodeAt()).map(e => e[0]);
  return result;
}

//Example:
// output = alphabeticNumberSort(
//  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]



/* Sum Of Digits 11:20-11:28 8 mins
Write a function that takes one argument, a positive integer,
and returns the sum of its digits. Do this without using for,
while, or do...while loops - instead, use a series of method
calls to perform the sum.
*/

function sum(num) {
  return num.toString().split('')
    .reduce((acc, curr) => acc += Number(curr), 0);
}

// Examples:
// output = sum(23);       // 5
// console.log(output);
// output = sum(496);          // 19
// console.log(output);
// output = sum(123456789);    // 45

console.log(output);