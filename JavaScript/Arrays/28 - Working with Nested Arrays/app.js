const nestedArray = [
    [1, 2, [10, 11, 12], 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(nestedArray[1][1]);

nestedArray[1][1] = 55;

console.log(nestedArray[1][1]);

console.log(nestedArray[0][2]);