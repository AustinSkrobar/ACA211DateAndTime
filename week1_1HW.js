// Write a JavaScript program to display the current day and time, start with:
console.log('the current time/date is', new Date)

const displayDate = () => {
  const currentDate = new Date();
}
 
console.log('');

// Write a JavaScript program to convert a number to a string.
let numChange = (num) => {
    console.log(num, 'is currently a', typeof num, 'datatype');
    let n = num.toString();
    console.log('but now', n, 'is a', typeof n);
}

numChange(5);


// Write a JavaScript program to convert a string to the number.

let stringChange = (a) => {
  console.log(a, 'is currently a', typeof a, 'datatype');
  let b =parseInt(a);
  console.log('but now', b, 'is a', typeof b);
}

stringChange('7');

console.log('');
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  let dataDefine = (i) => {
    console.log(i);
    let x = console.log('^^^ this data type is a ', typeof i);
   
  }

dataDefine(5);
console.log( ' ');
dataDefine('hello');
console.log( ' ');
dataDefine(true);
console.log( ' ');
dataDefine(null);


console.log( ' ');
  
// Write a JavaScript program that adds 2 numbers together.

let sum = (a, b) => {
  let c = a + b;
  console.log(c);
}

sum(2,3);

console.log(' ');

// Write a JavaScript program that runs only when 2 things are true.
let happy = true
let good = true
let destiny = true

let life = () => {
 if (destiny == (happy && good)) {
   console.log('May the force be with you.')
 } else if (destiny ==(happy || good)) {
  console.log('Do not waiver Anakin.')
  }
  else{
    console.log('You were the chosen One. You were suppose to destroy the Sith not join them.')
  }
}


life()

console.log(' ') 
// Write a JavaScript program that runs when 1 of 2 things are true.


good = false

life()
console.log(' ')
// Write a JavaScript program that runs when both things are not true.  

happy = false

life()
