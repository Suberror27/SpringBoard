function greet() {
    console.log("Hello!")
};

function diss() {
    console.log("You are not welcome!")
};

// function repeatThreeTimes(funct) {
//     funct();
//     funct();
//     funct();
// }

function repeat(num, func) {
    for(let i = 0; i < num; i++) {
        func();
    }
}

repeat(10, diss);

// repeatThreeTimes(greet);
// repeatThreeTimes(diss);