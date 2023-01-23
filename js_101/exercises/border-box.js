import rlSync from 'readline-sync';

/**
 * addWord(line, lines, word, maxWidth) => undefined, modifies the lines array
 * Checks if the addition of the word woult fit on that line.
 *
 * Algorithm:
 * If the line is empty,
 * - If the word.length is below or equal to maxWidth,
 *   - add word to the line
 * - Else,
 *   - add line to lines
 *   - reset the line to word
 * Else if the (line + word).length is below or equal to maxWidth,
 * - add space and word to the line
 * Else,
 * - add the line to lines
 * - reset the line to current word
 */

function addWord(line, lines, word, maxWidth) {
  if (line.length === 0) {
    if (word.length <= maxWidth) {
      return line + word;
    }
    lines.push(line);
    return word;
  }
  if ((`${line} ${word}`).length <= maxWidth) {
    return `${line} ${word}`;
  }
  lines.push(line);
  return word;
}

/**
 * function splitOverflow(word as string, maxWidth as number) => array of strings
 * Solution for the edge case where a word is longer then the max width of the line.
 * Splits the word into lines where length is less then or equal to max width.
 *
 * Ex: 'Hello World!', 4 => ['Hell', 'o', 'Worl', 'd!']
 * Ex: 'IHaveNoSpaces', 5 => ['IHave', 'NoSpa', 'ces']
 *
 * Algorithm:
 * Take the word and the max value
 * Create empty array called lines
 * Iterate line length indexes through the string
 * - Add the substring of i to i + max width to the lines list
 * Return lines
 */

function splitOverflow(word, maxWidth) {
  const longWordList = [];
  for (let i = 0; i < word.length; i += maxWidth) {
    longWordList.push(word.substring(i, i + maxWidth));
  }
  return longWordList;
}

// console.log(splitOverflow('IHaveNoSpaces', 5)); // => [ 'IHave', 'NoSpa', 'ces' ]

/**
 * function splitToLines(String, Number) => Array
 * Splits the words into lines, where the line length is less then or equal to the maximum width.
 *
 * Ex: 'He l lo Wo r ld!', 6 => ['He l', 'lo Wo r', 'ld!']
 * Ex: 'Hello World!', 6 => ['Hello', 'World!']
 *
 * Algorithm:
 * Split the label into words by spaces
 * Iterate through words:
 *   If the word's length is less than or equal to the maxWidth
 *   - Add each word to the lines using addToLine()
 *   Else,
 *    - Split overflow with splitOverflow()
 *    - Using the result of the split,
 *      - Add each section to the lines using addWord()
 * Push the last line to the array
 * Return lines
 *
 */

function splitToLines(label, maxWidth) {
  const words = label.split(' ');
  const lines = [];
  let line = '';

  words.forEach((word) => {
    if (word.length <= maxWidth) {
      line = addWord(line, lines, word, maxWidth);
    } else {
      const longWordList = splitOverflow(word, maxWidth);
      longWordList.forEach((section) => {
        line = addWord(line, lines, section, maxWidth);
      });
    }
  });
  if (line.length > 0) {
    lines.push(line);
  }

  return lines;
}

// console.log(splitToLines('Hello World', 2)); // => [ 'He', 'll', 'o', 'Wo', 'rl', 'd!' ]

/**
 * function getUserInput(String) => String
 * Prints the question to the console and gets user's answer.
 *
 */

function getUserInput(question) {
  return rlSync.question(`${question}\n> `);
}

/**
 * function getWidthInput() => Number
 * Validates user's input for the width
 *
 * Algorithm:
 * Create an input equal to 1
 * Loop the prompt for a number above padding width
 */

function getWidthInput() {
  const padding = 4;
  let input = '1';
  while (!input.match(/\d/) || input <= padding) {
    input = getUserInput(`How wide do you want the box to be?
Must be at least ${padding + 1} characters wide for at least 1 letter to fit.`);
  }
  return Number(input) - padding;
}

/**
 * function combine(border: String, padding: String, maxWidth: Number, line: String) => String
 * Combines border, padding and the string to make a string with border
 *
 * Algorithm:
 * If line is undefined,
 * - return the horizontal border
 * Else,
 * - return a line wrapped in side borders
 */

function combine(border, padding, maxWidth, line) {
  if (line === undefined) {
    return `${border.padEnd(maxWidth + 3, padding)}${border}`;
  }
  return `\n${border} ${line.padEnd(maxWidth, padding)} ${border}`;
}

/**
 * function addBorder(lines: Array, maxWidth: Number) => String
 * Wraps an array into a border box.
 *
 * Algorithm:
 * Initiate result equal to an empty string
 * combine(border, padding, maxWidth) for the top border
 * forEach line of the array parameter:
 *   combine(border, padding, maxWidth, line) for the side borders
 * (border, padding, maxWidth) for the bottom border
 * Return the result
 */

function addBorder(lines, maxWidth) {
  let result = '';
  result += combine('+', '-', maxWidth);
  lines.forEach((line) => {
    result += combine('|', ' ', maxWidth, line);
  });
  result += `\n${combine('+', '-', maxWidth)}`;

  return result;
}

/**
 * function borderize() => String
 * Wraps a string in a border. User can specify the width of the border box,
 * and the function will wrap the label into multiple lines
 *
 * Algorithm:
 * Get User's input: label and maxWidth
 * If maxWidth is less than label's length,
 * - wrapToLines(...) to wrap the string to multiple lines and set this to lines variable
 * - addBorder(...) to add the border around your lines and set the result to result
 * Else,
 * - addBorder(...) to add the border around your one liner and set the result to result
 * Print result
 * Return result
 *
 */

function borderize() {
  let result;
  const label = getUserInput('What would you like to borderize?');
  const maxWidth = getWidthInput();

  if (maxWidth < label.length) {
    const lines = splitToLines(label, maxWidth);
    result = addBorder(lines, maxWidth);
  } else {
    result = addBorder([label], maxWidth);
  }
  return result;
}

const output = borderize();
console.log(output);
