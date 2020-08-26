"use strict";

const assert = require("assert");
const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// An object that represents the three stacks of Towers of Hanoi;
// * each key is an array of Numbers:
// * A is the far-left,
// * B is the middle,
// * C is the far-right stack
// * Each number represents the largest to smallest tokens:
// * 4 is the largest,
// * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

// let A = "a";
// let B = "b";
// let C = "c";

// Next, what do you think this function should do?
// take user inputs for startStack
//moves it with .pop

// then .push it to the user input for endStack
const movePiece = (startStack, endStack) => {
  let A1 = stacks[startStack].pop(); // will this work instead of how I wrote the rest?
  stacks[endStack].push(A1); // this as well
  //let A1 = stacks[A].pop()     this is how i originally wrote it.
  //return stacks[B].push(A1)
};

// Before you move, should you check if the move it actually allowed?
//Should 3 be able to be stacked on 2
//make sure that the element for startStack.pop
// checks to see if the object that endStack.push is trying to
//move to doesnt have a smaller value at the end of the array.
const isLegal = (startStack, endStack) => {
  // Your code here
  // if (stacks[startStack].pop() > stacks[endStack].push(stacks[startStack].pop())){ //does this work or do i HAVE to set stacks[endStack].push(stacks[startStack].pop())
  //   // to a variable?
  //   return false;
  // } else {
  //   return true;
  // }
  //thisset a variable that takes the length of the key:value for the key the user puts as startStacks and then subtracts that length by 1
  let el1 = stacks[startStack];
  // and then we have another variable that equals the whole key:value of endStack for user input
  let el2 = stacks[endStack];

  //then check if el1 is greater than 0, basically not take away from a empty key
  // and also check if the length of el2(the endStack) is equal to 0
  if ([el1.length - 1] > 0 && el2.length == 0) {
    return true;
  } else if (el1 < el2) {  //then see if el1 is smaller than el2
    return true;
  } else {
    return false;         
  }
};

// What is a win in Towers of Hanoi? When should this function run?
//see if object a is equal to objects b or c but note that you
//have to check if the contents of the array or object are the
// same not the array names or obects themselves "(a[0] == b[0])"
//not (a == b)
const checkForWin = () => {
  // Your code here
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log("You win!")
    return true;
  } else {
    return false;
  }
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  checkForWin();
  if (isLegal(startStack, endStack) === true) {
    movePiece(startStack, endStack);
  } else {
    console.log("Not a legal move.");
  }
};

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: [],
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
