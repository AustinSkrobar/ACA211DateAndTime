
//i want to creat a function that takes in a numeric grade and returns the equivalent letter grade//

let convertToLetter = (grade) => {
    console.log("input to my function: ", grade);
  
    if(grade > 89){
      return 'A';
    }
  
    if (grade > 79){
      return 'B';
    }
  
    if (grade > 74){
      return 'C';
    }
  
    if (grade > 69){
      return 'D';
    }
  
  
     return 'F';
  }
  
  console.log(convertToLetter("92"))
  console.log(convertToLetter("105"))
  console.log(convertToLetter("73"))
