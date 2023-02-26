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

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
