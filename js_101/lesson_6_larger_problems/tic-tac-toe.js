import rlSync from 'readline-sync';

/*
We want to build a single player Tic Tac Toe game where a user can play against the computer.

[P]roblem
  TicTacToe game
    Input: user input
    Output: game loop

  Rules
    The board is a 3x3 grid
    Player plays X and makes the first move
    Computer plays O

    Aligning 3 X or O in a line makes a winner
    Max moves is 9, full board without a line is a tie

[D]ata Structures
Nested Array
guide:
[
[7, 8, 9],
[4, 5, 6],
[1, 2, 3]
]
board:
[
[' ', ' ', ' '],
[' ', ' ', ' '],
[' ', ' ', ' ']
]

Components
  marks
    player = 'X'
    computer = 'O'
    turn = player;

  board
    moves = Array of available moves
    grid = Template literal

  guide
    grid = Template literal
    numbers = Array of 0-9

  input
    label = String
    input = String
    validInput = Boolean

  move
    turn = player || computer
    input || computerMove

  getWinner = String

[A]lgorithm
Start the game loop
  Set initial state of components

  Display the empty board.
  Start the moves loop
    If it's 'X' turn,
      Ask the user to mark a square.
    Else,
      Computer marks a square.
    Display the updated board state.

    Check if it's the end of the round
      If it's a winning board,
        Display the winner.
      If the board is full,
        Display tie.
      Else,
        Continue moves loop.
  End moves loop

  Play again?
    If yes, repeat the game loop.
  Goodbye!
End game loop
*/

// General

function displayMessage(message) {
  console.log(message);
}

// Reset

function resetBoard(moves) {
  moves.splice(0, 0, [], [], []);
  moves.forEach((row) => row.splice(0, 0, ' ', ' ', ' '));
  return moves;
}

function resetGuide(guide) {
  let rowIndex = 2;
  guide.splice(0, 0, [], [], []);
  for (let num = 1; num <= 9; num += 1) {
    guide[rowIndex].push(num);
    if (num % 3 === 0) rowIndex -= 1;
  }
  return guide;
}

function makeGrid(contents) {
  const vertical = '\n   |   |   \n';
  const horizontal = '\n---|---|---\n';
  const rows = contents.map((row) => ` ${row.join(' | ')} `);

  const grid = vertical + rows.join(horizontal) + vertical;
  return grid;
}

function displayGrid(contents) {
  displayMessage(makeGrid(contents));
}

// Get User Input

function getInput(label, validAnswers) {
  let input = '';
  while (!validAnswers.includes(input)) {
    input = rlSync.question(`${label} `);
    if (!Number.isNaN(Number(input))) input = Number(input);
    if (!validAnswers.includes(input)) {
      displayMessage('');
      displayMessage(`Try again. Valid answers are ${validAnswers.slice(0, validAnswers.length - 1).join(', ')} or ${validAnswers[validAnswers.length - 1]}.`);
    }
  }
  return input;
}

// Moves

function updateMoves(mark, move, moves, guide) {
  const row = 3 - Math.ceil(move / 3);
  const col = (move % 3) - 1;
  moves[row].splice(col, 1, mark);
  guide[row].splice(col, 1, ' ');
}

function makeMove(mark, board, guide, player) {
  const validAnswers = guide.flat().filter((e) => e !== ' ');
  let move = null;

  if (mark === player) {
    const label = '\nWhich square would you mark?\nYour choice: ';
    move = getInput(label, validAnswers);
  } else {
    const i = Math.floor(Math.random() * validAnswers.length);
    move = validAnswers[i];
    displayMessage(`Your opponent picks ${move} and marks it ${mark}.`);
  }

  updateMoves(mark, move, board, guide);
  displayGrid(board);
}

// End Game

function isFull(moves) {
  return moves.every((row) => row.every((mark) => mark !== ' '));
}

function isRow(moves, mark) {
  return moves.some((row) => row.every((move) => move === mark));
}

function isDiagonal(moves, mark) {
  const columns = moves[0].length - 1;
  const downDia = moves.every((row, i) => row[i] === mark);
  const upDia = moves.every((row, i) => row[columns - i] === mark);
  return downDia || upDia;
}

function isColumn(moves, mark) {
  const columns = moves[0].length - 1;
  let match = false;
  for (let i = 0; i < columns; i += 1) {
    if (moves.every((row) => row[i] === mark)) {
      match = true;
    }
  }
  return match;
}

function isWinner(moves, mark) {
  return isRow(moves, mark) || isColumn(moves, mark) || isDiagonal(moves, mark);
}

function isEnd(moves, mark) {
  if (isFull(moves)) return 'tie';
  if (isWinner(moves, mark)) return mark;
  return null;
}

// Game loop
function gameLoop() {
  let repeat = 'Y';
  const marks = ['X', 'O'];

  do {
    const moves = [];
    const guide = [];

    const [player, computer] = marks;

    let winner = null;
    let turn = player;

    resetGuide(guide);
    resetBoard(moves);

    do {
      displayGrid(guide);
      makeMove(turn, moves, guide, player);

      winner = isEnd(moves, turn);
      turn = turn === player ? computer : player;
    } while (!winner);
    if (winner === 'tie') {
      displayMessage('It\'s a tie!');
    } else {
      displayMessage(`${winner} won!`);
    }
    repeat = getInput('Play again? Y/N ', ['Y', 'N', 'n', 'y']);
  } while (repeat.match(/y/i));
}

gameLoop();
