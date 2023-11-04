// Write a program that takes a word and a list of possible anagrams and selects the correct sublist that contains the anagrams of the word.

// For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana", the program should return a list containing "inlets". Please read the test suite for the exact rules of anagrams.

/*
Problem
Anagram(word)
Anagram.prototype.match([words]) => [anagrams]
Anagram can be made by rearranging the letters in the word.

Rules:
All letters have to be used only once per letter
Anagram is a class with a match method

Example:
Anagram('ant').match(['tan', 'stand', 'at']) => ['tan']

Data Structure:
counter object could count the number of letters
Filtered Array must be returned

Algorithm

create a class Anagram

--Initiate the constructor--
set this word
set the count property to an object with each letter and the number of its occurences
set the length property to the length of the word

--Add countLetters(word) as a static method--
word => counter object
for each letter,
  if the letter is undefined in the counter,
    set the letter property to initial value of 0
  increment the letter's value
return the counter

--Add the match method to the prototype--
([words]) => [anagrams]
select each word,
if the length is the same as this word
and letter count is the same as this word's letter count
*/

module.exports = class Anagram {
  constructor(word) {
    this.word = word;
    this.length = word.length;
    this.count = Anagram.countLetters(word);
  }

  static countLetters(word) {
    const counter = {};
    for (let i = 0; i < word.length; i++) {
      let letter = word[i].toLowerCase();
      if(counter[letter] === undefined) {
        counter[letter] = 0;
      }
      counter[letter] += 1;
    }
    return counter;
  }

  match(words) {
    return words.filter((word, i) => {
      let lowerWords = words.map(word => word.toLowerCase());
      if (word.length !== this.length) return false;
      if (word === this.word) return false;
      if (i !== lowerWords.indexOf(word.toLowerCase())) return false;
      let wordCount = Anagram.countLetters(word);
      for(let letter in wordCount) {
        if(wordCount[letter] !== this.count[letter]) return false;
      }
      return true;
    });
  }
};