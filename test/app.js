// function takesFour(one, two, three, four) {
//     console.log(`Out of the array [${one}, ${two}, ${three}, ${four}];`)
//     console.log("One is: " + one);
//     console.log("Two is: " + two);
//     console.log("Three is: " + three);
//     console.log("Four is: " + four);
// }

// const names = ['Abraham', 'Camargo', 'Itzel', 'Luna'];

// takesFour(...names);
// // Mary
// // Colt
// // Angela
// // Abe

// const whiskeyTheDog = {
//   name: 'Whiskey',
//   species: 'canine',
//   cool: true,
// };

// // make a new dog but override the 'name' key
// const gandalfTheDog = { ...whiskeyTheDog, name: 'Gandalf' };

// console.log(gandalfTheDog);

// This is considered a shallow copy.
// copy only copies the outer array, the inner arrays are still pointing to the same inner arrays than collection (pointing to the same place in memory)
let odds = [1,3,5]
let evens = [2,4,6]

let collection = [odds, evens]

console.log(collection);

let copy = [...collection]

console.log(collection[0][0]) // 1

copy[0][0] = "REPLACED!"

console.log(collection[0][0]) // "REPLACED"

// If you want a deep copy, where both the outer and inner arrays are duplicated, you can do something like:

let deepCopy = collection.map(arr => [...arr]);

///Andrew examples 8/24/2025
// rest operator
const arr = [1, 2,3,4,5];
const obj = {
  name: "Andrew",
  age: 30,
  bio: "What ever goes heerre"
}

const [first, second, ...rest] = arr;

const newArr = [first, ...rest];

const {name, ...restOfObj} = obj;
console.log(rest, newArr);
console.log(restOfObj);