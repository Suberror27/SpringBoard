const ul = document.querySelector("#friend-list");
const removeButtons = document.querySelectorAll("li button");
const newFriend = document.querySelector("#first-name");
const addNewFriend = document.querySelector("form button");

// for (let button of removeButtons) {
//     button.addEventListener("click", (e) => {
//         e.preventDefault();
//         e.target.parentElement.remove();
//     });
// };


// Adding new event listener when new li is created
// addNewFriend.addEventListener("click", (e) => {
//     e.preventDefault();
//     const newLi = document.createElement("li");
//     const newButton = document.createElement("button");
//     newButton.textContent = "UnFriend";
//     newLi.textContent = `${newFriend.value} `;
//     newButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         e.target.parentElement.remove();
//     })
//     newLi.append(newButton);
//     ul.append(newLi);
//     newFriend.value = "";
// });

addNewFriend.addEventListener("click", (e) => {
    e.preventDefault();
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");
    newButton.textContent = "UnFriend";
    newLi.textContent = `${newFriend.value} `;
    newLi.append(newButton);
    ul.append(newLi);
    newFriend.value = "";
});

// Adding the remove method to new li's created with event delegation
ul.addEventListener("click", (e) => {
    e.preventDefault();
   if(e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
   }
});