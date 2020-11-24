'use strict';

const input = document.querySelector('#input'), // input/output button
 numbers = document.querySelectorAll('.numbers div'), // number buttons
  operators = document.querySelectorAll('.operators div'), // operator buttons
  result = document.querySelector('#result'), // equal button
  clear = document.querySelector('#clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed

let numbersArray = []
let opperatorArray = []

document.addEventListener('click', (event) => {
    if (event.target.innerHTML >= 0 || event.target.innerHTML < 10) {
        let number = parseInt(event.target.innerHTML)
        numbersArray.push(number)
    }
})

document.addEventListener('click', (event) => {
    let operator = event.target.innerHTML
    if (event.target.classList.contains('opp') && numbersArray.length === 0) {
        alert('Please pick a number before an operator')
    } else if (event.target.classList.contains('opp') && opperatorArray.includes(operator)) {
        alert('You can not use the same operator twice')
    } else {
        opperatorArray.push(operator)
    }
})

result.addEventListener('click' , (event) => {

})

function calculate (operators, numbers) {
    
}