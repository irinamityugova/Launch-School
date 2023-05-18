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

const Player = {
  init(marker) {
    this.marker = marker;
    return this;
  },

  getMarker() {
    return this.marker;
  },
};

const Human = {
  init() {
    Object.setPrototypeOf(this, Player.init(Square.HUMAN_MARKER));
    return this;
  },

  move() {
    let choice;

    while (true) {
      choice = rlSync.question();

      if (game.board.unusedSquares().includes(choice)) {
        break;
      }

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    game.board.markSquareAt(choice, Square.HUMAN_MARKER);
  },
};

const Computer = {
  init() {
    Object.setPrototypeOf(this, Player.init(Square.COMPUTER_MARKER));
    return this;
  },

  move() {
    let answers = game.board.unusedSquares();
    const i = Math.floor(Math.random() * answers.length);
    let move = answers[Number(i)];
    game.board.markSquareAt(move, Square.COMPUTER_MARKER);
  }
};

Computer.prototype = Object.create(Player.init());
Computer.constructor = Computer;

const TTTGame = {
  init() {
    this.board = Object.create(Board.init());
    this.human = Object.create(Human.init());
    this.computer = Object.create(Computer.init());
    return this;
  },

  POSSIBLE_WINNING_ROWS: [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ],

  play() {
    while(true) {
        this.displayWelcomeMessage()
        this.board.display('guide');
      while (true) {
        this.human.move();
        this.board.displayWithClear();
        if (this.gameOver()) break;

        this.computer.move();
        this.board.displayWithClear();
        if (this.gameOver()) break;
      }

      this.board.displayWithClear();
      this.displayResults();
      this.displayGoodbyeMessage();

      if(!this.repeatGame()) break;
    }
  },

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe!");
  },

  gameOver() {
    return this.boardIsFull() || this.someoneWon();
  },

  boardIsFull() {
    let unusedSquares = this.board.unusedSquares().length;
    return unusedSquares === 0;
  },

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  },

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  },

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  },

  repeatGame() {
    let input = rlSync.question('Repeat y/n\n');
    if (input.includes('y')) {
      this.board = new Board;
      return true;
    }
    return false;
  },
};

const game = Object.create(TTTGame.init());
game.play();