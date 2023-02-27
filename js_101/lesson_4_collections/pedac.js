/*
# PEDAC Blocks
You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:
•	The building blocks are cubes
•	The structure is built in layers
•	The top layer is a single block
•	A block in an upper layer must be supported by four blocks in a lower layer
•	A block in a lower layer can support more than one block in an upper layer
•	You cannot leave gaps between blocks
Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

## Step 1. Understand the Problem
You are provided with the problem description above. Your tasks for this step are:
•	To make notes of your mental model for the problem, including explicit and implicit rules
•	Write a list of questions for things that aren't clear about the problem from the description provided
### Explicit rules
•	4 blocks of the lower layer support 1 block of the top layer.
•	block in the lower layer can support multiple blocks of the second layer.
•	Top layer is a single block.
•	Blocks have no gaps
### Implicit rules
•	If no blocks are given, return 0
•	The tower is a pyramid with a slope of 1
•	If you look from the top, each layer is a square
•	Each layer’s side is incremented by 1 each layer down
•	Leftover blocks are ones that were not used in the sequence
Input: Number of blocks
Output: Number of blocks left after building the pyramid
### Mental model
Blocks per layer: 1, 4, 9, 16… . That is 1, 2, 3, 4… Squared
5 => 4 => 0
10 => 9 => 5

## Step 2. Examples and Test Cases
With reference to your initial mental model and questions from Step 1, make some notes about the test cases. Do the test cases confirm or refute different elements of your original analysis and mental mode? Do they answer any of the questions that you had, or do they perhaps raise further questions?

•	Test Cases are provided.
•	No questions, rules confirmed

## Step 3: Data Structures
We could use an array if we needed access to blocks, but we don’t. No Arrays.

## Step 4. Algorithm
For this step, use your analysis of the problem so far to write out a high-level algorithm that solves the problem at an abstract level. Avoid too much implementation detail at this stage.

1.	Set the sum to 0 and iterator to 1
2.	Iterate through the sequence of squared numbers using the iterator,
  a.	Add the current iterator to the sum
  b.	Repeat until the limit of blocks has been reached.
3.	Subtract the sum from the limit, and set it to leftover blocks.
4.	Return leftover blocks.

## Step 5: Implement a Solution in Code
*/

function calculateLeftoverBlocks(inputBlocks) {
  let sum = 0;
  for (let i = 1; sum + i ** 2 <= inputBlocks; i++) {
    sum += i ** 2;
  }
  const leftover = inputBlocks - sum;
  return leftover;
}

// console.log(calculateLeftoverBlocks(0) === 0); //true
// console.log(calculateLeftoverBlocks(1) === 0); //true
// console.log(calculateLeftoverBlocks(2) === 1); //true
// console.log(calculateLeftoverBlocks(4) === 3); //true
// console.log(calculateLeftoverBlocks(5) === 0); //true
// console.log(calculateLeftoverBlocks(6) === 1); //true
// console.log(calculateLeftoverBlocks(14) === 0); //true


/*
Sort by Most Adjacent Consonants
Given an array of strings, return a new array where the strings are sorted to the
highest number of adjacent consonants a particular string contains. If two strings
contain the same highest number of adjacent consonants they should retain their
original order in relation to each other. Consonants are considered adjacent if
they are next to each other in the same word or if there is a space between two
consonants in adjacent words.

P
function sortStringsByConsonants (Array [...Strings]) => Array [...Strings] sorted

- consonants ate not vowels, ![aeiou]
- adjacent means next to each other or with a space separation
- sort by highest count of adjacent constants
- ties keep their location
- strings can contain multiple words

Q: Do we sort ascending or descending order - descending
Q: What to do if there is no constants - order remains the same
Q: Does input have to be validated? - no
Q: Does case matter? - all lowercase

Mental Model
Q: How do you keep track of insertion indexes?
- separate into sections? no
[0, 0, 2, 3]
=> [[0, 0], 2, 3] count = 0, currCount = 0 - group! anchor [0, 0] - count 0 at index 0
=> [[2], [0, 0], 3] count = 0, currCount = 2 - move after 3m before 1 or lower, to index 0! anchor [2, 0] - count 2 at index 0
=> [3, 2, [0, 0]] count = 2, currCount = 3 - move bafter 4, before 2 (at index 0), to index 0!
- make an array of indexes? no
- group same count into subarrays? no
- make an array of counts? yes

['aa', 'baa', 'ccaa', 'dddaa', 'bbaa']

[0, 0, 2] => [2, 0, 0] // different count sets off an iteration through counts and changes the position
2 => 0, currentIndex => insertIndex
['aa', 'baa', 'ccaa', 'dddaa', 'bbaa'] => ['ccaa', 'aa', 'baa', 'dddaa', 'bbaa']

Q What indexes do I need to keep track of?
Current and insert indexes.

[1, 0, 0, 2] => [2, 1, 0, 0] // different count sets off an iteration through counts and changes the position
3 => 0, currentIndex => insertIndex
['ccaa', 'aa', 'baa', 'dddaa', 'bbaa'] => ['dddaa', 'ccaa', 'aa', 'baa', 'bbaa']

[2, 1, 0, 0, 1] => [2, 1, 1, 0, 0] // different count sets off an iteration through counts and changes the position
4 => 2, currentIndex => insertIndex
['ccaa', 'aa', 'baa', 'dddaa', 'bbaa'] => ['dddaa', 'ccaa', 'aa', 'baa', 'bbaa']

Q How do you find the insert index?
Insert index is before lower count in the counts array.

=> ['dddaa', 'ccaa', 'bbaa' 'aa', 'baa']

D
Arrays

Algorithm
1. Set counts to an empty array
2. Iterate through each string of the input array
  a. Set count to 0
  // get count
  b. Iterate through characters
    - If the next character is a constant, increment the count
  c. End char loop

  // insert string
  d. If counts array is empty or the count is bigger than the first item of counts,
    - Add the count to the front
    - Add the current item to the front of sorted strings
  e. Else iterate the counts using k index
    - If the next count is undefined,
      - Add count and string to the end of arrays
      - End counts loop
    - Else if the next count is less than the current count or the next count is
      - Set insertIndex to k index
      - Insert the count to insertIndex
      - Insert the string to insertIndex of sortedStrings array
      - End counts loop
  f. End counts loop
4. End str loop
5. Return sortedStrings

C
Use a regular for loop to iterate through characters
Use forEach loop to iterate through input array and count, since we're looking to modify original arrays
Use splice to insert the item to counts and change the location of the string
*/

function sortStringsByConsonants (arr) {
  const counts = [];
  const sortedStrings = [];

  arr.forEach((str, i, arr) => {
    let count = 0;
    const strTrim = str.split(' ').join(''); // handle space separation

    for (let j = 0; j < strTrim.length - 1; j++) {
      if (!strTrim[j].match(/[aeiyou]/) && !strTrim[j + 1].match(/[aeiyou]/)) count += 1;
    } // End chars loop

    if (counts.length === 0 || count > counts[0]) {
      counts.unshift(count);
      sortedStrings.unshift(str);
    } else {
      for(let k = 0; k < counts.length; k++) {
        if (counts[k + 1] === undefined) {
          counts.push(count);
          sortedStrings.push(str);
          break;
        } else if (count > counts[k]) {
          counts.splice(k, 0, count);
          sortedStrings.splice(k, 0, str);
          break;
        }
      }   // End counts loop
    }   // End else
  }); // End strings loop
  return sortedStrings;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa', 'bbaa'])); // ['dddaa', 'ccaa', 'bbaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']