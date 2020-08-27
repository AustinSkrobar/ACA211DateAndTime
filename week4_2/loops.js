"strict";

// Use a do...while loop to console.log the numbers from 1 to 1000.
// let x = 0;
// do{
//     console.log(x++);
// }
// while (x <= 1000);

// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"
// let person = {
//   firstName: "Jane",
//   lastName: "Doe",
//   birthDate: "Jan 5, 1925",
//   gender: "female",
// };

// Create a function that logs out the keys of the object using Object.keys().
// const objKeys = () => {
//   console.log(
//     "these are the keys for the varible person:",
//     Object.keys(person)
//   );
// };

// objKeys();
// Create a function that logs out the keys and values of the object using
//Object.entries().
// const objEntries = () => {
//   console.log(
//     "here are the keys and values for person:",
//     Object.entries(person)
//   );
// };

// objEntries();
// Create an arrayOfPersons that contains multiple "people" objects. You can simply
// copy/paste the person object you made above multiple times. Feel free to change the
//  values to reflect multiple people you might have in your database.
const arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "1925",
    gender: "female",
  },
  {
    firstName: "John",
    lastName: "Ee-Boy",
    birthDate: "1950",
    gender: "male",
  },
  {
    firstName: "Frank",
    lastName: "Hoggs",
    birthDate: "1999",
    gender: "male",
  },
];

// console.log(arrayOfPersons);
// Create a function that uses a for...of loop and an if statement to console.log the
//  value associated with the key birthDate of each object if the birth year is an odd
//   number.
// const oddPeopleBday = () => {
//   for (const element of arrayOfPersons) {
//     if (element.birthDate % 2) {
//       console.log(element)
//     }
//   }
// }
// oddPeopleBday();
// Use .map() to map over the arrayOfPersons and console.log() their information.

// const map1 = arrayOfPersons.map(function(num){
//     console.log(num)
// })
// Use .filter() to filter the persons array and console.log only males in the array.
// const boysOnly = (personsArray) => {
//     if (personsArray.gender === "male"){
//         console.log(personsArray)
//     }
// }

// arrayOfPersons.filter(boysOnly)
// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
// let OlderBday = (array) => {
//     if(array.birthDate < 1990) {
//         console.log(array.firstName, "is born before 1990")
//         return true
//     }else {
//         console.log(array.firstName, "is born after 1990")
//         return false
//     }
// }
// arrayOfPersons.filter(OlderBday)

// Use .filter() to filter the persons array and console.log only people that were born
// before Jan 1, 1990.
let OlderBday = (array) => {
    if(array.birthDate < 1990) {
        console.log(array.firstName, "is born before 1990")
        return true
    }else {
        
        return false
    }
}
arrayOfPersons.filter(OlderBday)
// BONUS - Create a function that returns true if the date passed to it is >= 21 years
// in the past.

// BONUS - .filter() out the people in the array who are younger than 21.
