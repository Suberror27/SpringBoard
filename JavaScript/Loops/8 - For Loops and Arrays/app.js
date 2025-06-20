const testArray = ["Hello", "My", "Name", "Is", "Abraham", "Camargo", "Trujillo"];

const students = [
    {
        name: "Abraham",
        position: "Data Systems Admin",
        age: 26
    },
    {
        name: "Itzel",
        position: "Store Associate",
        age: 24
    },
    {
        name: "Kevin",
        position: "Software Developer",
        age: 29
    },
    {
        name: "Nathan",
        position: "Data Systems Admin",
        age: 31
    },
    {
        name: "Chitra",
        position: "Systems Manager",
        age: 41
    },
]

// for (let i = 0; i < testArray.length; i++) {
//     console.log(`Index ${i} on the array = ` + testArray[i]);
// };

for (let i = 0; i < students.length; i++) {
    console.log(`The student: ${students[i].name} has a position of ${students[i].position}, and is ${students[i].age} years old.`);
};