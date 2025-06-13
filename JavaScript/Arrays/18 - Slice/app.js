const test = ["Abraham", "Camargo", "Trujillo"];
const tempTest = [4, 5, 6];
test[2] = "T.";
test[1] = "C."
const test2 = [26, "Walmart", true, null, undefined, {fullName: test[0] + " " + test[1] + " " + test[2]}, [1, 2, 3]];

console.log(test2.slice(0, (test2.length + 1) / 2)); //This will return the elements of the array starting from index 0 (inlcuding index 0) up to half of the array? (not including the half index)

console.log(test2.slice(2, 5)); // This code will return the elements of the array with index 2 (including 2) up to index 5 (not including 5)

console.log(test2.slice(-2)); // If we pass in negative numbers it will return elements starting from the end of the array (from right to left)

console.log(test2.slice()); //This will return a copy of the whole array