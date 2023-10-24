/**
 * OPTIONAL Write a function that takes 5 string arguments, and returns an object with 3 properties:

first: the first argument
last: the last argument
middle: the middle 3 arguments as a sorted array
After writing the function, write some code to call the function. The arguments you provide should come from an array. You should create local variables named first, last, and middle from the return value.

Use shorthand syntax wherever you can.
 */

function fun() {
  let args = Array(...arguments);
  let [first, , , , last] = args;
  let middle = args.slice(1, 4);
  return {
    first,
    middle,
    last
  }
}

console.log(fun(1, 2, 3, 4, 5));