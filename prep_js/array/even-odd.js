let defaultArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

function evenOrOdd (myArray = defaultArray) {

let newArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});
  return newArray;
}

console.log(evenOrOdd())