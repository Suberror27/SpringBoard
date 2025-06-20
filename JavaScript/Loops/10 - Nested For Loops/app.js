const gameBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

const gameBoard2 = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

for (let outer = 0; outer < gameBoard.length; outer++) {
    console.log("Accessing array: " + gameBoard[outer]);
    for (let inner = 0; inner < gameBoard[outer].length; inner++) {
        console.log(`Index ${inner} has a value of ${gameBoard[outer][inner]}`);
    }
};



