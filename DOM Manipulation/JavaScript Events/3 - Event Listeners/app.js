const button = document.querySelector("button");

function clickHandler() {
    alert("Button was clicked!");
};

function makeBody(color) {
    document.body.style.backgroundColor = color;
};

const otherButton = document.getElementById("otherButton");
otherButton.onclick = function() {
    makeBody("blue");
};