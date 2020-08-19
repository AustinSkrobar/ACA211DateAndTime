'use strict'

console.log("loading main .js")


let theAddButton = document.getElementById("addButton")
theAddButton.addEventListener('click', function(){

    let inputBox = document.getElementById("inputBox");
    let item =inputBox.value
    console.log("the input is", inputBox.value);

    let myList = document.getElementById("theList");
    let li = document.createElement("li");
    li.innerText = item;

    myList.appendChild(li);

    inputBox.value = ' '
    addLiEvent(li);
})


function addLiEvent(li){
    li.addEventListener('click', function(){
        let classes = li.classList;
        if (classes.contains("done")){
            li.classList.remove("done");
            } else {
                li.classList.add("done")
            }
    })
 

}