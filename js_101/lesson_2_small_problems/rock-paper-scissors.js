/**
 * Rock Paper Scissors
 *
 * Both the opponents choose an item from rock, paper, and scissors.
 * The winner is decided according to the following rules:
 *
 * If player a chooses rock and player b chooses scissors, player a wins.
 * If player a chooses paper and player b chooses rock, player a wins.
 * If player a chooses scissors and player b chooses paper, player a wins.
 * If both players choose the same item, neither player wins. It's a tie.
 * Our version of the game lets the user play against the computer.
 * The game flow should go like this:
 *
 * The user makes a choice.
 * The computer makes a choice.
 * The winner is displayed.
 *
 * Bonus features WIP:
 * - Add Lizard Spock
 * - Pick a username or create new
 * - Main menu: new game, rules, leaderboard
 * - Perform an animation of hands for 3 seconds,
 * "Tsu, ye, fa! Scissors. Tsu, ye, fa..."
 * - Perform the logic of the game to loop until user
 * or computer have 2 wins in a row
 *   - Ask for user's choice
 *   - Show the computer's choice
 *   - Show the round score: win/loss, rounds won/lost/tie
 * - Save the game score: username, wins, losses, max rounds
 * - Show leaderboard
 * - Give a choice to play another game
 *
 * Pseudocode (basic):
 * - Start a new game
 *  - Ask for user's choice
 *  - Show the computer's choice
 * - Compute the result
 *   - If player a chooses rock and player b chooses scissors, player a wins.
 *   - If player a chooses paper and player b chooses rock, player a wins.
 *   - If player a chooses scissors and player b chooses paper, player a wins.
 *   - If both players choose the same item, neither player wins. It's a tie.
 * - Display choice
 * - Ask the user if he/she wants to play again
 *
 */

import rlSync from 'readline-sync';

const playRPS = function playRockPaperScissors() {
  console.log(`
|-------------------------------------------------|
|         Welcome to Rock Paper Scissors!         |
|-------------------------------------------------|
| Pick a choice and win your opponent.            |
| Rock beats scissors, scissors beat paper, and   |
| paper beats rock. Good luck!                    |
| Press Ctrl-C to exit the application.           |
|-------------------------------------------------|
  `);

  const validateInput = function validateInput(choiceArray, userChoice) {
    if (Number(userChoice) && +userChoice > 0 && +userChoice <= choiceArray.length) {
      console.log(`You picked "${choiceArray[userChoice - 1]}"`);
      return choiceArray[userChoice - 1];
    }
    if (choiceArray.includes(userChoice)) {
      console.log(`You picked ${userChoice}`);
      return userChoice;
    }
    console.log(`ERROR: ${userChoice} is invalid!
Pick a number or the word from the list.`);
    validateInput(choiceArray, rlSync.question('> ').toLowerCase());
    return null;
  };

  const getUserChoice = function getUserChoice(choiceArray, label) {
    console.log(`${label} ${choiceArray.map((e, i) => `\n${i + 1} - ${e}`)}`);
    const userChoice = rlSync.question('> ').toLowerCase();
    return validateInput(choiceArray, userChoice);
  };

  const getBotChoice = function getBotChoice(choiceArray) {
    const randomIndex = parseInt((Math.random() * (choiceArray.length)), 10);
    const botChoice = choiceArray[randomIndex];
    console.log(`Opponent picked "${botChoice}".`);
    return botChoice;
  };

  const displayWinner = function displayWinner(userMove, botMove) {
    switch (userMove) {
      case botMove:
        console.log(`Whoops, ${userMove}s knokced each other out!`);
        break;

      case 'rock':
        if (botMove === 'scissors'
          || botMove === 'lizard') {
          console.log(`Your ${userMove} crushed the ${botMove}. Congrats!`);
        } else if (botMove === 'spok') {
          console.log(`Oh no, ${botMove} vaporizes your ${userMove}`);
        } else if (botMove === 'paper') {
          console.log(`Oh no, ${botMove} covers your ${userMove}`);
        } break;

      case 'paper':
        if (botMove === 'rock') {
          console.log(`Your ${userMove} covers the ${botMove}. Congrats!`);
        } else if (botMove === 'spock') {
          console.log(`Yes! Invincible ${userMove} disproves ${botMove}. Congrats!`);
        } else if (botMove === 'lizard') {
          console.log(`Oh no, ${botMove} eats your ${userMove}...`);
        } else if (botMove === 'scissors') {
          console.log(`Oh no, ${botMove} cuts your ${userMove}...`);
        } break;

      case 'scissors':
        if (botMove === 'paper') {
          console.log(`Your ${userMove} cuts the ${botMove}. Congrats!`);
        } else if (botMove === 'lizard') {
          console.log(`Your ${userMove} decapitates the ${botMove}. Congrats!`);
        } else if (botMove === 'spock') {
          console.log(`Oh no, ${botMove} smashes your ${userMove}...`);
        } else if (botMove === 'rock') {
          console.log(`Oh no, ${botMove} crushes your ${userMove}...`);
        } break;

      case 'spock':
        if (botMove === 'rock') {
          console.log(`Nice job, ${userMove} vaporizes the ${botMove}!`);
        } else if (botMove === 'scissors') {
          console.log(`Yep, ${userMove} smashes the ${botMove}!`);
        } else if (botMove === 'lizard') {
          console.log(`Oh no, ${botMove} poisons ${userMove}...`);
        } else if (botMove === 'paper') {
          console.log(`Oh no, ${botMove} disproves ${userMove}...`);
        } break;

      case 'lizard':
        if (botMove === 'paper') {
          console.log(`Your ${userMove} covers the ${botMove}. Congrats!`);
        } else if (botMove === 'spock') {
          console.log(`Your ${userMove} covers the ${botMove}. Congrats!`);
        } else if (botMove === 'scissors') {
          console.log(`Oh no, ${botMove} decapitates ${userMove}...`);
        } else if (botMove === 'rock') {
          console.log(`Oh no, ${botMove} crushes ${userMove}...`);
        } break;

      default:
        console.log(`ERROR: Couldn't compute
        userMove = ${userMove}, botMove = ${botMove}`);
    }
    return null;
  };

  const gameLoop = function gameLoop() {
    const moves = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    while (true) {
      const userMove = getUserChoice(moves, 'Make your move:');
      const botMove = getBotChoice(moves);
      displayWinner(userMove, botMove);

      const playAgain = getUserChoice(['yes', 'no'], 'Play again?');
      if (playAgain === 'no') {
        console.log('Goodbye!');
        return;
      }
    }
  };
  gameLoop();
};

playRPS();
