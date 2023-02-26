/*
Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters,
the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
If you add periods '.' between some characters in the local name part of an email address,
mail sent there will be forwarded to the same address without dots in the local name.
Note that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
If you add a plus '+' in the local name, everything after the first plus sign will be ignored.
This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each emails[i],
return the number of different addresses that actually receive mails.


Example 1:

Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
Example 2:

Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3


Constraints:

1 <= emails.length <= 100
1 <= emails[i].length <= 100
emails[i] consist of lowercase English letters, '+', '.' and '@'.
Each emails[i] contains exactly one '@' character.
All local and domain names are non-empty.
Local names do not start with a '+' character.
Domain names end with the ".com" suffix.

P
+ and . on the first half of the email forward to the same email as an email without those characters
there is less than 100 emails, and an email's length is under 100 characters
There is exactly one @ in each email
All domain names are non empty and end with ".com"
@ separates a local and a domain
Locals do not start with a +, and consist of lowercase letters
Strings starting with + are forwarded to the local before the +
Return the number of different emails that will receive an email

E
["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
=> [[["test.email+alex"], ["leetcode.com"]], [["test.e.mail+bob.cathy"], ["leetcode.com"]], [["testemail+david"], ["lee.tcode.com"]]]
=> [[["testemail"], ["leetcode.com"]],[["testemail"], ["leetcode.com"]], [["testemail"], ["lee.tcode.com"]]]
=> [[["testemail"], ["leetcode.com"]], [["testemail"], ["lee.tcode.com"]]]
=> 2

D
Nested Arrays

A
1. Iterate through each email
  a. Split the email to local and domain
  b. Iterate through locals,
    - Split the local by .'s and join back
    - Split the local by + and select the first portion
  c. Join the local and domain by @
2. Sort the emails
3. Set result to an empty array
4. Iterate through emails again
  a. If current item is NOT the same as the previous item,
    - Add it to the result
5. Return the length of the result

C - Beef's solution with a helper function.
*/


function f (arr) {
  let obj = {};
  arr = arr.map(word => word.split("@"));
  arr = arr.map(([key, value]) => filterLocal(key) + "@" + value);
  console.log(arr);

  arr.forEach(char => {
    obj[char] = obj[char] || 0;
    obj[char] += 1;
  });
  let values = Object.values(obj);
  return values.length;
}

function filterLocal(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === ".") continue;
    if (char === "+") break;
    else {
      result += char;
    }
  }
  return result;
}

console.log(f(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])); // 2
console.log(f(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])); //3
console.log(f(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"])); //2

console.log(f(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])); //2
console.log(f( ["a@leetcode.com","b@leetcode.com","c@leetcode.com"])); //3


/*
1:03 22
Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

Return an array of all the words third for each occurrence of "first second third".
Constraints:

1 <= text.length <= 1000
text consists of lowercase English letters and spaces.
All the words in text a separated by a single space.
1 <= first.length, second.length <= 10
first and second consist of lowercase English letters.

P
function (txt, first, second) => Array [...Strings]: all the words third for each occurrence of "first second third".
- occurrence
- second comes after first
- third immediately after second
- third comes second after first?
- third for each occurrence

E
txt = "alice is a good girl she is a good student"
["alice", "is", "a", "good", "girl", "she", "is", "a", "good", "student"]
=> [["a", "good", "girl"], ["a", "good", "student"]]
first = "a", 2 occurances by words
second = "good", 2 occurences by words
=> ["girl","student"]

E2
"we will we will rock you", "we", "will"
=> ["we","rock"]

D
Arrays [...Strings]

A
1. Split txt into words
2. Set result to an empty array and index to 0
3. Iterate through words until we're at the third to last word
  a. If the word is the first word, and the second word is the second word
    - add the third word to the result
4. Return the result

C
while loop index < words.length - 2
push method

Feedback
22 mins - 15 mins on PEDAC
strong foundations
understanding the problem wording, what it's asking
good breaking down using examples
look through test cases
fixing PEDAC while refactoring
it's fine to stick to original variable names, bug pitfalls
strong foundation
*/

function g (txt, first, second) {
  const words = txt.split(" ");
  const result = [];
  let index = 0;

  while (index < words.length - 2) {
    if (words[index] === first && words[index + 1] === second) result.push(words[index + 2]);
    index++;
  }
  return result;
}
console.log(g("alice is a good girl she is a good student", "a", "good")); // ["girl","student"]
console.log(g("we will we will rock you", "we", "will")); // ["we","rock"]
