const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
let location = undefined;

// ## Step 1 🧩 Use a series of `if`, `else if`, and `else` statements to decipher the first clue.
// - If `emblemClue1` is "Eagle", the location starts with "Forum".
// - If `emblemClue1` is "Lion", the location starts with "Colosseum".
// - Otherwise, the location starts with "Villa".

if (emblemClue1 === "Eagle") {
    location = "Forum";
} else if (emblemClue1 === "Lion") {
    location = "Colosseum";
} else {
    location = "Villa";
};


// ## Step 2 🧩 Use boolean logic to decipher the second clue.
// - If `emblemClue2` is "Laurel" AND the first location is "Forum", append " of Augustus" to the location.
// - If `emblemClue2` is "Grapes" OR the first location is "Villa", append " of Pompey" to the location.

emblemClue2 === "Laurel" && location === "Forum" ? location += " Augustus" : "";
emblemClue2 === "Grapes" || location === "Villa" ? location += " Pompey" : "";


// ## Step 3 🧩 se the switch statement to decipher the third clue.
// - Depending on the value of `emblemClue3`, append a direction to the location.
//     - 7 is "North"
//     - 3 is "South"
//     - 9 is "East"
//     - 4 is "West"

switch(emblemClue3) {
    case 3:
        location += " South";
    break;

    case 4:
        location += " West";
    break;

    case 7:
        location += " North";
    break;

    case 9:
        location += " East";
    break;
};


// ## Question 🤔 Why is it important to be careful when using `==` (double equals) instead of `===` (triple equals) in our conditionals?
// Double equals (==) will try to change the data type of the value being evaluated to try and make it match.
// Triple equals (===) will not try to change the data type of the value being evaluated. It will strictly try to match it.