let totalAmtDue = people.reduce(function(prevValue, element, 0){
    let sum = prevValue + parsInt(element.amtDue)
    return sum;
},0);

let total2 = 0;
for(let i =0;i<people.length;i++){
    total2 +=people[i].amntDue
}

//should be the same thing