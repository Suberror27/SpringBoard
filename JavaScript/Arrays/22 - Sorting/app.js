const test = ["Abraham", "Camargo", "Trujillo"];
const tempTest = [4, 5, 6];
test[2] = "T.";
test[1] = "C."
const test2 = [26, "Walmart", true, null, undefined, {fullName: test[0] + " " + test[1] + " " + test[2]}, [1, 2, 3]];


// const sortedTest2 = test2.sort(); //Odd way of sorting all elements by default converting them to strings and then sorting based on the string values
// Ok with sorting arrays of only strings!



console.log(sortedTest2);