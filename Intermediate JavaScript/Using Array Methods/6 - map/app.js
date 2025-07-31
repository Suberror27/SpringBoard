const colors = ["Blue", "Yellow", "Purple", "Green"];

const prices = [10, 7, 27, 88, 32, 27, 72];

const result = prices.map((value) => {
    return value / 2
});

console.log(result);

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

const resultTodo = todos.map((element) => {
    return element.text
});

console.log(resultTodo);

const anchorTags = document.querySelectorAll("a"); 

const urls = Array.from(anchorTags).map((anchor, i, arr) => {
   return {
        ulr: anchor.href,
        index: i,
        fromArray: arr
    }
});

console.log(urls);
