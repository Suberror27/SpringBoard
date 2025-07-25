// function greet() {
//     console.log("Hello!")
// };

function diss() {
    console.log("You are not welcome!")
};

// greet();

// setTimeout(diss, 5000);
// setTimeout(diss, 2500);

setInterval(() => {
    console.log("This is an Anonymous Function")
}, 1000);

function doTwice(func) {
    func();
    func();
};

doTwice(() => {
    console.log("Another Anonymous Function!")
});

// greet();

// const id = setInterval(()=> {console.log("Interval Function!")}, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("canceled Interval")
// }, 10000);