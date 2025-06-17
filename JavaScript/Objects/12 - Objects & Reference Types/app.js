// Object literal
const testObject = {
    name: "Abraham Camargo",
    age: 26,
    jobTitle: "Data Systems Administrator",
    company: "Walmart",
    currentlyEmployed: true,
    isAdmin: false,
    100: "one hundred",
    10: "ten",
    "my first name": "Abraham",
    nested: {
        testArray: [1, 2, 3],
        testObject: {
            "one": 1,
            "two": 2,
            "three": 3,
        },
    },
};

const colorObject = {
    red: "#eb4d4b",
    yellow: "#f9ca24",
    blue: "#30336b"
}

const colorObject2 = colorObject;

colorObject.green = "Green";

const game = {
    player1: {
        userName: "Blue",
        team: "O"
    },
    player2: {
        userName: "Red",
        team: "X"
    },
    board: [
        ["O", null, "X"],
        ["X", null, "O"],
        [null, "X", "O"],
    ],
}

console.log(colorObject2);