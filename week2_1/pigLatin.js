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


const pigLatin = (word) => {
    
//   HINTS


//1.if a word starts with a vowel,
//the pig lating translation is 'add yay' to the end

//2. if the word doesnt not starrt with a vowel but has a vowel in the middle
//split the word into 2 parts
//part1:all the letters before the vowel
//part2:all the letters starting at the vowel
//then swap those 2 parts, and add 'ay' to the end
//create -> cr = eate -> eate + cr -> eate + cr + ay -> eatecray

//3.if the word does not have a vowel,
//add ay to the end
//this is just a special case of rule #2

//just showed that to check if a single letter is a vowel
//you can use 'aiou'.includes(letter)



// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: 
//splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, 
//sending them to different functions and creating a new array with the new words.
  // Your code here


    //makes sure any inputs are lowercase and trimmed of extra whitespace
    word = word.toLowerCase().trim()
    //searches a string for 'aeiou' and returns the matches
    //then gives the index if the first vowel
    let firstVowel = word.match(/[aeiou]/);
    let firstPosition = word.indexOf(firstVowel);
    //if the position of the vowel is
    //greater than the index 0 then it returns the extracted part of
    //the word after the index of the first vowel it comes across,
    //then concats the letters from index 0 to the position of 
    //that first vowel and finally concats 'ay'
    
    if(firstPosition > 0) {
        return word.slice(firstPosition) + word.slice(0, firstPosition) + 'ay';
    }else if(firstVowel == null){
        return word + 'ay'
    }else if(firstVowel !== null){
    return word + 'yay'
    }
  
  
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






