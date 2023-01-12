/*
Create a calculator

Pseudocode:
Ask the user for a number
Ask the user for the operation
Ask the user for the second number
Conduct the operation
Return the result
Ask the user to continue with another operation or cancel the result to 0
Escape the application with a word "exit" at any point

Test cases:
// Simple algorithmic expressions (+, -, *, /, ^, %)
// Unknown operator
// Division by 0

Error handling:
// Incorrect input
// Division by 0

*/

const rlSync = require("readline-sync");

console.log(`
|-------------------------------------------------|
|         Welcome to Console Calculator!          |
|-------------------------------------------------|
| Answer the following prompts to get the result. |
| You can reuse the result of operation.          |
| Press Ctrl-C to exit the application.           |
|-------------------------------------------------|`);

let num1 = rlSync.questionInt("Number: ");
let operation = "";
let num2 = 0;
let another = "y";
let result = 0;

let produceResult = function (a, b, oprtn) {

  if (result) {

    let useResult = rlSync.question("Continue with a result? y/n ")

    if (useResult === "n") {
      result = 0;
      a = rlSync.questionInt("Number: ");
    } else if (useResult === "y"){
      a = result;
    } else {
      console.log("I'll assume you want to keep using the result... Please use valid y or n for an answer.")
      a = result;
    }
  }

  do {
    oprtn = rlSync.question("Operator: ");
    if (!oprtn.match(/[+\-*/%^]/)) {
      console.log(`
        |-------------------------------- ERROR ----------------------------------|
        | ${oprtn} is not registered.                                             |
        | Please select from the following commands:                              |
        | + to add,                                                               |
        | - to subtract,                                                          |
        | * to multiply,                                                          |
        | / to divide,                                                            |
        | % to get the remainder of the division,                                 |
        | ^ to put previous number to the power of the next number.               |
        |-------------------------------------------------------------------------|`)
    }
  } while (!oprtn.match(/[+\-*/%^]/))

  b = rlSync.questionInt("Number: ");


  switch (oprtn) {
    case "exit": return;
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = a / b; break;
    case "%": result = a % b; break;
    case "^": result = a ** b; break;
    default:


  }
  return result;
}

// loop the application
do {
  result = produceResult(num1, num2, operation);
  console.log("|-> Result:", result)

  another = rlSync.question("Would you like to perform another operation? y/n ")
} while (another.match(/y/))