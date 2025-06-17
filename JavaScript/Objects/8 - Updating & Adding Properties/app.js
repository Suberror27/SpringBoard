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
};

const colorObject = {
    red: "#eb4d4b",
    yellow: "#f9ca24",
    blue: "#30336b"
}

const emptyObject = {};

emptyObject.blue = "Blue";

emptyObject["yellow"] = "Yellow";

emptyObject["black"] = "?";

emptyObject.black = "Black";

emptyObject.testNumber = 2;

emptyObject.testNumber ++;

emptyObject.testNumber += 2;

console.log(emptyObject);