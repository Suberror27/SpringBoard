const colors = ["Red", "Blue", "Yellow", "Orange", "Purple"];

function logColor(color, i) {
    const caps = color.toUpperCase();
    console.log(`At Index ${i} we have color: ${caps}`)
};

colors.forEach(logColor);

const prices = [30, 99, 26, 10, 7];

let total = 0;

// prices.forEach((price) => {
//     total += price
// });

for (let price of prices) {
    total += price;
};

console.log(`The total is = $${total}`);