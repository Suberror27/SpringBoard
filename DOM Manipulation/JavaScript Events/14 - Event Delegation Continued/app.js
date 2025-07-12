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
    const ratingSection = document.createElement("span");
    ratingSection.id = "ratingSection";
    newButton.textContent = "UnFriend";
    newLi.textContent = `${newFriend.value} `;
    newLi.append(newButton);
    newLi.prepend(ratingSection);
    ul.append(newLi);
    newFriend.value = "";
});

// Adding the remove method to new li's created with event delegation
ul.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    } else if (e.target.tagName === "LI") {
        e.target.firstElementChild.textContent += "⭐";
        if (e.target.firstElementChild.textContent.length === 1) e.target.style.color = "Red";
        if (e.target.firstElementChild.textContent.length === 2) e.target.style.color = "Yellow";
        if (e.target.firstElementChild.textContent.length === 3) e.target.style.color = "Orange";
        if (e.target.firstElementChild.textContent.length > 3) e.target.style.color = "Green";
        else if (e.target.firstElementChild.textContent.length === 0) e.target.style.color = "Black";
    } else if (e.target.tagName === "SPAN") {
        e.target.textContent = e.target.textContent.slice(0, -1);
        if (e.target.textContent.length === 1) e.target.parentElement.style.color = "Red";
        if (e.target.textContent.length === 2) e.target.parentElement.style.color = "Yellow";
        if (e.target.textContent.length === 3) e.target.parentElement.style.color = "Orange";
        if (e.target.textContent.length > 3) e.target.parentElement.style.color = "Green";
        else if (e.target.textContent.length === 0) e.target.parentElement.style.color = "Black";
    }
});