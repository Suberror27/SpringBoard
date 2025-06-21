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
   if (students[i].name === "Nathan") {
        console.log(`The student: ${students[i].name} has a position of ${students[i].position}, and is ${students[i].age} years old.`);
        break;
   } else {
        console.log(`The student: ${students[i].name} has a position of ${students[i].position}, and is ${students[i].age} years old.`);
   }
};



let target = Math.floor(Math.random() * 100);
// console.log(target);

let guess = Math.floor(Math.random() * 100);
// console.log(guess);

while(true){
    if(target == guess) {
        console.log(`Your guess was ${guess} and the target was ${target}.`)
        break
    } else {
        console.log(`Your guess was ${guess} and the target was ${target}.`)
        guess = Math.floor(Math.random() * 100);
        target = Math.floor(Math.random() * 100);
    }
};
