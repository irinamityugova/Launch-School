// Rewriting OO RPS with Constructors and Classes

/*
Write a constructor function for each factory function.
Move the initialization code from the factory function into the constructor.
Move all the other methods from the factory function into the constructor's prototype.
Replace the factory function invocations with constructor calls.
*/

import readline from 'readline-sync';

function CreatePlayer() {
    this.move = null;
}

function CreateComputer() {
  Object.setPrototypeOf(this, CreatePlayer);
  this.choose = function() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    };
}

function CreateHuman() {
  Object.setPrototypeOf(this, CreatePlayer);
  this.choose = function() {

    while (true) {
      console.log('Please choose rock, paper, or scissors:');
      this.choice = readline.question();
      if (['rock', 'paper', 'scissors'].includes(this.choice)) break;
      console.log('Sorry, invalid choice.');
    }

    this.move = this.choice;
  };
}

const RPSGame = {
  human: new CreateHuman(),
  computer: new CreateComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();