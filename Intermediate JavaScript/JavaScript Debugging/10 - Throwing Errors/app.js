// console.log("I am before the error");
// throw "I am the error";
// console.log("I am after the error");

// try {
//     // throw new Error("I am the error");
//     throw new TypeError("I am a TypeError");
// } catch (error) {
//     // console.log("There was an error", error);
//     // console.dir(error);
//     console.log("what kind of error? ", error.name);
//     console.log("what is the message? ", error.message);
//     console.log("where did it happen? ", error.stack);
// }

function DateError(message) {
  this.message = message;
  this.name = 'DateError';
}

function getMonthName(mo) {
  if (typeof mo !== 'number') {
    throw new DateError("Month number must be a number!")
  }
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new DateError("Month out of bounds")
  }
}

// console.log(getMonthName(10));

try {
  getMonthName('asda');
} catch (e) {
  console.log("ERROR:", e)
}