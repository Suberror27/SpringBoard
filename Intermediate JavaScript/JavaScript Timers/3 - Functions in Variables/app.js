const test = () => {
    console.log("This anonymous function is declared on a variable!");
};

const test2 = function test2() {
    console.log("This anonymous function is declared on a variable again!");
};


test();
test2();