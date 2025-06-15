const test = ["Abraham", "Camargo", "Trujillo"];
const tempTest = [4, 5, 6];
test[2] = "T.";
test[1] = "C."
const test2 = [26, "Walmart", true, null, undefined, {fullName: test[0] + " " + test[1] + " " + test[2]}, [1, 2, 3]];

// const sortedTest2 = test2.sort(); //Odd way of sorting all elements by default converting them to strings and then sorting based on the string values
// Ok with sorting arrays of only strings!

console.log(sortedTest2);

const arr = [1, 2, 3];

// Functions that are passed in as parameters are called call back functions

// Call back function ASCENDING ORDER
function asc_comparator(num1, num2) {
  // negative number --> num2 will be before num1
  if (num2 > num1) return -1;
  // positive number --> num1 will be before num2
  else if (num1 > num2) return 1;
  // zero --> num1 will be at the same level of num2
  else return 0;
}

// Call back function DESCENDING ORDER
function desc_comparator(num1, num2) {
  // negative number --> num2 will be before num1
  if (num2 > num1) return 1;
  // positive number --> num1 will be before num2
  else if (num1 > num2) return -1;
  // zero --> num1 will be at the same level of num2
  else return 0;
}

arr.sort(desc_comparator); // sort method automatically passes in the required arguments to the call back function
// console.log(arr);

const names = ["Andrew", "John", "Abraham"];

const desc_str_comparator = (name1, name2) => {

    //localeCompare returns: z > a
    const order = name1.localeCompare(name2);

    // 1 if string1 is greater (higher in the alphabetical order) than string2
    if (order > 0) return -1;
    // a > z
    // -1 if string1 is smaller (lower in the alphabetical order) than string2
    else if (order < 0) return 1;
    // 0 if string1 and string2 are equal in the alphabetical order
    else return 0;
};

names.sort(desc_str_comparator);
// console.log(names);

// return true --> it's ok
// return false --> this item will be removed from the ending result arr
const filterEvenNumbers = (num) => {
   if (num % 2 === 0) {
     return false;
   }
  return true;
}

console.log(arr.filter(filterEvenNumbers));


