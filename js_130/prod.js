// For an extra challenge, refactor the solution to this problem using recursion. Bear in mind that named functions created as IIFEs can be referenced by those same functions. That is, you can call a function's name in the body of the IIFE. Don't worry if you can't solve this problem; it's a bit tricky.

// let bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

let bar = (function foo(start) {
  let prod = start;

  return function bar(factor) {
    if (factor === 1) {
      return prod;
    }
    prod += bar(factor - 1);
    return prod;
  };
})(2);

let result = bar(3); // 6
result += bar(4); // 24
result += bar(5); // 120
console.log(result); // 150