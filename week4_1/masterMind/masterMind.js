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


// intention is to generate a random solution to compare to our board as we insert guesses.
//in the for loop we set letters index to be less than 4 so our solution should only be 4 positions long
//then create a var that uses the function getRandomInt to set random letters for the length of letters array
//then add them to solution
const generateSolution = () => {
  for (let index = 0; index < 4; index++) {
    const random = getRandomInt(0, letters.length);
    solution += letters[random];
  }
};



//Here our intentions are to generate a hint to help the user find the solution.
const generateHint = (guess) => {

  //first create var for our corrects letters that arent in the right position
  let correctLetters = 0;
  //then a var for the letters that are both correct position and the right letter.
  let correctLettersLocation = 0;

  //make solutions and guess into an array so we can loop through them
  let solutionArray = solution.split("");
  let guessArray = guess.split("");

  //going through the guess array for each item then check if the items are the same as solutionArray index if so let the user know
  //by adding 1 to the correct letters location var for each one that is in the correct area.
  //then set the solution array and guess array index to null so we dont look at them again
  guessArray.forEach((item, index) => {
    if (item === solutionArray[index]) {
      correctLettersLocation += 1;
      solutionArray[index] = null;
      guessArray[index] = null;
    }
  });

  //after that we need to see if the items are correct but in the wrong position 
  guessArray.forEach((item, index) => {
    if (item === null) {
      let findIndex = solutionArray.indexOf(item);
      if (findIndex > -1) {
        correctLetters += 1;
        solutionArray[findIndex] = null;
        guessArray[index] = null;
      }
    }
  });

  console.log(correctLettersLocation, correctLetters);
  return `${correctLettersLocation}-${correctLetters}`;
};

// this is the function to help generate our random soltion
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}



const mastermind = (guess) => {
 // solution = "abcd"; // Comment this out to generate a random solution
  // your code here
  //console.log("this is the solution: ", solution)

  //first push your guess into the board
  board.push(guess)
  //set a var for the generate hint function so we can return it on line 98
  let hint = generateHint(guess);


  //if our solution is the same as the guess we win and it will return that
  //but if not first it checks to make sure we havent run out of turns to see if the board has less that 10 entries ("turns")
  // if so retrun a hint for the next turn
  //but if the board had reached 10 turns console log you ran out of guesses and end the game
  if (solution == guess){
    console.log("You Guessed it!")
    return  "You guessed it!"
  } else if(board.length < 10){
    console.log(board)
    return hint
  } else if(board.length >= 10){
    console.log("You ran out of guesses")
    return false
  }
  
  
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
