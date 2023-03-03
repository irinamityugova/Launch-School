let output = 'Output was not assigned';

/*
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
console.log(palindromes('madam'));      // [ "madam", "ada" ]

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