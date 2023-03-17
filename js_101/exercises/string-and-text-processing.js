let output = null;
/*
Uppercase Check
Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

P
String => Boolean
all of the alphabetic characters
Q: Does that mean we should disregard numbers?

A
Loop chars
  If char is lowercase, return false
Return true
*/

// function isUppercase(str) {
//   return str.split('').every(char => char === char.toUpperCase());
// }

function isUppercase(string) {
  return string.toUpperCase() === string;
}

// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true

/*
Delete Vowels 90-85 5 mins
Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.
*/

// function removeVowels(strings) {
//   return strings.map(string => string.replace(/[aeiou]/gi, ""));
// }

function removeVowels(arr) {
  const vowels = "aeiou";
  return arr.map(str => str.split('').filter(char => !vowels.includes(char.toLowerCase())).join(''));
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

/*
Lettercase Counter 90-65
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.
*/
function letterCaseCount(str) {
  const count = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i] && str[i].toLowerCase() === str[i]) {
      count['neither'] += 1;
    } else if (str[i].toUpperCase() === str[i]) {
      count['uppercase'] += 1;
    } else {
      count['lowercase'] += 1;
    }
  }

  return count;
}

letterCaseCount('A +Cd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

/*
Capitalize Words 65-61
Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.
*/
function wordCap(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

/*
Swap Case 60-57
Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
*/
function swapCase(str) {
  return str.split('').map(char => {
    return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

/*
Staggered Caps (Part 1) 56-28
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.
*/
// function staggeredCase(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
//     } else {
//       str = str.slice(0, i) + str[i].toLowerCase() + str.slice(i + 1);
//     }
//   }
//   return str;
// }

// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

/*
Staggered Caps (Part 2) 27-9
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.
*/

function staggeredCase(str) {
  let i = 0;
  let count = 0;

  while (i < str.length) {
    if (str[i].match(/[\d\s]/)) {
      i += 1;
      continue;
    }
    if (count % 2 === 0) {
      str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    } else {
      str = str.slice(0, i) + str[i].toLowerCase() + str.slice(i + 1);
    }
    i += 1;
    count += 1;
  }
  return str;
}

staggeredCase("I Love Launch School!"); // === "I lOvE lAuNcH sChOoL!"
staggeredCase("ALL CAPS"); // === "AlL cApS"
staggeredCase("ignore 77 the 444 numbers"); // === "IgNoRe 77 ThE 444 nUmBeRs"

/*
How long are you? 7-3 4 mins
Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.
*/
function wordLengths(str) {
  return str ? str.split(' ').map(word => `${word} ${word.length}`) : [];
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

/*
Search Word (Part 1) 90-71 19 mins
Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas. Also assume that the search is case-insensitive.
*/

// function searchWord(word, text) {
//   const length = word.length;
//   let count = 0;

//   for (let i = 0; i < text.length - length; i++) {
//     const section = text.slice(i, i + length).toLowerCase() ;
//     if( section === word ) count += 1;
//   }

//   return count;
// }

// function searchWord(word, text) {
//   return text.split(' ').filter(tWord => tWord.toLowerCase() === word).length
// }


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

/*
Search Word (Part 2) 90-57
The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

For this exercise, write a function that takes a word and some text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

P
word, text => text
String, String => String

R
highlighted - sorrounded by ** double asterisks
change the special words to highlighted and uppercase

A
Iterate through the text,
- Once there is an occurance of a word,
  Replace the word with highlighted word

*/

function searchWord(word, text) {
  const highlightedWord = `**${word.toUpperCase()}**`;
  const length = word.length;

  for (let i = 0; i < text.length; i++) {
    const isFirstLetter = text[i].toLowerCase() === word[0];
    const hasSpaceAfter = text[i + length] === " ";

    if ( isFirstLetter && hasSpaceAfter && text.slice(i, i + length).toLowerCase() === word ) {
      const preSection = text.slice(0, i);
      const postSection = text.slice(i + length);
      text = preSection + highlightedWord + postSection;
      i += length;
    }
  }

  return text;
}

// function searchWord(word, text) {
//   let regex = new RegExp(`\\b${word}\\b`, "gi");
//   return text.replace(regex, `**${word.toUpperCase()}**`);
// }

const result = "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?";

// output = searchWord('sed', text) === result;

/*

*/


console.log(output);