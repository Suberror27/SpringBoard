const student = {
    "name": "Abraham",
    position: "Data Systems Admin",
    age: 26,
    "favorite color": "Blue"
};

// This does not work
// for (let key of student) {
//     console.log(key);
// };

for (let question of Object.keys(student)){
    console.log(question);
}
 


// objects
const obj = {
  name: "Andrew",
  age: 30,
  address: {
    state: "LA",
    Street: "whatever"
  }
}

// console.log(obj.name);
// console.log(obj["name"])

const keysArray = Object.keys(obj);
// console.log(keysArray);

const valuesArray = Object.values(obj);
// console.log(valuesArray)

Object.entries(obj)

// for (const [k, v] of Object.entries(obj)) {
//   console.log("key: ", k);
//   console.log("value: ", v);
// }

// const myName = obj.name;
// console.log(myName);

const {name, age, address: {Street, state}} = obj;
// console.log(Street, state);

// hash map in JS
const myMap = new Map();
myMap.set("name", "Andrew");


console.log(myMap.has("age"));

myMap.set("name", "John");
console.log(myMap.get("name"));

// this is done for the first request asking for response
myMap.set("request", "response");
