function filter(arr, cb, thisArg = this) {
  return reduce(arr, (acc, curr) => {
    if(cb(curr)) acc.push(curr);
    return acc;
  }, []);
}

function reduce(arr, cb, accum) {
  let i = 0;

  if(arr[0] && accum === undefined) {
      accum = arr[0];
      i = 1;
  }

  for (i; i < arr.length; i++) {
    let curr = arr[i];
    accum = cb(accum, curr);
  }

  return accum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]