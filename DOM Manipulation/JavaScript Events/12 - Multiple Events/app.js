const ul = document.querySelector("#friend-list");
const removeButtons = document.querySelectorAll("li button");
const newFriend = document.querySelector("#first-name");
const addNewFriend = document.querySelector("form button");

for (let button of removeButtons) {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.parentElement.remove();
    });
};

addNewFriend.addEventListener("click", (e) => {
    e.preventDefault();
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");
    newButton.textContent = "UnFriend";
    newLi.textContent = `${newFriend.value} `;
    newButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.parentElement.remove();
    })
    newLi.append(newButton);
    ul.append(newLi);
});
