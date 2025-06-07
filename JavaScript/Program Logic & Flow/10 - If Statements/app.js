const myAge = 21;

if (myAge < 18) {
    console.log("Im am still a baby.")
} else if (myAge > 18) {
    console.log("I am legal age");

    if (myAge > 18 && myAge < 21) {
        console.log("But cant drink alcohol :(");
    } else if (myAge >= 21) {
        console.log("And I can drink alcohol! :)");
    }
} else {
    console.log("No age detected :/");
}