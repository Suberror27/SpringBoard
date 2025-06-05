// ## Step 1 🧩 Generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's `Math` functions.
const randomDecimal = Math.random();

// ## Step 2 🧩 Determine the desired range of numbers for our secret shift value, which is between 3 and 33.
const desiredRange = 33 - 3 + 1; 

// ## Question 1 🤔 Why did we add 1 to the difference between 33 and 3?
// Not sure to be honest

// ## Step 3 🧩 Using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.
const adjustedDecimal = randomDecimal * desiredRange;

// ## Question 2 🤔 How does multiplying `randomDecimal` by `range` help us get a number within our desired range?
// We are multiplying the decimal by the range so the value falls into the range of 0 - range?

// ## Step 4 🧩 Round down the decimal number obtained in Step 3 to get a whole integer.
const roundedDown = Math.floor(adjustedDecimal);

// ## Question 3 🤔 Why do we use the `Math.floor()` function instead of other rounding methods like `Math.round()`?
// We are using Math.floor so the result of randomDecimal * desiredRange is rounded down to the integer

// ## Step 5 🧩 Adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.
const finalShiftValue = roundedDown + 3;

// ## Question 4 🤔 How does adding 3 to `randomInt` ensure that our final `shiftValue` is between 3 and 33?
// By adding the + 3 we make sure it always is at least 3 so it falls into the desired range
console.log(finalShiftValue);