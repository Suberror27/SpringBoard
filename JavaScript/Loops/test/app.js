for (let i = 1; i < 5; i++) {
  if (i > 2 && i < 4) {
    continue;  // skip these numbers!
  }
  console.log(i);
}

const ticTacToe = [
  ["X", "O", "X"],
  ["X", "O", "O"],
  ["X", "O", "X"]
];

let xCount = 0;

for(let i = 0; i < ticTacToe.length; i++){
  for(let j = 0; j < ticTacToe[i].length; j++){
    if(ticTacToe[i][j] === "X"){
      xCount++;
    }
  }
}

console.log(xCount);