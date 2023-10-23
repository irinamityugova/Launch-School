// Closures and Private Data

// Create a function named makeCounterLogger that takes a number as an argument and returns a function. When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:

function makeCounterLogger(first) {
  return function(second) {
    let num = first;

    for (num; num < second; num++) {
      console.log(num);
    }

    for (num; num > second; num--) {
      console.log(num);
    }

    console.log(second);
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);