const test = ["Abraham", "Camargo", "Trujillo"];
const tempTest = [4, 5, 6];
test[2] = "T.";
test[1] = "C."
const test2 = [26, "Walmart", true, null, undefined, {fullName: test[0] + " " + test[1] + " " + test[2]}, [1, 2, 3]];

console.log(test2.includes("Walmart")); // It returns boolean if the passed value is included anywhere in the array.

console.log(test2.includes("Walmart", 2)); // We can pass a starting point in the array to start looking for the desired passed in value

if (test2.includes("Walmart", 2)) {
    console.log("He works for Walmart!");
} else {
    console.log("He does not work for Walmart");
};


console.log(test2.indexOf("Walmart")); // indexOf returns the index of where the value is located inside the array

console.log(test2.findIndex(element => typeof(element) === "array" && element !== null)); // This code will return the index of any object located inside the array

console.log(test2.findIndex(element => Array.isArray(element))); // This code will return the index of any array located inside of the array