const test = ["Abraham", "Camargo", "Trujillo"];
test[2] = "T.";
test[1] = "C."
const test2 = [26, "Walmart", true, null, undefined, {fullName: test[0] + " " + test[1] + " " + test[2]}, [1, 2, 3]];

test2[test2.length - 1].push(4); // Adds 4 to the end of the array
test2[test2.length - 1].push(5); // Adds 5 to the end of the array
test2[test2.length - 1].pop(); // Removes the last element of the array and returns its value (5)
test2[test2.length - 1].pop(); // Removes the last element of the array and returns its value (4)

// console.log(test2[5].fullName);

console.log(test2[6]);