function map(arr, cb, thisArg = arr) {
  let i = 0;

  return reduce(thisArg, (accum, curr) => {
    i += 1;
    accum.push(cb(curr, i, thisArg));
    return accum;
  }, []);
}

function reduce(arr, cb, accum) {
  let i = 0;

  if (arr[0] && accum === undefined) {
    accum = arr[0];
    i = 1;
  }

  while(i < arr.length) {
    let curr = arr[i];
    accum = cb(accum, curr);
    i += 1;
  }

  return accum;
}
let letters = ['a', 'b', 'c', 'd'];
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
console.log(map(numbers, function (number, i, arr) {
    return number;
  }, letters)); // ['a', 'b', 'c', 'd']