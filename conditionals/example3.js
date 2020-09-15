'use strict'

let convertToLetter = function(grade){
    console.log("Input to my function: ", grade);

    let letter;

    if(grade >= 90) {
        letter ="A";
    } else if (grade >= 80) {
        letter = "B";
    }else if (grade >= 75) {
        letter = "C";
    }else if (grade >= 70) {
        letter = "D";
    }else {
        letter = "F";
    }
    return letter;
}



console.log(convertToLetter("92"))
console.log(convertToLetter("105"))
console.log(convertToLetter("73"))