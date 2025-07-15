const preferences = {
    fontSize: "2rem",
    color: "blue"
};

const friends = ["Kevin", "Abraham", "Itzel", "Brissa"];

localStorage.setItem("friends", JSON.stringify(friends));
localStorage.setItem("preferences", JSON.stringify(preferences));

console.log(JSON.parse(localStorage.getItem("friends")));
console.log(JSON.parse(localStorage.getItem("preferences")));