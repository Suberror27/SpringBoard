const todos = [
    {
        text: "Play Games",
        time: "10pm"
    },
    {
        text: "Do Homework",
        time: "8pm"
    }
];

function myMapVersion(arr, callback) {
    const mappedArray = [];

    for (let element of arr) {
        mappedArray.push(callback(element));
    };
    return mappedArray;
};

const timeMap = myMapVersion(todos, (todo) => {
    return todo.time
});

console.log(timeMap);