function printSquare(size) {
  let grid = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid += "#";
    }
    grid += "\n";
  }
  console.log(grid);
}

//printSquare(10)

function printBox(width, height) {
  let grid = "";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i === 0 || i === height - 1) {
        grid += "#";
      } else if (j === 0 || j === width - 1) {
        grid += "#";
      } else {
        grid += " ";
      }
    }
    grid += "\n";
  }
  console.log(grid);
}

//printBox(8,6)

function printBanner(yourString) {
  let grid = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < yourString.length + 4; j++) {
      if (i === 0 || i === 2) {
        grid += "#";
      } else {
        grid += `# ${yourString} #`;
        break;
      }
    }
    grid += "\n";
  }
  console.log(grid);
}

//printBanner("Welcome to DigitalCrafts")

function sumNumbers(yourArray) {
  let sum = 0;
  for (let i = 0; i < yourArray.length; i++) {
    sum += yourArray[i];
  }
  console.log(sum);
}

//sumNumbers([1,4,8])

function positiveNumbers(yourArray) {
  postitiveArray = [];
  for (let i = 0; i < yourArray.length; i++) {
    const element = yourArray[i];
    if (element > 0) {
      postitiveArray.push(element);
    }
  }
  console.log(postitiveArray);
}

//positiveNumbers([1, -3, 5, -3, 0])

function matrixAdd(array1, array2) {}

matrixAdd(
  [
    [1, 3],
    [2, 4],
  ],
  [
    [5, 2],
    [1, 0],
  ]
);

// [[6, 5], [3, 4]]

function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    console.log("draw");
  } else if (player1 === "rock" && player2 === "scissors") {
    console.log("player 1 wins");
  } else if (player1 === "scissors" && player2 === "paper") {
    console.log("player 1 wins");
  } else if (player1 === "paper" && player2 === "rock") {
    console.log("player 1 wins");
  } else {
    console.log("player 2 wins");
  }
}

// rockPaperScissors('rock', 'scissors')
// rockPaperScissors('rock', 'paper')
// rockPaperScissors('paper', 'paper')

function ticTacToe(board) {
  let diagLeftO = board[0][0] && board[1][0] && board[2][0] === "0";
  if (diagLeftO) {
    console.log("o wins!");
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let element = board[i][j];
      let diagLeftO = board[0][0] && board[1][0] && board[2][0];
      if (diagLeftO === "0") {
        console.log("o wins!");
        break;
      }
    }
  }
}

ticTacToe([
  ["0", null, null],
  ["0", null, null],
  ["0", null, null],
]);

const add = (x, y) => {
  return x + y;
};

const sub = (x, y) => {
  return x - y;
};

const mul = (x, y) => {
  return x * y;
};

const div = (x, y) => {
  return x / y;
};

const apply = (a, b, fn) => {
  const val = fn(a, b);
  return val;
};

const reduce = (arr, fn) => {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
};
const square = (z) => {
  return z * z;
};

const map = (arr, fn) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const r6 = map(nums, square)

const filter = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }
};

const isEven = (val) => {
  return val % 2 === 0;
};

const coldCities = (arr) => {
  result = [];
  arr.forEach((element) => {
    if (element.temperature < 70) {
      result.push(element);
    }
  });
  return result;
};

var cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 },
];

//let cc = coldCities(cities)

//console.log(cc)

const posNum = (arr) => {
  p = [];
  arr.forEach((e) => {
    if (e > 0) {
      p.push(e);
    }
  });
  return p;
};

newnums = [4, 3, 5, -54, -5, -4];

//   let pp = posNum(newnums)
//   console.log(pp)

const sqNum = (arr) => {
  sq = [];
  arr.forEach((e) => {
    sq.push(e * e);
  });
  return sq;
};

let ss = sqNum(newnums);
console.log(ss);

const cityNames = (arr) => {
  result = [];
  arr.forEach((element) => {
    result.push(element.name);
  });
  return result;
};

// let names = cityNames(cities)
// console.log(names)

var people = [
  "Dom",
  "Lyn",
  "Kirk",
  "Autumn",
  "Trista",
  "Jesslyn",
  "Kevin",
  "John",
  "Eli",
  "Juan",
  "Robert",
  "Keyur",
  "Jason",
  "Che",
  "Ben",
];

const goodJob = (names) => {
  names.forEach((e) => {
    console.log(`Good job, ${e}`);
  });
};

//goodJob(people)

const nameSort = (names) => {
  names.sort();
  return names;
};

//   let sorted = nameSort(people)
//   console.log(sorted)

const nameSortByLength = (names) => {
  names.sort(function (a, b) {
    return a.length - b.length;
  });
  return names;
};

// let sorted = nameSortByLength(people)
// console.log(sorted)

const fun = () => {
  console.log("Hello World!");
};

function call3Times(fun) {
  fun();
  fun();
  fun();
}

//let f = call3Times(fun)
// console.log(f)

function leetspeak(string) {
  stringArray = string.split("");
  for (let i = 0; i < stringArray.length; i++)
    switch (stringArray[i]) {
      case "a":
      case "A":
        stringArray[i] = "4";
        break;
      case "e":
      case "E":
        stringArray[i] = "3";
        break;
      case "g":
      case "G":
        stringArray[i] = "6";
        break;
      case "i":
      case "I":
        stringArray[i] = "1";
        break;
      case "o":
      case "O":
        stringArray[i] = "0";
        break;
      case "s":
      case "S":
        stringArray[i] = "5";
        break;
      case "t":
      case "T":
        stringArray[i] = "7";
        break;
    }
  console.log(stringArray.join(""));
}

leetspeak("Leet");
leetspeak("AaEeGgiItT");
