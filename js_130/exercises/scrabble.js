// Write a program that, given a word, computes the Scrabble score for that word.

/*
P
Input = Word
Output = Number

R
Valid characters are counted.
Escape characters and whitespace are not counted
Anything other than a string returns 0
Characters are case insensitive

The following are Letter	Values
A, E, I, O, U, L, N, R, S, T	=> 1
D, G	=> 2
B, C, M, P	=> 3
F, H, V, W, Y	=> 4
K	=> 5
J, X	=> 8
Q, Z	=> 10

E
new Scrabble('').score() => 0
new Scrabble(null).score() => 0
new Scrabble(' \n\t').score() => 0
new Scrabble('a').score() => 1
new Scrabble('f').score() => 4

D
Scrabble class
score property

A

---------------------
create the Dictionary
---------------------
1. Create a Dictionary
  invoke setLetters for the appropriate letters and values

2. Create a setLetters method
  ([...letter], num) => sideffect && null
  if this already has that letter,
    logthe error
    return null
  for each letter:
    set this letter to the value
  return null

create a new Dictionary instance

-------------------
create the Scrabble
-------------------

1. Validate the input
  if input data type is not a string;
    return 0;
  remove white space characters, numbers and special characters from a string
  if the length of the word is 0,
    return 0

2. Count the score
  initiate the score at 0
  for each character,
    retrieve its value from the dictionary
    add the value to the score
  set this score to the score
*/

class Dictionary {
  constructor() {
    this.setLetters(['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1);
    this.setLetters(['D', 'G'], 2);
    this.setLetters(['B', 'C', 'M', 'P'], 3);
    this.setLetters(['F', 'H', 'V', 'W', 'Y'], 4);
    this.setLetters(['K'], 5);
    this.setLetters(['J', 'X'], 8);
    this.setLetters(['Q', 'Z'], 10);
  }

  setLetters(letters, value) {
    letters.forEach(letter => {
      if(this.hasOwnProperty(letter)) console.log('ERR:', letter, 'has been assigned.');
      this[letter] = value;
    });
  }
}

const dict = new Dictionary();

module.exports = class Scrabble {
  constructor(word) {
    this.word = word;
    this.score = Scrabble.score;
  }

  static score(word = this.word) {
    let total = 0;
    if (typeof word !== 'string' || word.length === 0) {
      return total;
    }
    for (let i = 0; i < word.length; i++) {
      let char = word[i].toUpperCase();
      if(!char.match(/[a-zA-Z]/)) {
        i += 1;
        continue;
      }
      total += dict[char];
    }
    return total;
  }
};
