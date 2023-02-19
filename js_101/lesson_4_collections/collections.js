let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }
// --> { fruit: 'pear', vegetable: 'carrot' }
// If the object has duplicate keys, the value of the first one is overwritten by the value of the last one.


// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

/* PEDAC P for Understand the Problem

Questions.
- Would a single character count as a palindrome? No - Test Cases

InputOutput = (String) => Array [...Strings]

Explicit Rules
- Return all substrings that are palindromes.
- Palindrome words are case sensitive.

Implicit Rules
- Empty string and strings without palindromes should return an empty array..
- If a palindrome substring contains a palindrome, both should be added to the array.
- Two or more characters that read the same from start and end are palindromes */
/* Mind Map
string -> palindrome substring -> array
*/
/* PEDAC DA for Data Structure and Algorithm
Data Structure: Array - return data type

Algorithm:
Create isPalindrome helper function
  Return the conditional statement that checks if string and reversed string are the same

Set result array to an empty array

Loop the string by i character until the second to last character of the string
  Loop the next character, call it j, until the end of the string
    Create a substring from i to j, including j.
    If the substring is a palindrome
      Add substring to the result array
      Continue to the next i
  End inner j loop
End outer i loop

Return result
 */

function palindromeSubstrings(str) {
  const isPalindrome = (substr) => substr === substr.split('').reverse().join('');

  const result = [];

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const substr = str.slice(i, j + 1);
      if (isPalindrome(substr)) result.push(substr);
    }
  }

  return result;
}

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []
