// function fn1(cb) {
//   cb();// this is a callback function}
// }

// function fn2() {
//   console.log('This is function 2');
// }

// fn1(fn2);


// function greet(argument, cb) {
//   cb(argument);
// }

// function fn2(name) {
//   console.log('Hi, ' + name);
// }

// greet('Lena', fn2);



function greet(argument, cb) {
  return cb(argument);
}

function casual(name) {
  return 'Hi, ' + name;
}

function warm(name) {
  return 'Hello, ' + name;
}

function bro(name) {
  return 'Yo, ' + name;
}

greet('Lena', casual); // declarative code for greeting Lina casually
greet('Lena', warm);