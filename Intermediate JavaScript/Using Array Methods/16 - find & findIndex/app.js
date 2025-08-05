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

const passedScore = scores.find((score, i, arr) => {
    return score >= 75
});

const evenScore = scores.find((score, i, arr) => {
    return score !== 0 && score % 2 === 0;
});

const evenScores = scores.filter((score, i, arr) => {
    return score % 2 === 0;
});

const scoreLocation = scores.findIndex((score) => {
    return score === 75
});

function partition(arr, pivot) {
    const pivotIndx = arr.findIndex((el) => {
        return el > pivot
    })
    const left = arr.slice(0, pivotIndx);
    const right = arr.slice(pivotIndx);

    return [left, right];
};

// console.log(scoreLocation);
console.log(partition(scores, 75))