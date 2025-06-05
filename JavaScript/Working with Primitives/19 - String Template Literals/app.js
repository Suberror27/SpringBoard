const firstName = "Abraham";
const lastName = "Camargo";
const career = "Software Developer";

const stringTemplateLiterals = `My name is ${firstName.toUpperCase()} ${lastName.toUpperCase()}, \nI am ${13 + 13} years old, \nand I'm currently studying to become a \"${career.toUpperCase()}\".`

console.log(stringTemplateLiterals);