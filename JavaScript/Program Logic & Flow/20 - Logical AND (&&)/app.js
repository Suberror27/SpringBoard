const value = 27;
const userName = "Abraham Camargo"

// AND Operator. Both sides must be true in order for the whole thing to be true
if (value >= 27 && Boolean(userName) == true) {
    console.log("Everything is true!");
} else {
    console.log("Not everything is true.")
};


const password = "catdog";

if (password.length >= 6) {
    if (password.indexOf(" ") !== -1) {
        console.log("Password cannot include spaces")
    } else {
        console.log("Valid Password!")
    }
} else {
    console.log("Password too short!");
}

// Same as above but refactored using && (AND) operator
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid Password!");
} else {
    console.log("INVALID PASSWORD");
};

// Another example
const num = 7;

if (num >= 1 && num <= 10) {
    console.log("VALID NUMBER")
} else {
    console.log("INVALID NUMBER")
};