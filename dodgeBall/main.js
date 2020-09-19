"use strict";


//our array of people that we may add onto with a input box at a later time but which we get information to make players out of.
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
  {
    id: 8,
    name: "Joe Moe",
    age: 82,
    skillSet: "being old",
    placeBorn: "Dallas, Texas",
  },
];


//our other arrays for a roster of players without teams and our 2 teams which we might also extend further
const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];


//the class for our players and attributes we get the information for the players from arrOfPeople in a function down below
class Player {
  constructor(
    name,
    id,
    age,
    skillSet,
    placeBorn,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillset = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

//class for making teammates so we can assign teams with mascots and color we extend this class from the player class for all other attributes
class Teammate extends Player {
  constructor(player, mascot, color) {
    super(
      player.id,
      player.name,
      player.age,
      player.skillset,
      player.placeBorn,
      player.canThrowBall,
      player.canDodgeBall,
      player.hasPaid,
      player.isHealthy,
      player.yearsExperience
      );
    this.mascot = mascot;
    this.color = color;
  }


  // these are options for pushing the players into teams as methods inside the class.
  //  joinRedTeam() {
  //    redTeam.push(this.player);
  //  }
  //  joinBlueTeam() {
  //    blueTeam.push(this.player);
  //  }
}

//here we need to create a function to remove the name from the people list by the ID we
//assosiated with them
const removeName = (itemid) => {
  let item = document.getElementById(itemid);
  item.remove();
}

//function for our people list in DOM which generates the list when the button is clicked as well as the buttons for make a player and ties in the functions to run when clicked
const listPeopleChoices = () => {
  let itemid = 1; //create variable set to 1 in order to add an ID to the element in the DOM
  
  const listElement = document.getElementById("people"); // create a variable to find the element with id people in our first ordered list

  //map through the array of people so we can create buttons for the make a player function
  //and add event listeners to move them over
  arrOfPeople.map((person) => {
    const li = document.createElement("li"); //variable set for list items within DOM
    li.setAttribute("id", itemid); //use our variable for setting IDs to set an attribut of ID this way we can grab the elements by id
    const button = document.createElement("button"); //create our button to make a player from person
    button.innerHTML = "Make Player"; //name the button

    //add an event listener that runs our makePayer function when clicked intentions are to move
    //people from arrOfPeople to listOfPlayer and display them on DOM
    button.addEventListener("click", function () {
      if(listOfPlayers.includes(person)){
        return false
      }
      makePlayer(person);
    });
    li.appendChild(button); //add the button to our list items
    //and create a text node to display the person and their information
    li.appendChild(
      document.createTextNode(
        person.name +
        " - " +
        person.age +
        " - " +
        person.skillSet +
        " - " +
        person.yearsExperience
        )
    );

    //the event listener for the function so when it is clicked it removes the item from the dom
    button.addEventListener("click", function removeName(itemid) {
      let item = document.getElementById(itemid);
      li.remove(item);
    });

    listElement.appendChild(li); //make a child tothe list items to our people ID from the ol

    itemid += 1; // add a increase for the ids we set attributes for
  });
};


//function for a player from the people list and moving them the the player list. Create buttons that takes functions for putting on different teams.
const makePlayer = (person) => {
  console.log(listOfPlayers) // using this to help me see which attributes are not defined yet

  //stores a variable that creates a new player when a "person" is passed through
  let addPlayer = new Player(
    person.id,
    person.name,
    person.skillSet,
    person.placeBorn,
    person.canThrowBall,
    person.canDodgeBall,
    person.hasPaid,
    person.isHealthy,
    person.yearsExperience
  );
    //adds person to the list of players function
  listOfPlayers.push(addPlayer);

  let itemid = 1;//create variable set to 1 in order to add an ID to the element in the DOM
  const listElement = document.getElementById("players");// create a variable to find the element with id people in our first ordered list
  listElement.innerHTML = ""; //setting the listElement on the DOM to a empty string so that it can reset the list that is displayed every time the array is updated with a new player

  //looping through each person in the array so we can tie in to the DOM give li elements ids and create buttons with colors set to them
  listOfPlayers.forEach((person) => {
    const li = document.createElement("li");//variable set for list items within DOM

    li.setAttribute("id", "item:" + itemid);  //use our variable for setting IDs to set an attribut of ID this way we can grab the elements by id

    let button2 = document.createElement("button");//create our button to set a player on red team
    button2.innerHTML = "Make Red Team";//name the button for red team
    button2.style.color = 'red';//make the text in the button red
    //this makes it so when button2 is clicked the function that brings a person on the player array is now on the redTeam array and displayed in the dom
    button2.addEventListener("click", function () { 
      if(redTeam.includes(person)){
      return false
    }
      makeRed(person);
    });
    let button3 = document.createElement("button");//create our button to set a player on red team
    button3.innerHTML = "Make Blue Team";//name the button for blue team
    button3.style.color = 'blue';//make the text in the button blue
    //this makes it so when button3 is clicked the function that brings a person on the player array is now on the blueTeam array and displayed in the dom
    button3.addEventListener("click", function () { 
      if(blueTeam.includes(person)){
        console.log("this shouldnt remake people")
      return false
    }
      makeBlue(person);
    });
    li.appendChild(button2);//tie the buttons into the li element
    li.appendChild(button3);
        //and create a text node to display the person and their information
    li.appendChild(
      document.createTextNode(" " + person.name + " - " + person.id + " ")
    );

    //the event listener for the function so when it is clicked it removes the item from the dom
    button3.addEventListener("click", function removeName(itemid) {
      let item = document.getElementById(itemid);
      li.remove(item);
    });

    //the event listener for the function so when it is clicked it removes the item from the dom
    button2.addEventListener("click", function removeName(itemid) {
      let item = document.getElementById(itemid);
      li.remove(item);
    });

    listElement.append(li);
    li.appendChild(button3);

    itemid += 1;// add a increase for the ids we set attributes for
  });
  
};

const makeRed = (player) => {
  // const redTeammate = new Teammate(player, "Lion", "red");
  // redTeammate.joinRedTeam(player);
  // console.log(redTeammate)

  let addteammate = new Teammate(player, "red", "Lion");//create a variable that holds classes being made for teammate

  redTeam.push(addteammate);//pushes those Teammates to redTeam

  let itemid = 1;//create variable set to 1 in order to add an ID to the element in the DOM
  const listElement = document.getElementById("red");
  listElement.innerHTML = "";

  redTeam.forEach((player) => {
    const li = document.createElement("li");
    li.setAttribute("id", "num:" + itemid);
    //and create a text node to display the person and their information
    li.appendChild(
      document.createTextNode(
        " " + player.name + " - " + player.color + " - " + player.mascot + " "
      )
    );

    listElement.append(li);
    itemid += 1;// add a increase for the ids we set attributes for
  });
};

const makeBlue = (player) => {
  // const blueTeammate = new Teammate(player,"Dolphin", "blue");
  // blueTeammate.joinBlueTeam(player);
  // console.log(blueTeammate)

  let addteammate = new Teammate(player, "blue", "Dolphin");//create a variable that holds classes being made for teammate

  blueTeam.push(addteammate);//pushes those Teammates to  blueTeam

  let itemid = 1;//create variable set to 1 in order to add an ID to the element in the DOM
  const listElement = document.getElementById("blue");
  listElement.innerHTML = "";

  blueTeam.forEach((player) => {
    const li = document.createElement("li");
    li.setAttribute("id", "num:" + itemid);
    //and create a text node to display the person and their information
    li.appendChild(
      document.createTextNode(
        " " + player.name + " - " + player.color + " - " + player.mascot + " "
      )
    );

    listElement.append(li);
    itemid += 1;// add a increase for the ids we set attributes for
  });
};



//3 things I would test right off the bat is 
  //1 does the make player function create the class and does it push into the player array
  //2 when I  use the function makeBlue does it successfully pull information from the listOfPlayers array. Then check if the put into the blue teams array with the right info.
  //3 last I would test to see if the funtions return updated listOfPlayer arrays when moving information to other arrays no that they are no longer available.