const test = ["Abraham", "Camargo", "Trujillo"];
const tempTest = [4, 5, 6];
test[2] = "T.";
test[1] = "C."
const test2 = [26, "Walmart", true, null, undefined, {fullName: test[0] + " " + test[1] + " " + test[2]}, [1, 2, 3]];


test2[test2.length - 1].push(4);

console.log(test2[test2.length - 1]);