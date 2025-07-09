// document.addEventListener("DOMContentLoaded", () => {
//     // console.log(document.querySelectorAll("img"));
//     console.log("DOM Content Loaded");
//     // const newButton = document.querySelector("#newButton");


//     // newButton.addEventListener("click", () => {
//     //     alert("Button was clicked!");
//     // });
// }) 

// window.addEventListener("load", () => {
//     console.log("Fully Loaded");
// })

const button = document.querySelector("#newButton");

// button.addEventListener("click", (e) => {
//     console.log(e);
// });

button.addEventListener("mousedown", (e) => {
    console.log(e.type);
});

button.addEventListener("mouseup", (e) => {
    console.log(e.type);
});
