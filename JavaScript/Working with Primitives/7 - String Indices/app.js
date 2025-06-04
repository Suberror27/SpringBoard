const stringToCheck = "Abraham_Camargo_26";

console.log(stringToCheck.length) // Will log 18

console.log(stringToCheck[stringToCheck.length - 1]);

const newString = stringToCheck[0] = "E" + stringToCheck;

console.log(newString);