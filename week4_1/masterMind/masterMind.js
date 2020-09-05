"use strict";

const assert = require("assert");
const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


//Things we're looking for:
    //  - Create the board
    const board =[]
        
    let code = ''
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


    const printBoard = () => {
        for (let index = 0; index < board.length; index++) {
            const element = board[index];
            console.log(`guess number ${i+1} ***** ${element}`)
        }
    }


    //  - func for generator of Array for answer code
    const codeGen = (min, max) => {
      //code.push(Math.floor(Math.random() * Math.floor(max)));
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const solution = () => {
        for (let index = 0; index < 4; index++) {
            const random = codeGen(0, letters.length);
            solutionP += letters[random]
        }
    }
    
    console.log('this is code after codeGen: ', code)

    //  - Obj/ array for possible solutions
    //  - Func compares user input to answer code
    const hint = () => {
      let correctLetters = 0;
      let correctLettersLocation = 0;

      let codeArray = code.split('');
      let guessArray = guess.split('');

      guessArray.forEach((item, index) => {
          if(item === code[index]){
            correctLettersLocation += 1;
            codeArray[index] = null
            guessArray[index] = null
          } 
      });
     guessArray.forEach((item, index) => {
          if(item === null){
            
            let findIndex = codeArray.indexOf(item);
            if(findIndex > -1){
                correctLetters += 1;
                codeArray[findIndex] = null
                guessArray[index] = null
            }
          }
      }); 
      
      console.log(correctLettersLocation, correctLetters);
      return `${correctLetterLocations}-${correctLetters}`
      
    };

    
    

    //  - Func that doesnt allow invalid input


    //  - func that takes the inputs
       

    //  - Final func to run game
    const masterMind =(pos1, pos2, pos3, pos4) => {
        
        boardPieces(pos1, pos2, pos3, pos4);


        rWeDoneYet();
    }

    // - Func allows user to input positions on board
    const getPrompt = () => {
        console.log('The code you are trying to guess 1 ', code)
        printBoard();
        rl.question("guess 1: ", (pos1) => {
            rl.question("guess 2: ", (pos2) => {
                rl.question("guess 3: ", (pos3) => {
                    rl.question("guess 4: ", (pos4) => {
                        masterMind(pos1, pos2, pos3, pos4);
                        console.log('The code you are trying to guess 2 ', code)
                        getPrompt();
                    });
                });
            });
        });
    };


    getPrompt();


    // if (typeof describe === "function") {
    //     solution = "abcd";
    //     describe("#mastermind()", () => {
    //       it("should register a guess and generate hints", () => {
    //         mastermind("aabb");
    //         assert.equal(board.length, 1);
    //       });
    //       it("should be able to detect a win", () => {
    //         assert.equal(mastermind(solution), "You guessed it!");
    //       });
    //     });
      
    //     describe("#generateHint()", () => {
    //       it("should generate hints", () => {
    //         assert.equal(generateHint("abdc"), "2-2");
    //       });
    //       it("should generate hints if solution has duplicates", () => {
    //         assert.equal(generateHint("aabb"), "1-1");
    //       });
    //     });
    //   } else {
    //     generateSolution();
    //     getPrompt();
    //   }
      