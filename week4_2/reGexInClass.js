const regex = RegExp('foo*', 'g');


const globalRegex = regExp('foo*', 'g');
const str1 = 'table football'                                               
const str2 = 'Football!!!!'
let isMatched1 = regex.test(str1);
let isMatched2 = regex.test(str2);
 
console.log("test1 ", isMatched1);                 
console.log("test2 ", isMatched2);