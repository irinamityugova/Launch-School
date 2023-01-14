/**
 * Create a calculator
 *
 * Pseudocode:
 * Ask the user for a number
 * Ask the user for the operand
 * Ask the user for the second number
 * Conduct the operation
 * Return the result
 * Ask the user to continue with another operation
 * Ask the use if he/she wants to continue using result for the next operation
 * Escape the application with Ctrl-C
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
  config[language].printWelcomeMessage();

  let useResult;
  let result;
  let num1;
  const chooseUseResult = function chooseUseResult() {
    do {
        useResult = config[language].chooseUseResult();
      } while (!useResult.match(/[yn]/));

    switch (useResult) {
      case 'y':
        num1 = result;
        break;
      case 'n':
        result = 0;
        num1 = config[language].getNum();
        break;
      default: config[language].printDefaultError();
    }
  };

  const getNum1 = function getNum1() {
    if (result) {
      chooseUseResult();
    } else {
      num1 = config[language].getNum();
    }
  };

  let operand;
  let num2;
  const getOperand = function getOperand() {
    do {
      operand = config[language].getOperator();
      if (!operand.match(/[+\-*/%^]/)) {
        config[language].printInputError(operand);
      }
    } while (!operand.match(/[+\-*/%^]/));
  };

  let input;
  const requestInput = function requestInput() {
    getNum1();
    getOperand();

    num2 = config[language].getNum();

    input = {
      num1,
      num2,
      operand,
    };
  };

  const produceResult = function produceResultOfAnoperand(a, b, oprnd) {
    switch (oprnd) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = a / b; break;
      case '%': result = a % b; break;
      case '^': result = a ** b; break;
      default: config[language].printDefaultError()
    }
    config[language].printResult(result);
    return result;
  };

  let another;
  do {
    requestInput(result);
    produceResult(input.num1, input.num2, input.operand);

    another = config[language].anotherInput();
  } while (another.match(/y/));
};

calculator();
