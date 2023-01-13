/*
// a function that returns the sum of two numbers
Set the result to be the addition of number one and two and return the result.


// a function that takes an array of strings, and returns a string that is all those strings concatenated together
If the array is empty, return an empty string.
Set an result variable as the first item in the array.
Iterate through the list of strings starting from the second word.
Concatinate each string to the empty string wit a comma in front.
After the loop finished running, return the result.

// a method that takes an array of integers, and returns a new array with every other element
// from the original array, starting with the first element. For instance:
// everyOther([1,4,7,2,5]); // => [1,7,5]
Take an array as a parameter
Initiate result variable as an empty array
Loop through every second item in the parameter array
Add the item to the result array
After the loop is done, return the result

// a function that determines the index of the 3rd occurrence of a given character
// in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex',
// the function should return 6 (the index of the 3rd 'x'). If the given character does not
// occur at least 3 times, return null.
Take a string and a char in the parameters
Initiate the count variable
Iterate through each character in the string
If the loop character is the same as the parameter char, increment the count
When the count turns to 3, return the index
If the loop finished without returning the function, return null

// a function that takes two arrays of numbers and
// returns the result of merging the arrays. The elements of the first array should become the
// elements at the even indexes of the returned array, while the elements of the second array
// should become the elements at the odd indexes. For instance:
// merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
// You may assume that both array arguments have the same number of elements.

Take two arrays as parameters
Initiate the empty result array
Loop each index in the array (doesn't matter which because the length is the same)
Add the first array's item on this given index to the result
Add the second array's item on this given index to the result
After the loop, return result array

*/