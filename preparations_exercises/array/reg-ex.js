/***
 * Write a function that searches an array of strings for every element
 * that matches the regular expression given by its argument. The function
 * should return all matching elements in an array
 ***/
 let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];




function allMatches (arr, regex, result=[]) {
  for (let value of arr) {
    if(regex.test(value)) result.push(value);
  }
  return result;
}

console.log(allMatches(words, /lab/));