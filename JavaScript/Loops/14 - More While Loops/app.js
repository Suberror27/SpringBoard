let target = Math.floor(Math.random() * 100);
// console.log(target);

let guess = Math.floor(Math.random() * 100);
// console.log(guess);

while(guess !== target){
    console.log(`Your guess was ${guess} and the target was ${target}.`)
    guess = Math.floor(Math.random() * 100);
    target = Math.floor(Math.random() * 100);
};

console.log(`You got it! Your guess was ${guess} and the target was ${target}`);