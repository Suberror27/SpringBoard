function greet() {
    console.log("Hello!")
};

function diss() {
    console.log("You are not welcome!")
};

// greet();
// // When alert is displaying the code below will not run because it gets blocked until alert is dismissed. (Single Thread!)
// alert("An Alert!");

// diss();

greet();

setTimeout(diss, 5000);
setTimeout(diss, 2500);

greet();

const id = setInterval(()=> {console.log("Interval Function!")}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("canceled Interval")
}, 10000);