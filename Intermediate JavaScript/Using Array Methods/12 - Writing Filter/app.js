const words = [
    "Abraham",
    "Camargo",
    "Trujillo",
    "Itzel",
    "Guadalupe",
    "Luna",
    "Martinez",
    "tskts"
];

function myFilter(arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

console.log(myFilter(words, (word, i, arr) => {
    return word.includes("z");
}));

console.log(myFilter(words, (word, i, arr) => {
    return word.length >= 9
}))