"use strict";

const arrOfPeople = [
  {
    id: 1,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
  },
  {
    id: 2,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
  },
  {
    id: 3,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
  },
  {
    id: 4,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
  },
  {
    id: 5,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
  },
  {
    id: 6,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
  },
  {
    id: 7,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
  },
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  
    
  //makeDBPlayer(){

  //}
}

class blueTeammate {
  constructor() {}
}
class redTeammate {
  constructor() {}
}



const listPeopleChoices = () => {
 console.log("this is the array of people: ",arrOfPeople)

  

  let itemid = 1; //added from site
 
  const listElement = document.getElementById("people");
  arrOfPeople.map((person) => {
    const li = document.createElement("li");
    li.setAttribute('id',itemid); //added from site
    

    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function () {
      makePlayer(person.id);
    });
    li.appendChild(button);
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
    
    function removeName(itemid){
      let item = document.getElementById(itemid);
      li.removeChild(item);
    }
    button.setAttribute('onClick', function removeName (itemid) {
      let item = document.getElementById(itemid);
      li.removeChild(item);
    })
    li.appendChild(button);
    
    listElement.appendChild(li);// added from site i also combined the function remoeName with add attribute

    itemid+=1;
    listElement.append(li);
      
    
  });


};

const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`);
  //let removeFromPeopleList = document.getElementById("people")
  //removeFromPeopleList.remove()
  



  //here im creating a function that will take the id minus 1 to get the index of the person that is clicked.
  //loop through our array of people and create a new class of player based off their
  //name and id. then push to list of player
  //I also want to remove the person from arrOfPeople when moved to listOfPlayer
  const bringToList = () => {
    for(let i = id - 1; i < arrOfPeople.length; i++) {
      console.log(i)
      
      let addPlayer = new player (arrOfPeople[i].name, arrOfPeople[i].id)
      console.log(addPlayer)
      if(listOfPlayers.includes(addPlayer)){
        console.log("player is already in the list")
        return false
      } else{
        console.log("pushing to list of players");
        return listOfPlayers.push(addPlayer);
      }
      
    }
  }
  bringToList()
  console.log("this is list of players: ", listOfPlayers)


  const listElement = document.getElementById("players");
  //map function takes each person
  listOfPlayers.map((person) => {
    const li = document.createElement("li")
    let button2 =document.createElement("button")
    button2.innerHTML = "Make Red Team"
    let button3 = document.createElement("button")
    button3.innerHTML = "Make Blue Team"
    li.appendChild(button2)
    li.appendChild(document.createTextNode(" " + person.name + "-" + person.id + " "))
    listElement.append(li)
    li.appendChild(button3)
  })
};


