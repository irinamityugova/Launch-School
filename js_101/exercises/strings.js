/** Write a function which accomplishes what the string requests
 *   Your function should use the mechanism specifed (for, while, forEach, etc)
 *   Use the function name specified
 *   Log the result to the console
 */
const obj = { text: "Remove occurances of the letter e after the word 'letter' in this sentence" }
Object.freeze(obj);

/**
 * BONUS:
 * A single function should satisfy the strings defined 'obj' and the bonus objects below
 * The function should only take a single argument of type object
 * The function should be able to accomidate any word between the single quotes
 */
const bonusObj1 = { text: "Remove occurances of the letter e after 'the' in this sentence" }
const bonusObj2 = { text: "The letter e should not appear after the word 'not' in this sentence" }
Object.freeze(bonusObj1);
Object.freeze(bonusObj2);

/**
 * Bonus
 *
 * getWord(str) => String
 *
 * Algorithm:
 * Split by words
 * return words.match(/^'*+'$/)
 */

const getWord = (str) => {
  const regex = new RegExp(/'.*'/);

  if (str.match(regex)) {
    return str.match(regex)[0].replace(/\'/g, '');
  }

  return '';
};


/** for loop - function name: forSolution
 * Remove occurances of the letter e after the word 'letter' in this sentence
 *
 * function forSolution(str: String) => String
 *
 * Algorithm:
 * Split the str into words
 * Loop through words,
 * - If the word === 'letter',
 *   Set afterLetter array to a splice of the words after 'letter' index.
 * For words afterLetter,
 * - Replace 'e'
 * Add afterLetter to words
 * Return words joined by spaces
 */

function forSolution(str) {
  const word = getWord(str);
  let afterLetter = [];
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      afterLetter = words.splice(i + 1);
      break;
    }
  }

  for (let i = 0; i < afterLetter.length; i++) {
    afterLetter[i] = afterLetter[i].replace(/e/g, '');
  }

  words.push(...afterLetter);

  return words.join(' ');
}

let output = forSolution(obj.text);
console.log(output);

/** while loop - function name: whileSolution
 * Remove occurances of the letter e after the word 'letter' in this sentence
 *
 * function forSolution(str: String) => String
 *
 * Algorithm:
 * Find elbow at the index of 'letter' + 'letter'.length
 * Set start to a substring before elbow
 * Set end to a substring after elbow
 * While end includes 'e',
 * - replace 'e' to '';
 */

function whileSolution(str) {
  const word = getWord(str);
  const elbow = str.indexOf(word) + word.length;
  const start = str.substring(0, elbow);
  let end = str.substring(elbow);

  while (end.includes('e')) {
    end = end.replace(/e/g, '');
    break;
  }
  return start + end;
}

output = whileSolution(obj.text);
console.log(output);




/** do while loop - function name: doWhileSolution
 * Remove occurances of the letter e after the word 'letter' in this sentence
 * function doWhileSolution(str: String) => String
 *
 * Algorithm:
 * Find elbow at the index of 'letter' + 'letter'.length
 * Set start to a substring before elbow
 * Set end to a substring after elbow
 * Replace 'e' to '' while end includes 'e';
 */

function doWhileSolution(str) {
  const word = getWord(str);
  const elbow = str.indexOf(word) + word.length;
  const start = str.substring(0, elbow);
  let end = str.substring(elbow);

  do {
    end = end.replace(/e/g, '');
  } while (end.includes('e'));
  return start + end;
}

output = doWhileSolution(obj.text);
console.log(output);




/** forEach iteration method  - function name: forEachSolution */

function forEachSolution(str) {
  const word = getWord(str);
  const elbow = str.indexOf(word) + word.length;
  let start = str.substring(0, elbow);
  const end = str.substring(elbow).split('');

  end.forEach(e => start += e.replace('e', ''));

  return start;
}

output = forEachSolution(obj.text);
console.log(output);



/** filter iteration method  - function name: 'filterSolution' */

function filterSolution(str) {
  const word = getWord(str);
  const elbow = str.indexOf(word) + word.length;
  const start = str.substring(0, elbow);
  let end = str.substring(elbow).split('');

  end = end.filter(e => e !== 'e');

  return start + end.join('');
}

output = filterSolution(obj.text);
console.log(output);



// map iteration method

function mapSolution(str) {
  const word = getWord(str);
  const elbow = str.indexOf(word) + word.length;
  let start = str.substring(0, elbow);
  let end = str.substring(elbow).split('');

  end = end.map(e => e.replace('e', ''));

  return start + end.join('');
}

output = mapSolution(obj.text);
console.log(output);



// reduce iteration method

function reduceSolution(str) {
  const word = getWord(str);
  const elbow = str.indexOf(word) + word.length;
  let start = str.substring(0, elbow);
  let end = str.substring(elbow).split('');

  end = end.reduce((acc, curr) => acc + curr.replace('e', ''));

  return start + end;
}

output = reduceSolution(obj.text);
console.log(output);