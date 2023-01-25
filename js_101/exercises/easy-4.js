import rlSync from 'readline-sync';

/**
 * Searching 101
 * Write a program that solicits six numbers from the user and logs a message that
 * describes whether the sixth number appears among the first five numbers.
 *
 * function search() => Boolean
 *
 * Algorithm:
 * Initiate an empty array called nums
 * Run a loop 6 times to get a number, and
 * - push the number to the array
 * After the loop,
 * Create a variable named bool:
 * - nums array from the beginning, not including the last item, includes the last item
 * Return the conditional
 */

function search() {
  const nums = [];
  for (let i = 0; i < 6; i++) {
    nums.push(rlSync.question('Enter a number: '));
  }
  const bool = nums.slice(0, nums.length - 1).includes(nums[nums.length - 1]);
  return bool;
}

const output = search();
console.log(output);
