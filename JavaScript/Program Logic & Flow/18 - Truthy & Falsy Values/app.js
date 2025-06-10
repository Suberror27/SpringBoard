// let mystery = 5;         Truthy!
// let mystery = true;      Truthy!
// let mystery = -1;        Truthy!
// let mystery = 0;         Falsy!
// let mystery = NaN;       Falsy!
// let mystery = false;     Falsy!
// let mystery = "";        Falsy!
// let mystery = "Abraham"; Truthy!
// let mystery = "-A"; T    ruthy!

if (mystery) {
    console.log("Truthy!");
} else {
    console.log("Falsy!")
};

// strings
const name = "Andrew";
const title = "";
// number any number other than 0 is truthy
const nums = [10, 0, -1];
// boolean
// objects
const obj = null;
// arrays
const arr = [];
console.log(Boolean(name));
console.log(Boolean(title));
console.log("nums[0]", Boolean(nums[0]));
console.log("nums[1]", Boolean(nums[1]));
console.log("nums[2]", Boolean(nums[2]));
if (Boolean(nums[1]) === false) {
  console.log("condition mets")
}
if (!nums[1]) {
  console.log("Hello")
}
console.log("checking obj", Boolean(obj));
console.log("checking arr", Boolean(arr));