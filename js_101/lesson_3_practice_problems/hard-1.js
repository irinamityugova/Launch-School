/**
 * Debug Ben's Code
 * Alyssa reviewed Ben's code and said, "It's a good start, but you missed a
 * few things. You're not returning a false condition, and you're not handling
 * the case when the input string has more or less than 4 components, e.g.,
 * 4.5.5 or 1.2.3.4.5: both those values should be invalid."
 *
 * function sDotSeparatedIpAddress(inputString: String) => Boolean
 *
 * Algorithm:
 * Split by dot, set to dotSeparatedWords
 * Check length to equal 4, otherwise return false
 * While dotSeparatedWords has words,
 * - save the last word by popping it off the list
 * - check this word for non-api numbers (return false if so)
 * Return true
 */

function isAnIpNumber(word) {
  return Number(word) > 0 && Number(word) < 255;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  // add edge case cath for incorrect length
  if (dotSeparatedWords.length !== 4) return false;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    // return false if it's not an api number
    if (!isAnIpNumber(word)) return false;
  }

  return true;
}

let output = isDotSeparatedIpAddress('10.4.5.11'); // true
console.log(output);
output = isDotSeparatedIpAddress('4.5.5'); // false
console.log(output);
output = isDotSeparatedIpAddress('1.2.3.4.5'); // false
console.log(output);