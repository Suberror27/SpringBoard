function sum(){
    return Array.from(arguments).reduce((sum, val) => {
        return sum + val;
    })
};

console.log(sum(1,2,3,4,5));

const max = function() {
    const args = Array.from(arguments);
    return args.reduce((max, currVal) => {
        return currVal > max ? currVal: max;
    })
};

console.log(max(5,7,9,27))