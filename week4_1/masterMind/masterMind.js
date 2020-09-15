"use strict";

const assert = require("assert");
const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const board = [];

let solution= "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

const printBoard = () => {
  for (let index = 0; index < board.length; index++) {
    const element = board[index];
    console.log(`guess number ${index + 1} ***** ${element}`);
  }
};

const generateSolution = () => {
  for (let index = 0; index < 4; index++) {
    const random = getRandomInt(0, letters.length);
    solution += letters[random];
  }
};






const generateHint = (guess) => {
  let correctLetters = 0;
  let correctLettersLocation = 0;

  let solutionArray = solution.split("");
  //let guessArray = guess.split("");

  guess.forEach((item, index) => {
    if (item === code[index]) {
      correctLettersLocation += 1;
      solutionArray[index] = null;
      guess = null;
    }
  });
  guess.forEach((item, index) => {
    if (item === null) {
      let findIndex = solutionArray.indexOf(item);
      if (findIndex > -1) {
        correctLetters += 1;
        solutionArray[findIndex] = null;
        guess[index] = null;
      }
    }
  });

  console.log(correctLettersLocation, correctLetters);
  return `${correctLetterLocations}-${correctLetters}`;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const mastermind = (guess) => {
 // solution = "abcd"; // Comment this out to generate a random solution
  // your code here
  for (let index = 0; index < board.length; index++) {
    board[index].push(guess)
    
  }
  generateSolution();
  generateHint();
  
}

function getPrompt() {
  rl.question("guess: ", (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  solution = "abcd";
  describe("#mastermind()", () => {
    it("should register a guess and generate hints", () => {
      mastermind("aabb");
      assert.equal(board.length, 1);
    });
    it("should be able to detect a win", () => {
      assert.equal(mastermind(solution), "You guessed it!");
    });
  });

  describe("#generateHint()", () => {
    it("should generate hints", () => {
      assert.equal(generateHint("abdc"), "2-2");
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"), "1-1");
    });
  });
} else {
  generateSolution();
  getPrompt();
}
