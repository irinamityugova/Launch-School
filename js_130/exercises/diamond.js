// Diamond
// The diamond exercise takes as its input a letter, and outputs it in a diamond shape. Given a letter, it prints a diamond starting with 'A', with the supplied letter at the widest point.

// The first row contains one 'A'.
// The last row contains one 'A'.
// All rows, except the first and last, have exactly two identical letters.
// The diamond is horizontally symmetric.
// The diamond is vertically symmetric.
// The diamond has a square shape (width equals height).
// The letters form a diamond shape.
// The top half has the letters in ascending order.
// The bottom half has the letters in descending order.
// The four corners (containing the spaces) are triangles.

/*
Letter -> Diamond Shape

R
How many spaces at the start do you need?

How many spaces between do you need?

How do you iterate vertical to and then from the final letter?

Uppercase only?

E

A ->
A

C ->
  A // padStart = 2
 B B // padStart = 1 padEnd = 1
C   C // padStart = 0 padEnd = 3
 B B
  A

D ->
   A // padStart = 3
  B B // padStart = 2 padEnd = 1
 C   C // padStart = 1 padEnd = 3
D     D // padStart = 0 padEnd = 5
 C   C // padStart = 2 padEnd = 3
  B B // padStart = 1 padEnd = 1
   A // padStart = 3

D
String concatenation

A
If input is A,
  return 'A';
If input's charcode is not between 65 and 90 (incl),
  throw Err

Initiate diamond from the middle row,
Add rows on each side until the last one with an A
  Initiate variables
    start at 1
    end at number of characters * 2 - 3
    char at input
    diamond to the middle row and \n
  For next chars down the alphabet until char is A,
    increment start by 1
    decrement end by 2
    decrement char to its charCode - 1;
    initiate top and bottom lines
      to paddings, chars and \n
    concat lines to diamond
  return diamond
*/

module.exports = class Diamond {
  static makeDiamond(char) {
    if(char === 'A') return 'A\n';
    const NUM_CHARS = char.charCodeAt() - 64;
    let start = 1;
    let end = start + NUM_CHARS * 2 - 3;
    let diamond = `${char.padEnd(end, " ")}${char}\n`;
    while (end > 1) {
      start += 1;
      end -= 2;
      char = String.fromCharCode(char.charCodeAt()- 1);
      let line = char.padStart(start, " ") + char.padStart(end, " ") + "\n".padStart(start, " ");
      if(char === 'A') {
        line = char.padStart(start, " ") + "\n".padStart(start, " ");
      }
      diamond = line + diamond + line;
    }
    return diamond;
  }
};