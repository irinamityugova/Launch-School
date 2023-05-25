/*
Tic Tac Toe

OO Process
Write a textual description of the problem or exercise.
Extract the significant nouns and verbs from the description.
Organize and associate the verbs with the nouns.

Nouns
Game - Play again loop

Board
- Squares
- Guide
- Grid
- display (v)
- update (v)

Player
- Human
- Computer
- mark (n)
- move (v)
- win (v)

Display the guide
Human makes a move
Computer makes a move
Update the board

AI Offence
-  If any square is a potential winner
    -   Pick that square.
-   Else if any square is at risk, pick that square.
    -   Pick that square.
-   Else:
    -   Pick a random square.
*/
import rlSync from 'readline-sync';

 const Board = {
  init() {
    this.squares = {};
      for (let counter = 1; counter <= 9; ++counter) {
        this.squares[String(counter)] = Object.create(Square.init());
      }
    return this;
  },

  display(type = 'moves') {
    let board = [];
    for (let i = 7; i >= 1; i -= 3) {
      let row = [];
      for(let j = i; j < i + 3; j++) {
        if (type === 'moves') {
          row.push(this.squares[j].marker);
        } else {
          row.push(j);
        }
      }
      board.push(' ' + row.join(' | ') + ' ');
    }
    console.log(board.join('\n---+---+---\n'));
  },

  displayWithClear() {
    console.clear();
    this.display();
  },

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  },

  unusedSquares() {
    let unusedSquares = Object.keys(this.squares).filter(key => {
      return this.squares[key].marker === ' ';
    });
    return unusedSquares;
  },

  isUnusedSquare(key) {
    return this.unusedSquares().includes(key);
  },

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  },
};

const Square = {
  HUMAN_MARKER: 'X',
  COMPUTER_MARKER: 'O',
  UNUSED_MARKER: ' ',

  init(marker = ' ') {
    this.marker = marker;
    return this;
  },

  toString() {
    return this.marker;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  },

  getMarker() {
    return this.marker;
  },
};

const PlayerPrototype = {
  initialize(marker) {
    this.marker = marker;
    this.score = 0;
    return this;
  },

  getMarker() {
    return this.marker;
  },

  addScore() {
    this.score += 1;
  },

  getScore() {
    return this.score;
  },
};

let Human = Object.create(PlayerPrototype);

Human.init = function init() {
  return this.initialize(Square.HUMAN_MARKER);
};

Human.move = function move() {
    let choice;

    while (true) {
      choice = rlSync.question();

      if (game.board.unusedSquares().includes(choice)) {
        break;
      }

      console.log('Sorry, that\'s not a valid choice.');
      console.log('Try again:');
    }

    game.board.markSquareAt(choice, Square.HUMAN_MARKER);
};

const Computer = Object.create(PlayerPrototype);

Computer.init = function init() {
  return this.initialize(Square.COMPUTER_MARKER);
};

const TTTGame = {
  init() {
    this.board = Object.create(Board).init();
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();

    return this;
  },

  POSSIBLE_WINNING_ROWS: [
    ['1', '2', '3'], // top row of board
    ['4', '5', '6'], // center row of board
    ['7', '8', '9'], // bottom row of board
    ['1', '4', '7'], // left column of board
    ['2', '5', '8'], // middle column of board
    ['3', '6', '9'], // right column of board
    ['1', '5', '9'], // diagonal: top-left to bottom-right
    ['3', '5', '7'], // diagonal: bottom-left to top-right
  ],

  play() {
    while (true) {
      this.displayWelcomeMessage();
      this.board.display('guide');

      while (true) {
        this.human.move();
        this.board.displayWithClear();
        if (this.gameOver()) break;

        this.computerMove();
        this.board.displayWithClear();
        if (this.gameOver()) break;
      }

      this.board.displayWithClear();
      this.displayResults();
      this.displayGoodbyeMessage();

      if (!this.repeatGame()) break;
    }
  },

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe!');
  },

  gameOver() {
    return this.boardIsFull() || this.someoneWon();
  },

  boardIsFull() {
    const unusedSquares = this.board.unusedSquares().length;
    return unusedSquares === 0;
  },

  someoneWon() {
    if (this.isWinner(this.human)) {
      this.human.addScore();
      return true;
    }
    if (this.isWinner(this.computer)) {
      this.computer.addScore();
      return true;
    }
    return null;
  },

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(
      (row) => {
        const count = this.board.countMarkersFor(player, row);
        return count === 3;
      },
    );
  },

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log('You won! Congratulations!');
    } else if (this.isWinner(this.computer)) {
      console.log('I won! I won! Take that, human!');
    } else {
      console.log('A tie game. How boring.');
    }
    console.log(`Score: ${this.human.score} (you) to ${this.computer.score} (me)`)
  },

  repeatGame() {
    const input = rlSync.question('Repeat y/n\n');

    if (input.includes('y')) {
      this.board = Object.create(Board.init());
      return true;
    }

    return false;
  },

  computerMove() {
    const choice = this.bestMoveFor('computer') || this.bestMoveFor('human') || this.centerMove() || this.randomMove();

    this.board.markSquareAt(choice, Square.COMPUTER_MARKER);
  },

  randomMove() {
    const unusedSquares = this.board.unusedSquares();
    const random = Math.floor(Math.random(unusedSquares) * unusedSquares.length);
    const choice = unusedSquares[random];

    return choice;
  },

  bestMoveFor(player) {
    for (let index = 0; index < TTTGame.POSSIBLE_WINNING_ROWS.length; index += 1) {
      const row = TTTGame.POSSIBLE_WINNING_ROWS[index];
      const key = this.bestSquare(row, player);

      if (key) return key;
    }

    return null;
  },

  centerMove() {
    if (this.board.isUnusedSquare('5')) return '5';
    return null;
  },

  bestSquare(row, player) {
    if (this.board.countMarkersFor(this[player], row) === 2) {
      const index = row.findIndex((key) => this.board.isUnusedSquare(key));
      if (index >= 0) {
        return row[index];
      }
    }
    return null;
  },
};

const game = Object.create(TTTGame).init();
game.play();
