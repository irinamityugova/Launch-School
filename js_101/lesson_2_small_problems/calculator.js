/**
 * Create a calculator
 *
 * Pseudocode:
 * Ask the user for a number
 * Ask the user for the operation
 * Ask the user for the second number
 * Conduct the operation
 * Return the result
 * Ask the user to continue with another operation or cancel the result to 0
 * Escape the application with a word "exit" at any point
 *
 * Test cases:
 * - Simple algorithmic expressions (+, -, *, /, ^, %)
 * - Unknown operator
 * - Division by 0
 *
 * Error handling:
 * - Incorrect input
 *
 */

const rlSync = require('readline-sync');

const calculator = function calculator() {
  console.log(`
  |-------------------------------------------------|
  |         Welcome to Console Calculator!          |
  |-------------------------------------------------|
  | Answer the following prompts to get the result. |
  | You can reuse the result of operation.          |
  | Press Ctrl-C to exit the application.           |
  |-------------------------------------------------|`);

  let result;
  let input;
  let num1;
  let operation;
  let num2;
  let another;
  let useResult;

  const requestInput = function requestInputFromUser() {
    if (result) {
      do {
        useResult = rlSync.question('Continue with a result? y/n ');
      } while (!useResult.match(/[yn]/));

      switch (useResult) {
        case 'y':
          num1 = result;
          break;
        case 'n':
          result = 0;
          num1 = rlSync.questionInt('Number: ');
          break;
        default: console.log('Incorrect input');
      }
    } else {
      num1 = rlSync.questionInt('Number: ');
    }

    do {
      operation = rlSync.question('Operator: ');
      if (!operation.match(/[+\-*/%^]/)) {
        console.log(`
|------------------------- ERROR ---------------------------|
| ${operation} is not a registered mathematical operator.   |
| Please select from the following commands:                |
| + to add,                                                 |
| - to subtract,                                            |
| * to multiply,                                            |
| / to divide,                                              |
| % to get the remainder of the division,                   |
| ^ to put previous number to the power of the next number. |
|-----------------------------------------------------------|`);
      }
    } while (!operation.match(/[+\-*/%^]/));

    num2 = rlSync.questionInt('Number: ');

    input = {
      num1,
      num2,
      operation,
    };
  };

  const produceResult = function produceResultOfAnOperation(a, b, oprtn) {
    switch (oprtn) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = a / b; break;
      case '%': result = a % b; break;
      case '^': result = a ** b; break;
      default:
    }
    console.log('Result =', result);
    return result;
  };

  do {
    requestInput(result);
    produceResult(input.num1, input.num2, input.operation);

    another = rlSync.question('Would you like to perform another operation? y/n ');
  } while (another.match(/y/));
};

calculator();
