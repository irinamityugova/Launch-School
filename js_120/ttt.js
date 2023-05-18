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

function Board() {

  this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  Board.prototype.display = function (type = 'moves') {
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
  }

  Board.prototype.displayWithClear = function () {
    console.clear();
    this.display();
  }

  Board.prototype.markSquareAt = function (key, marker) {
    this.squares[key].setMarker(marker);
  }

  Board.prototype.unusedSquares = function () {
    let unusedSquares = Object.keys(this.squares).filter(key => {
      return this.squares[key].marker === ' ';
    });
    return unusedSquares;
  }

  Board.prototype.countMarkersFor = function (player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

function Square(marker = ' ') {
  this.marker = marker;
}

Square.HUMAN_MARKER = 'X'
Square.COMPUTER_MARKER = 'O'
Square.UNUSED_MARKER = ' '

  Square.prototype.toString = function () {
    return this.marker;
  }

  Square.prototype.setMarker = function (marker) {
    this.marker = marker;
  }

  Square.prototype.isUnused = function () {
    return this.marker === Square.UNUSED_SQUARE;
  }

  Square.prototype.getMarker = function () {
    return this.marker;
  }

function Player(marker) {
    this.marker = marker;
  }

  Player.prototype.getMarker = function () {
    return this.marker;
  }

function Human() {
  Player.call(this, Square.HUMAN_MARKER);
  }

Human.prototype = Object.create(Player.prototype);
Human.constructor = Human;

  Human.prototype.move = function () {
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
  }

function Computer() {
    Player.call(this, Square.COMPUTER_MARKER);
  }

  Computer.prototype = Object.create(Player.prototype);
  Computer.constructor = Computer;

  Computer.prototype.move = function () {
    let mark = Square.COMPUTER_MARKER;
    let answers = game.board.unusedSquares();
    const i = Math.floor(Math.random() * answers.length);
    let move = answers[Number(i)];
    game.board.markSquareAt(move, mark);
  }

function TTTGame() {}
TTTGame.POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];
    TTTGame.prototype.board = new Board;
    TTTGame.prototype.human = new Human;
    TTTGame.prototype.computer = new Computer;

  TTTGame.prototype.play = function () {
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
  }

  TTTGame.prototype.displayWelcomeMessage = function () {
    console.log("Welcome to Tic Tac Toe!");
  }

  TTTGame.prototype.displayGoodbyeMessage = function () {
    console.log("Thanks for playing Tic Tac Toe!");
  }

  TTTGame.prototype.gameOver = function () {
    return this.boardIsFull() || this.someoneWon();
  }

  TTTGame.prototype.boardIsFull = function () {
    let unusedSquares = this.board.unusedSquares().length;
    return unusedSquares === 0;
  }

  TTTGame.prototype.someoneWon = function () {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  TTTGame.prototype.isWinner = function (player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  TTTGame.prototype.displayResults = function () {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  }

  TTTGame.prototype.repeatGame = function () {
    let input = rlSync.question('Repeat y/n\n');
    if (input.includes('y')) {
      this.board = new Board;
      return true;
    }
    return false;
  }


const game = new TTTGame;
game.play();