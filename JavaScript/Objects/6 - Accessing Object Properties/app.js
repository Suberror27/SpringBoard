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

const mysteryColor = colorObject.blue;

console.log(testObject);

console.log(testObject.name);

console.log(testObject["name"]);

console.log(testObject[100]);

console.log(testObject["my first name"]);

console.log(colorObject.red);

console.log(colorObject.yellow);

console.log(mysteryColor);

