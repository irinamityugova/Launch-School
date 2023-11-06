// Write a function named afterNSeconds that takes two arguments: a callback and a time duration in seconds. It should wait for the indicated period, then invoke the callback function.

function afterNSeconds(cb, time) {
  let milliseconds = time * 1000;
  setTimeout(cb, milliseconds);
}

afterNSeconds(() => console.log('Hi'), 3);