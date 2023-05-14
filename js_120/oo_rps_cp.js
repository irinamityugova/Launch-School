// Rewriting OO RPS with Constructors and Classes

/*
Write a class with the same name as the original constructor function.
Move the constructor function into the class and rename it as constructor.
Move all the prototype functions into the class.
*/

import readline from 'readline-sync';

class Player {
    constructor() {
      this.move = null;
    }
}

class Computer extends Player {
  constructor() {
    super();
  }

  choose() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    this.move = choices[randomIndex];
  }
}

class Human extends Player {
  constructor() {
    super();
  }

  choose() {
    while (true) {
      console.log('Please choose rock, paper, or scissors:');
      this.choice = readline.question();
      if (['rock', 'paper', 'scissors'].includes(this.choice)) break;
      console.log('Sorry, invalid choice.');
    }

    this.move = this.choice;
  }
}

class RPSGame {
  constructor() {
    this.human = new Human();
    this.computer = new Computer();
  }
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  }

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

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
  }

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  }

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }
}

const game = new RPSGame;
game.play();