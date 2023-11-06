// Write a function named startCounting that logs a number to the console every second, starting with 1. Each output number should be one greater than the previous one.

function startCounting() {
  let count = 0;
  let id = setInterval(() => console.log(count += 1), 1000);
  setTimeout( () => stopCounting(id), 10000);
}

startCounting();

function stopCounting(counter) {
    clearInterval(counter);
  }