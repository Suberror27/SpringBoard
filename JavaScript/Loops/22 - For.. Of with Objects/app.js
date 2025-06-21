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
 