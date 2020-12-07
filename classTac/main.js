var content = document.getElementById("content");

var ticTacToe = "Replace this with your own abstraction of Tic Tac Toe";
var board = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];

let playerTurn = "X";

const promptUser = () => {
  var row = prompt("enter row");
  var column = prompt("enter column");
  parseInt(row);
  parseInt(column);
  if (board[row][column] != "-") {
    alert("Space already taken");
  } else {
    if (playerTurn === "X") {
      board[row][column] = "x";
      playerTurn = "O";
      console.log(board);
    } else {
      board[row][column] = "O";
      playerTurn = "X";
      console.log(board);
    }
  }
};

const checkGame = (value) => {
  leftHorizontal = board[0][0] && board[0][1] && board[0][2] === value;
  middleHorizontal = board[1][0] && board[1][1] && board[1][2] === value;
  rightHorizontal = board[2][0] && board[2][1] && board[2][2] === value;

  leftVertical = board[0][0] && board[1][0] && board[2][0] === value;
  middleVertical = board[0][1] && board[1][1] && board[2][1] === value;
  rightVertical = board[0][2] && board[1][2] && board[2][2] === value;

  leftDiagonal = board[0][0] && board[1][1] && board[2][2] === value;
  rightDiagonal = board[0][2] && board[1][1] && board[2][0] === value;

  if (
    leftHorizontal ||
    rightHorizontal ||
    middleHorizontal ||
    leftVertical ||
    middleVertical ||
    rightVertical ||
    leftDiagonal ||
    rightDiagonal
  ) {
    return true;
  }
};

function playGame() {
  while (!checkGame()) {
    promptUser();
    checkGame("X");
    checkGame("O");
  }
}

playGame();

content.innerHTML = renderGame(ticTacToe);

function renderGame(game) {
  // Change this render function to use the "game" parameter

  return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player O's turn!</h4>
            <div class="w-50 text-center">
                <button>X</button>
                <button>O</button>
                <button>X</button>
            </div>
            <div class="w-50 text-center">
                <button>-</button>
                <button>-</button>
                <button>-</button>
            </div>
            <div class="w-50 text-center">
                <button>O</button>
                <button>-</button>
                <button>X</button>
            </div>
        </div>
    `;
}
