function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = 0;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2)

tries === 1 ? console.log('Lucky!!! You got a number greater than 2')
: console.log('It took ' + String(tries) + ' tries to get a number greater than 2')