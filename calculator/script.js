"use strict";

const input = document.querySelector("#input"), // input/output button
  numbers = document.querySelectorAll(".numbers div"), // number buttons
  operators = document.querySelectorAll(".operators div"), // operator buttons
  result = document.querySelector("#result"), // equal button
  clear = document.querySelector("#clear"); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed

let numbersArray = [];
let operatorArray = [];
let temporarySring = "";

function lastClickOperator(event) {
  if (event.target.classList.contains("opp")) {
    return true;
  } else {
    return false;
  }
}

document.addEventListener("click", handleNumberClick, true);

clear.addEventListener("click", clearCalculator);

result.addEventListener("click", (event) => {
  let result = calculate(numbersArray, operatorArray);
  input.innerHTML = result;
}),
  false;

document.addEventListener("click", (event) => {
  let opp = event.target.innerHTML;
  if (event.target.classList.contains("opp")) {
    operatorArray.push(opp);
    console.log(operatorArray);
  }
});

function clearCalculator() {
  numbersArray = [];
  operatorArray = [];
  input.innerHTML = "";
}

function handleNumberClick(event) {
  let lastClick = lastClickOperator(event);
  if (
    !lastClick &&
    (event.target.innerHTML >= 0 || event.target.innerHTML < 10)
  ) {
    temporarySring += event.target.innerHTML;
  } else {
    if (temporarySring === "") {
      return;
    } else {
      numbersArray.push(parseInt(temporarySring));
      temporarySring = "";
    }
  }
}

function calculate(numbers, operators) {
  for (let i = 0; i < numbers.length; i += 2) {
    let num1 = numbers[i];
    let num2 = numbers[i + 1];
    console.log("1 and 2", num1, num2);
    for (let j = 0; j < operators.length; j++) {
      const opp = operators[j];
      let result = "";
      switch (opp) {
        case "+":
          result += num1 + num2;
          return result;
        case "-":
          result += num1 - num2;
          return result;
        case "*":
          result += num1 * num2;
          return result;
        case "/":
          result += num1 / num2;
          return result;
      }
    }
  }
}


function calculate2 (numbers, operators) {

    while (operators === '+')
        

}