function listPeopleChoices() {
  let itemid = 1; //create variable set to 1 in order to add an ID to the element in the DOM
  console.log(list);
  const listElement = document.getElementById("people"); // create a variable to fin the element with id people in our first ordered list





  //map through the array of people so we can create buttons for the make a player function
  //and add event listeners to move them over
  arrOfPeople.map((person) => {
    const li = document.createElement("li"); //variable for list items
    li.setAttribute("id", itemid); //use our variable for setting IDs to set an attribut of ID this way we can grab the elements by id
    const button = document.createElement("button"); //create our button to make a player from person
    button.innerHTML = "Make Player"; //name the button





    //add an event listener that runs our makePayer function when clicked intentions are to move
    //people from arrOfPeople to listOfPlayer and display them on DOM
    button.addEventListener("click", function () {
      makePlayer(person);
    });
    li.appendChild(button); //add the button to our list items


    //and create a text node to dipplay the person and their information
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
}
