/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.
*/

function rotate(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr;
  return arr.slice(1).concat(arr[0]);
}

/*
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

P
Move a number at the length - end index - 1 to the end.

E
1 - no rotation
2 - second to last

D
735291, 3 -> '73591'+'2' -> 735912

A
If the end index is 1, return the number
Calculate the index
Turn the number into a string
Concatinate the new number
Turn the new number into an integer
Return a new number
*/

function rotateRightmostDigits(num, end) {
  if (end === 1) return num;
  let str = String(num);
  let index = str.length - end;
  let newNum = str.slice(0, index) + str.slice(index + 1) + str[index];
  return Number(newNum);
}

// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

P
Input: Number
Output Number

E
735291 -> 3 52917 -> 32 9175 -> 321 759 -> 3215 97 -> 32157 9
end index 6 to 1

D strings

A
For each end index of num length to 1,
  Rotate Rightmost Digit
return modified number
*/

function maxRotation(num) {
  let end = String(num).length;
  let newNum = num;
  while (end > 0) {
    newNum = rotateRightmostDigits(newNum, end);
    end -= 1;
  }
  // console.log(newNum);
  return newNum;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

/*
Stack Machine Interpretation
Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

  n : Place a value, n, in the register. Do not modify the stack.
  PUSH : Push the register value onto the stack. Leave the value in the register.
  ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
  SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  POP : Remove the topmost item from the stack and place it in the register.
  PRINT : Print the register value.

P
I: String
O: String


*/

class Stack extends Array {
  constructor(size = 0) {
    Stack.prototype.n = 0;
    super(size);
  }

  REG() {
    return this.n;
  }

  NREG(n) {
    Stack.prototype.n = n;
  }

  PUSH() {
    console.log(this);
    this.push(this.n);
  }

  ADD() {
    this.NREG(this.REG() + this.pop());
  }

  SUB() {
    this.NREG(this.REG() - this.pop());
  }

  MULT() {
     this.NREG(this.REG() * this.pop());
  }

  DIV() {
     this.NREG(this.REG() / this.pop());
  }

  REMAINDER() {
     this.NREG(this.REG() % this.pop());
  }

  POP() {
    this.NREG(this.stack.pop());
  }

  PRINT() {
    console.log(this.REG());
  }
}

Stack.prototype.length = 0;

function minilang(input) {
  let stack = new Stack();
  let commands = input.split(' ');
  for (let command of commands) {
    if (command.match(/\d/) && stack.length === 0) {
      stack.NREG(commands[0]);
    } else {

    }
  }

  console.log('n =', stack.REG());
  console.log(stack);
}

minilang('5 PUSH 3 MULT PRINT');
// 15