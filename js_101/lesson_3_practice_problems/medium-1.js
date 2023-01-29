/**
 * Q1: "ASCII Art": a stone-age form of nerd artwork from back in the days
 * before computers had video screens.
 *
 * write a program that outputs The Flintstones Rock! 10 times, with each line
 * indented 1 space to the right of the line above it.
 */

function makeStoneArt(num = 10) {
  for (let i = 0; i < num; i++) {
    console.log(`${' '.repeat(i)}The Flintstones Rock!`);
  }
}

// makeStoneArt();

/**
 * Q2: Return a new string that swaps the case of all of the letters.
 *
 * Algorithm:
 * Set chars equal to a split of the string
 * Loop through characters
 * - If upper, set to lowercase
 * - Else, set to uppercase
 * Return chars join
 *
 */

function swapCase(str) {
  const chars = str.split('');
  return chars.map((e) => {
    if (e.match(/[a-z]/)) return e.toUpperCase();
    return e.toLowerCase();
  }).join('');
}

let munstersDescription = "The Munsters are creepy and spooky.";
let output = swapCase(munstersDescription);
console.log(output);
