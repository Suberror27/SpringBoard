// Object literal
const testObject = {
    name: "Abraham Camargo",
    age: 26,
    jobTitle: "Data Systems Administrator",
    company: "Walmart",
    currentlyEmployed: true,
    isAdmin: false,
};

const stringMessage = `${testObject.name} is ${testObject.age}, he currently works for ${testObject.company} as a ${testObject.jobTitle}. 
He is currently ${testObject.currentlyEmployed == true ? "employed" : "unenployed"}`;

testObject.isAdmin = true;

console.log(testObject.isAdmin);

console.log(stringMessage);