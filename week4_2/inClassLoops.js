// let totalAmtDue = people.reduce(function(prevValue, element, 0){
//     let sum = prevValue + parsInt(element.amtDue)
//     return sum;
// },0);

// let total2 = 0;
// for(let i =0;i<people.length;i++){
//     total2 +=people[i].amntDue
// }

//should be the same thing



// let friends= ['Jaime', 'Jackie', 'Janet', 'Jessie', 'Jenny'];

// let printFriend = function(element,index){
//     console.log(`${element} at position ${index}`)
// }


// //plain old for loop
// //  for(let i=0;i<friends.length;i++){
// //      let friend = friends[i];
// //      printFriend(friend, i);
// //  }

//  //with a higher oerder for-each function
//  //pass in a variable that holds the function
// friends.forEach(printFriend)

// friends.forEach(function(element, index){
//     console.log("from the second call"+ element+" index: "+index);
// });

let people = [ 
    {name: 'Jake', address: '1234 main street', amtDue: "100"},
    {name: 'Phillip', address:'4567 holland ave', amtDue: "95"},
    {name:'Lindsey', address: '9876 McRon st', amtDue: "12"},
    {name:'Mark', address:'1597 trace circle dr', amtDue: "33"}
]

//create a letter for every person that owe more than 75. the letter should say:
//hi XXXX, Please submit your payment of XXX as soon as possible, thank you.

let peopleOverDue = 


//forEach example
// let result = people.forEach(function(element, index){
//     console.log(element.hobby);
// });

console.log(result)

//forEach --> purpose is to loop through te collection

//map -->purpose is to transform every element into something else
//note: this does not change the original array!!

//filter --> purpos is to filter"in" the element that meet a criteria

//Hello {name}, I live close to{address}, and my hoby is {hobby} too.
//Woud you like to meet up?


//filter example
// let numbers = [12,25,54,1,8]

// //filter out the evens, (filter "in" the odds)
// let odd =numbers.filter(function(element, index){
//     //for each number (element), return true if odd, returnfals if even
//     if (element % 2 == 0){
//         return false;
//     }
//         return true;
    

// })

// console.log(odd)



//Map example
// let convert = function(element, index){

//     return `Hello ${element.name}, I live close to ${element.address}, and my hobby is ${element.hobby} too. Would you like to meet up?`
// }

// let sentences = people.map(convert);

// console.log(sentences);

