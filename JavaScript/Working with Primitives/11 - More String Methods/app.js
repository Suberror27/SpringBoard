const stringToCheck = " Abraham_Camargo_26 ";

const stringToCheckIndex = stringToCheck.indexOf("26"); 

const stringToCheckSliced = stringToCheck.slice(9);

const stringToCheckSliced2 = stringToCheck.slice(1,8);

const stringToCheckReplace = stringToCheck.replace("Camargo", "Trujillo").trim();

console.log(stringToCheckIndex); // Logs 17

console.log(stringToCheckSliced); // Logs "Camargo_26" (we are asking it to slice a pieace of the string starting from index 9 to the end)

console.log(stringToCheckSliced2); // Logs "Abraham" (We are asking it to slice a pice of the string starting from index 1 to index 8)

console.log(stringToCheckReplace); // Logs "Abraham_Trujillo_26" without any empty spaces