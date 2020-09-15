const game = () => {
    let x = document.getElementById("review").value
    console.log(x)

    
    let node = document.createElement("li")
    let textNode = document.createTextNode(x)
    node.appendChild(textNode)
    document.getElementById("postedReview").appendChild(node)
    
}