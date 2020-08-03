// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
//should return "its a tie" if hnd1 and hand2 tie
//should return "hand one wins!" if hand1 wins
//should return "hand two wins!" if hand2 wins
// const hand2 = Math.random();
//   if (hand2 < 0.34 && hand2 > 0) {
//     hand2 === "rock";
//   } else if(hand2 <= 0.67 && hand2 >.34) {
//     hand2 === "paper";
//   } else {
//     hand2 === "scissors";
//   }
// console.log(hand2)
const rockPaperScissors = (hand1, hand2) => {
  hand1 = hand1.toLowerCase().trim()
  hand2 = hand2.toLowerCase().trim()

  console.log(hand1)
  console.log(hand2)
  // Write code here
  // Use the unit test to see what is expected
  if (hand1 === hand2){
    return "It's a tie!";
  }

  if (hand1 === "rock"){
    if (hand2 === "scissors"){
      return "Hand one wins!";
    } else if (hand2 === "paper") {
      return "Hand two wins!";
  }
}

if (hand1 === "paper"){
  if (hand2 === "rock"){
    return "Hand one wins!";
  } else if (hand2 === "scissors") {
    return "Hand two wins!";
  }
}

if (hand1 === "scissors"){
  if (hand2 === "paper"){
      return "Hand one wins!";  
  } else if (hand2 === "rock") {
      return "Hand two wins!";
    }
  }

}




// how i would run the program to make computer choose a iput worked on it with Jacob
// const rockPaperScissors = (hand1, hand2) => {
// /* step1: Use build-in function - prompt() to return user's choice and store it in the variable - userChoice. */
// console.log(hand1)
// /* step2: in case user's input has different cases, to be more specific, uses .toLowerCase() convert all return values into lower cases. */
// 
// hand1 = hand1.toLowerCase().trim()
// /* step6: log the result on the console */
// console.log(`Your choice is ${hand1}, the computer's choice is ${hand2}.`);
// /* final step: Compare each choice with if/else statement, then print the result on the console */
//   if (hand1 === hand2){
//     console.log("Tie!");
//   }else if (hand1 === 'paper' && hand2 === 'rock'){
//     console.log("You win!");
//   }else if (hand1 === 'rock' && hand2 === 'scissors'){
//     console.log("You win!");
//   }else if (hand1 === 'scissors' && hand2 === 'rock'){
//     console.log("You lose!");
//   }else if (hand1 === 'rock' && hand2 === 'paper'){
//     console.log("You lose!");
//   }else if (hand1 === 'paper' && hand2 === 'scissors'){
//     console.log("You lose!");
//   }else if (hand1 === 'scissors' || hand2 === 'paper'){
//     console.log("You win!");
//   }else{
//     console.log("Invalid input, please try again");
//   }
//   console.log(hand1)
// }





//this is how i would run the program if i wanted the computer to make a choice
// function getPrompt() {
//   rl.question('hand1: ', (hand1) => {
     // /* step3: building an array, declared as choiceStack to let computer choose from */
    // let choiceStack = ['paper', 'rock', 'scissors'];
    // /* step4: make use of two JS build-in functions - Math.random()(to generate random number between 0-1), multiply it by 3, because we have 3 choices in our choiceStack array; and pass it into Math.floor()(to return the largest integer less than or equal to a given number) */
    // let randomNum = Math.floor(Math.random() * 3);
    // /* step5: pass the generated number as an index to choiceStack, to get the element in the array and store it in another variable - computerChoice */
    // let hand2 = choiceStack[randomNum];
//       console.log( rockPaperScissors(hand1, hand2) );
//       getPrompt();
//   });
// }

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}




