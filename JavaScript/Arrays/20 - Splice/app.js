const test = ["Abraham", "Camargo", "Trujillo"];
const tempTest = [4, 5, 6];
test[2] = "T.";
test[1] = "C."
const test2 = [26, "Walmart", true, null, undefined, {fullName: test[0] + " " + test[1] + " " + test[2]}, [1, 2, 3]];

test2.splice(2, 0, "Print Solutions"); // This code mutates the original array and inserts the string "Print Solutions" beggining at index 2 (this takes the spot on 2 and pushes everything forward)

test2.splice(4, 2); // THis code mutates the original array and deletes 2 elements starting from index 4 (including index 4), (null and undefined are deleted).

test2.splice(1, 1, "WALMART"); // This code mutates the original array and deletes 1 element starting from index 1 (including index 1) and replacing it with the string "WALMART"

console.log(test2);