const test = ["Abraham", "Camargo", "Trujillo"]
const test2 = [26, "Walmart", true, null, undefined, {fullName: test[0] + " " + test[1] + " " + test[2]}, [1, 2, 3]];

console.log(test2[5].fullName);