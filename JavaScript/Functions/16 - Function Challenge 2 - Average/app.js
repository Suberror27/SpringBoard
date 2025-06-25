// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function averageValue(array) {
    let count = 0;
    for(let num of array) {
        count += num;
    }
    return count / array.length;
};

console.log(averageValue([0,50]));