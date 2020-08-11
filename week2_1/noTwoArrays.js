//how would you find out if two arrays contain the same values?

let arr1 = [1,2,3]
let arr2 = [1,2,3]

//converts the array to a string for the second if/else statement
// arr1 = arr1.toString()
// arr2 = arr2.toString()


//using the .includes method to check if the array has a specified element
arr1.includes(1,2,3) === arr2.includes(1,2,3) ? console.log(true) : console.log(false)
            // if (arr1 === arr2){
            //     console.log(true);
            //  } else {
            //      console.log(false);
            //  }


// after converting to a string check if the strings are the same
// arr1 === arr2 ? console.log(true) : console.log(false)
            // if (arr1 === arr2){
            //     console.log(true);
            //  } else {
            //      console.log(false);
            //  }

// arr1 === arr2 // =>  false

