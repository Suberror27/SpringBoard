
function sum(...nums) {
    return nums.reduce((sum, n) => sum + n);
};

console.log(sum(1,2,3,4));

const sumAll = (...values) => {
    if(!values.length) return undefined
    return values.reduce((sum, n) => sum + n)
}

console.log(sumAll(2772,8832))

// function makeFamily(parent1, parent2, ...kids) {
//     console.log("Parents are: " + parent1 + " & " + parent2);
//     console.log("Kids are: " + kids);
// };

function makeFamily(parent1, parent2, ...kids) {
    return {
        parents: [parent1, parent2],
        Children: kids.length ? kids : 0,
    };
};

console.log(makeFamily("Abraham", "Itzel", "Jr", "Sydney"));

const filterByType = (type, ...vals) => {
    return vals.filter(v => typeof(v) === type);
};

console.log(filterByType('boolean', 23, 27, true, false, true, true, false, 'Hello', 'Abraham'));

function printStuff(a, ...rest) {
    
}