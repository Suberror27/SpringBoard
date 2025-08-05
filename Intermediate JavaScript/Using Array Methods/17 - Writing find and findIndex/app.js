const scores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    55,
    59,
    69,
    73,
    73,
    75,
    79,
    83,
    88,
    91,
    93
];

function myFind(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) return arr[i]
    };
    return undefined
};

function myFindIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) return i
    };
    return -1
};

// console.log(myFind(scores, (score, i, arr) => {
//     return score === 75;
// }));


console.log(myFindIndex(scores, (score, i, arr) => {
    return score !== 0 && score % 2 === 0;
}));
