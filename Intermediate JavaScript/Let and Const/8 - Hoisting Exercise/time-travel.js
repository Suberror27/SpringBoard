/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
// const travelDate = "2024-03-15";
// travelDate = "Today";
/*
 * Observations:
 * TODO: Explain here.
 * Got error message "Assignment to constant variable" on the console. This is because once we declare a variable with const we can no longer update/re-declare the data type of it.
 * But if we declare an array with const we can still push, pop, etc. the elements inside the Array. Same goes for an Object
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(timeMachineModel);
// let timeMachineModel = []; //On the console we get "Cannot access timeMachinceModal before initialization";
// const timeMachineModel = []; //On the console we get "Cannot access timeMachinceModal before initialization"
// var timeMachineModel = []; //On the console we get "undefined" due to Variable Hoisting.
/*
 * Observations:
 * TODO: Explain here.
 */
