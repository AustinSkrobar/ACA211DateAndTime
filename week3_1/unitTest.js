'use strict'

const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function convertToUpperCase(sentence){
    return sentence.trim().toUpperCase();
}

function runProgram(){
    rl.question("Input: ", function(answer){
        let convert = convertToUpperCase(answer);
        console.log(convert);
        runProgram();
    })
}



if (typeof describe == 'function' ){
    console.log(' in test mode');
    const assert = require('assert');

    describe("test suite1", function(){
        it("should convert single words", function(){
            let words = "boy";
            let expected = "BOY";
            let actual = convertToUpperCase(words)
            assert.equal(actual, expected);
        })

        it("should handle 2 words", function(){
            let words = "the girl";
            let expected = "THE GIRL";
            let actual = convertToUpperCase(words);
            assert.equal(actual, expected);
        })
    })







}else {
    console.log('in execute mode');
    runProgram();
    

}