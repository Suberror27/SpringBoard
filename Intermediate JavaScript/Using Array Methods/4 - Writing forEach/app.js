const colors = ["Blue", "Yellow", "Purple", "Green"];

// function callBackFunc (color) {
//     return color;
// };

// function myForEach (arr, func) {
//     for (let element of arr) {
//          func(element)
//     }
// };

// console.log(myForEach(colors, callBackFunc));

function myForEach(arr, callback) {
    for (let element of arr) {
        callback(element);
    }
};

myForEach(colors, (element) => {
    console.log(element.toUpperCase())
});