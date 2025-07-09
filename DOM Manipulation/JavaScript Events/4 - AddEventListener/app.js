// const button = document.querySelector("button");

// function clickHandler() {
//     alert("Button was clicked!");
// };

function makeBody(color) {
    document.body.style.backgroundColor = color;
};

// const otherButton = document.getElementById("otherButton");
// otherButton.onclick = function() {
//     makeBody("blue");
// };

const newButton = document.querySelector("#newButton");
const h1  = document.querySelector("h1");

newButton.addEventListener("click", () => {
    makeBody("purple");
});

h1.addEventListener("mouseover", () => {
    makeBody("blue");
    alert("Button was clicked and color changed!");
});

newButton.addEventListener("click", () => {
     alert("Button was clicked and color changed!");
});