
function giveBirth() {
    console.log("Giving Birth!!");

    return function cry() {
        return "Crying!!!"
    }
};

const result = giveBirth()();

console.log(result);


// function cry() {
//     return "Crying!!!"
// };

// function giveBirth() {
//     console.log("Giving Birth!!");

//     return cry()
// };

// console.log(giveBirth()());

function makeMutliplyFunc(num) {
    return function mult(x) {
        return num * x;
    }
};

const result2 = makeMutliplyFunc(4);

console.log(result2(2))