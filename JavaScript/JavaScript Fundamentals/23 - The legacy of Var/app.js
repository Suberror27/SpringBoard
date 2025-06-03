function test() {
    let hello = "Hello!"
    console.log(hello); // You can reference hello variable
};

// console.log(hello); // This does not work, hello is not on same scope

function test2() {
    var hello2 = "Hello 2!"
    hello3 = "Hello3!"
};

test2()
// console.log(hello2); //Still does not work
console.log(hello3); //This now works, but needs the invokation of the function on top first