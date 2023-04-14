/* Rock Paper Scissors */

/*
Object Oriented Refactoring

1. Write a textual description of the problem or exercise.
A player plays Rock Paper Scissors Lizard Spok against the computer.

Rules of the game:
"Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
(and as it always has) Rock crushes Scissors"

The result of the round gets displayed.

2. Extract the significant nouns and verbs from the description.
Nouns: Guide, Leaderboard, Round, Turn, Person, Computer, Moves: Rock (r) Paper (p) Scissors (s) Lizard (l) Spok (sp)
Verbs: switchTurn, makeMove, getWinner, display

3. Organize and associate the verbs with the nouns.
RPSGame {

  moves,
  round,
  humanMove();
  computerMove();

  guide,
  leaderboard,
  display(),

  winner: user/computer/tie
  getWinner(),

}

*/

/** Both the opponents choose an item from rock, paper, and scissors.
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

function createPlayer(moves, playerType = 'bot', name = 'computer') {
  const player = {
    playerType,
    name,
    moves,
    move: null,

    choose() {
      const choices = Object.keys(this.moves);

      if (this.isHuman()) {
        console.log(`Pick your move:${choices.map((choice, index) => `\n${index + 1} - ${choice}`)}`);
        let index = -1;

        while (index >= choices.length || index < 0 || isNaN(Number(index))) {
          index = rlSync.question('> ') - 1;
        }

        const shortcut = choices[index];
        this.move = moves[shortcut];

        console.log(`You picked "${this.move.name}"`);
      } else {
        const index = parseInt((Math.random() * (choices.length)), 10);
        const shortcut = choices[index];
        this.move = moves[shortcut];

        console.log(`Opponent picked "${this.move.name}".`);
      }
    },

    isHuman() {
      return this.playerType === 'human';
    },
  };
  return player;
}

const round = {
    time: Date.now(),
    winner: null,
    repeat: true,
    moves: {
    'r': {
      wins: {
        'lizard': 'smashes',
        'scissors': 'crushes'
      },
      name: 'rock',
    },
    'p': {
      wins: {
        'rock': 'covers',
        'spock': 'disproves'
      },
      name: 'paper',
    },
    's': {
      wins: {
        'paper': 'cuts',
        'lizard': 'decapitates'
      },
      name: 'scissors',
    },
    'sp': {
      wins: {
        'rock': 'vaporizes',
        'scissors': 'smashes'
      },
      name: 'spock',
    },
    'l': {
      wins: {
        'paper': 'eats',
        'spock': 'poisons'
      },
      name: 'lizard',
    },
  },
};

const playRPS = {
    guide: `
|-------------------------------------------------|
|         Welcome to Rock Paper Scissors!         |
|-------------------------------------------------|
| Scissors cuts Paper                             |
| Paper covers Rock                               |
| Rock crushes Lizard                             |
| Lizard poisons Spock                            |
| Spock smashes Scissors                          |
| Scissors decapitates Lizard                     |
| Lizard eats Paper                               |
| Paper disproves Spock                           |
| Spock vaporizes Rock                            |
| (and as it always has) Rock crushes Scissors    |
|                                                 |
| Press Ctrl-C to exit the application.           |
|-------------------------------------------------|
  `,

  history: [
      {
        winner: 'test',
        time: 'testTime',
        move: 'move',
      },
    ],

  human: createPlayer(round.moves, 'human', 'Irina'),
  bot: createPlayer(round.moves),

  displayWinner() {
    let humanMove = this.human.move.name;
    let botMove = this.bot.move.name;
    let humanWinMoves = this.human.move.wins;
    let botWinMoves = this.bot.move.wins;

    if(humanWinMoves.hasOwnProperty(botMove)) {
      console.log(`You won! Your ${humanMove} ${humanWinMoves[botMove]} ${this.bot.name}'s ${botMove}`);
      this['history'].push({
        winner: this.human.name,
        time: Date.now(),
        move: humanMove
      });
    } else if(humanMove === botMove) {
      console.log(`Whoops, ${humanMove}s knocked each other out!`);
      this['history'].push({
        winner: 'tie',
        time: Date.now(),
        move: humanMove
      });
    } else {
      console.log(`Oh no! The ${this.bot.name}'s ${botMove} ${botWinMoves[humanMove]} your ${humanMove}`);
      this['history'].push({
        winner: this.bot.name,
        time: Date.now(),
        move: botMove
      });
    }
  },

  play() {
    while (round.repeat) {
      console.log(this.guide);
      this.human.choose();
      this.bot.choose();
      this.displayWinner(this.human.move.name, this.bot.move.name);

      let playAgain = rlSync.question('Play again? yes/no\n> ');
      if (playAgain.toLowerCase().match(/n/i)) {
        round.repeat = false;
      }
      console.clear();
    }
    console.log('Goodbye!');
    return "Goodbye!";
  },
};

playRPS.play();
