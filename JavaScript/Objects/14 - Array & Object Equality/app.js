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

const nums = [1, 2, 3];

const nums2 = testObject.nested.testArray;

const nums3 = [];

console.log(Boolean(testObject.nested.testArray === nums2));

if (nums3.length === 0) console.log("Empty array")
else console.log("Array has some values!");