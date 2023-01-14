/**
 * Assignment: Mortgage / Car Loan Calculator
 * You'll need three pieces of information:
 * - loanAmount: the loan amount
 * - apr: the Annual Percentage Rate (APR)
 * - months: the loan duration
 *
 * From the above, you'll need to calculate the following two things:
 * - monthly interest rate
 * - loan duration in months
 *
 * Pseudocode:
 * Get the input from the user: loanAmount, apr, loanDurraltion in months
 * Calculate the monthly payment
 * Output monthly payment and months
 *
 */

import rlSync from 'readline-sync';

const app = function calculateLoan() {
  const getUserInput = function getUserInput() {
    return {
      loanAmount: rlSync.questionFloat('Loan Amount: $'),
      apr: rlSync.questionFloat('Annual Percentage Rate (APR): ') / 100,
      loanDurraltion: rlSync.questionInt('Loan Durration in months: '),
    };
  };

  const calculateMonthlyPayment = function calculateMonthlyPayment(loanAmount, apr, loanDurration) {
    const monthlyInterestRate = apr / 12;
    const monthlyPayment = loanAmount * (monthlyInterestRate / (1 - ((1 + monthlyInterestRate) ** (-loanDurration))));

    console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}
    for ${loanDurration} months
    to pay off the total of $${(monthlyPayment * loanDurration).toFixed(2)}`);
  };

  const input = getUserInput();
  calculateMonthlyPayment(input.loanAmount, input.apr, input.loanDurraltion);
};

app();
