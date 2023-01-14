/**
 * Create a calculator
 *
 * Pseudocode:
 * Ask the user for a number
 * Ask the user for the operand
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

import config from './config.js';

const calculator = function calculator() {
  const language = config.language();

  let result;
  let input;
  let num1;
  let operand;
  let num2;
  let another;
  let useResult;

  config[language].welcomeMessage();

  const requestInput = function requestInputFromUser() {
    if (result) {
      do {
        useResult = config[language].useResult();
      } while (!useResult.match(/[yn]/));

      switch (useResult) {
        case 'y':
          num1 = result;
          break;
        case 'n':
          result = 0;
          num1 = config[language].getNum();
          break;
        default: config[language].errMessage();
      }
    } else {
      num1 = config[language].getNum();
    }

    do {
      operand = config[language].getOperator();
      if (!operand.match(/[+\-*/%^]/)) {
        config[language].invalidInput(operand);
      }
    } while (!operand.match(/[+\-*/%^]/));

    num2 = config[language].getNum();

    input = {
      num1,
      num2,
      operand,
    };
  };

  const produceResult = function produceResultOfAnoperand(a, b, oprtn) {
    switch (oprtn) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = a / b; break;
      case '%': result = a % b; break;
      case '^': result = a ** b; break;
      default:
    }
    config[language].resultOutput(result);
    return result;
  };

  do {
    requestInput(result);
    produceResult(input.num1, input.num2, input.operand);

    another = config[language].anotherInput();
  } while (another.match(/y/));
};

calculator();
