function greet() {
    console.log("Hello!")
};

function diss() {
    console.log("You are not welcome!")
};

greet();
// When alert is displaying the code below will not run because it gets blocked until alert is dismissed. (Single Thread!)
alert("An Alert!");

diss();