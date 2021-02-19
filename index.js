// Add your code here
function submitData(userName, userEmail) {
    const userData = {
        name: userName,
        email: userEmail
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };

    return fetch("http://localhost:3000/users", configObj).then(function(response){ 
        return response.json();
        })
        .then(function(object){
            postIdToDom(object["id"])
        })
        .catch(function(error) {
            document.body.append(error.message);
        }); 
 

};



function postIdToDom(id) {
    if (!document.getElementById("listOfUserIds")) {
    let ul = document.createElement('ul')
    ul.id = "listOfUserIds"
    document.body.append(ul)
    }

    let listOfUserIds = document.getElementById("listOfUserIds")
    let li = document.createElement('li')
    li.innerHTML = id 
    listOfUserIds.appendChild(li)

}