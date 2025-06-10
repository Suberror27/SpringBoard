const age = 26;
const userName = "Abraham";
const biyuyo = 4850;

if (age >= 18 && Boolean(userName) == true || age > 18 && biyuyo >= 2500) {
    console.log("The expression evaluates to TRUE! ")
} else {
    console.log("The expression evaluates to FALSE!")
}

if (age < 6 || age >= 65) {
    console.log("You get in for free!")
} else {
    console.log("That will be $10 dollars please.")
}

const colorToCheck = "Blue";

if (colorToCheck == "Blue" || colorToCheck == "Purple" || colorToCheck == "Red") {
    console.log("Greate choice!");
} else {
    console.log("What the Burger!");
};