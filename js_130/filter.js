function filter(arr, cb, thisArg = this) {
  let nArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb.call(thisArg, arr[i], i, arr)) {
      nArr.push(arr[i]);
    }
  }
  return nArr;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]