// SumOfMultiples.to(1)

/*
Write a program that, given a natural number and a set of one or more other numbers, can find the sum of all the multiples of the numbers in the set that are less than the first number. If the set of numbers is not given, use a default set of 3 and 5.

For instance, if we list all the natural numbers up to, but not including, 20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18. The sum of these multiples is 78.
*/
module.exports = class SumOfMultiples {
  constructor(...nums) {
    this.nums = nums;
  };

  to(num) {
    return SumOfMultiples.to(num, this.nums)
  }

  static to(num, nums = [3, 5]) {
    let sum = 0;
    if(num < nums[0]) return sum;
    let multiples = [];

    for (let i = 0; i < nums.length; i++) {
      let base = nums[i];
      let multiple = base;

      while(multiple < num) {
        if (multiples.includes(multiple)) {
          multiple += base;
          continue;
        }
        sum += multiple;
        multiples.push(multiple);
        multiple += base;
      }
    }
    return sum;
  }
};