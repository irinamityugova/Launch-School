let db = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers (things = db) {
  return things.filter((e) => Number.isInteger(e))
}

console.log(findIntegers());