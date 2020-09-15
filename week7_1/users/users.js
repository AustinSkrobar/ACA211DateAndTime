console.log("loading in the user.js file");

console.log("About to make a fetch call");
let fetchPromise = window.fetch("https://randomuser.me/api/");

let jsonPromise = fetchPromise.then(function (data) {
  console.log("Fetch call finished ", data);
  return data.json();
});
jsonPromise.then(function (json) {
  console.log("this is the json ", json);
  process(json.results);
});

console.log("After the fetch call");

function process(users) {
  let ul = document.getElementById("people");

  users.forEach(function (user) {
    console.log("users first name: ", user.name.first);

    let li = document.createElement("li");
    ul.appendChild(li);

    let img = document.createElement("img");
    li.appendChild(img);
    img.src = user.picture.medium;

    let nameDiv = document.createElement("div");
    li.appendChild(nameDiv);
    nameDiv.innerText = user.name.first + " " + user.name.last;

    let addressDiv = document.createElement("div");
    li.appendChild(addressDiv);
    addressDiv.innerHTML =
      user.location.street.number + " " + user.location.street.name;
    // sets the display to empty
    addressDiv.style.display = "";
    //if display is empty we want to not show address
    if (addressDiv.style.display == "") {
      displayValue = "none";

      addressDiv.style.display = displayValue;
    }
    //on click change the display from none to block so it can show the address when name is clicked
    nameDiv.addEventListener("click", function () {
      addressDiv.style.display = "block";
    });
  });
}
