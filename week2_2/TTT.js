"use strict";

//brings in the assert module for unit testing
const assert = require('assert');
//brings in the readline module to access the command line
const readline = require('readline');
//use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = "X";

// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML.
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {
  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`);

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id);
  }
};
const addMarker = (id) => {
  console.log(`*** The player turn is:  ${playerTurn}. ***`);
  console.log(
    `Therefore, a  "${playerTurn}"  should be placed in the square with the id:  ${id}`
  );

  document.getElementById(id).innerHTML = playerTurn;
  switchPlayer();
};

const switchPlayer = () => {
  if (playerTurn == "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
};

// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  const squares = document.getElementsByTagName("td");

  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (let i = 0; i < squares.length; i++) {
    // will log out the id of each square as it loops over them.
    console.log(squares[i].id);

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null;
  }
};

// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
};

const verticalWin = () => {
  // Your code here to check for vertical wins
  if (
    (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") ||
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  ) {
    return true;
  } else if (
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  ) {
    return true;
  } else if (
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") ||
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  ) {
    return true;
  }
};

const diagonalWin = () => {
  // Your code here to check for diagonal wins

  if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
    if (board[0][0] == "X" || board[0][0] == "O") {
      return true;
    }
  }
  return false;
};

const checkForWin = () => {
  // Your code here call each of the check for types of wins
  if (horizontalWin() === true) {
    console.log(playerTurn + " " + "wins");
    return true;
  } else if (verticalWin() === true) {
    console.log(playerTurn + " " + "wins");
    return true;
  } else if (diagonalWin() === true) {
    console.log(playerTurn + " " + "wins");
    return true;
  } else {
    return false;
  }
};

const ticTacToe = (row, column) => {
  // Your code here to place a marker on the board
  // then check for a win
  board[row][column] = playerTurn;
  checkForWin();
  switchPlayer();
};

const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question("row: ", (row) => {
    rl.question("column: ", (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
};

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C

if (typeof describe === "function") {
  describe("#ticTacToe()", () => {
    it("should place mark on the board", () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [" ", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "],
      ]);
    });
    it("should alternate between players", () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ["O", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "],
      ]);
    });
    it("should check for vertical wins", () => {
      board = [
        [" ", "X", " "],
        [" ", "X", " "],
        [" ", "X", " "],
      ];
      assert.equal(verticalWin(), true);
    });
    it("should check for horizontal wins", () => {
      board = [
        ["X", "X", "X"],
        [" ", " ", " "],
        [" ", " ", " "],
      ];
      assert.equal(horizontalWin(), true);
    });
    it("should check for diagonal wins", () => {
      board = [
        ["X", " ", " "],
        [" ", "X", " "],
        [" ", " ", "X"],
      ];
      assert.equal(diagonalWin(), true);
    });
    it("should detect a win", () => {
      ticTacToe(0, 0);
      ticTacToe(0, 1);
      ticTacToe(1, 1);
      ticTacToe(0, 2);
      ticTacToe(2, 2);
      assert.equal(checkForWin(), true);
    });
  });

} else {
  getPrompt();
}
