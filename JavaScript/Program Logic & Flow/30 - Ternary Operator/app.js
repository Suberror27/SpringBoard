const age = 26;
const userName = "Abraham";
const biyuyo = 4850

const result = age >= 26 ? "He is old!" : "He is still young!";

console.log(result);

let loggedStatus = false;

loggedStatus = Boolean(userName) && age > 18 || Boolean(userName) && biyuyo > 5000 ? true : false;

console.log(loggedStatus);

