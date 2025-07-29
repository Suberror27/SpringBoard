function holler() {
    console.log("Hi!")
};


const holler2 = () => {
    console.log("Hello!")
};

// holler2();

function add(x, y) {
    return x + y;
};

function substract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function power(x, y) {
    return x ** y;
}

const mathFunctions = [add, substract, multiply, divide, power];

// console.log(mathFunctions[2](5, 5));

// setTimeout(holler, 4000);

function doMath(a, b, mathFunc) {
    return mathFunc(a, b);
}

// console.log(doMath(5, 6, multiply));

// console.log(doMath(1,2, () => {
//     return (1 * 2) / 1;
// }));

function doAllMath(d, e, mathFunctionsArray) {
    for (let func of mathFunctionsArray) {
        // console.log(func);
        console.log(func(d, e));
    }
};



document.body.addEventListener("click", () => {
    doAllMath(7, 7, mathFunctions);
})