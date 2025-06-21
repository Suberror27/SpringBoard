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

// for (let alumno = 0; alumno < students.length; alumno++) {
//     console.log(students[alumno].name);
// };

for (let alumno of students) {
    console.log(alumno.name[0] + alumno.name[1]);
};