const firstNum = document.querySelector('.first-number');
const secondNum = document.querySelector('.second-number');
const resultButton = document.querySelector('.result');
const additionButton = document.querySelector('.addition');
const subtractionButton = document.querySelector('.subtraction');
const multiplicationButton = document.querySelector('.multiplication');
const divisionButton = document.querySelector('.division');
const equalsButton = document.querySelector('.equals');
const resetButton = document.querySelector('.reset');

let currentOperation = 'number';

function differentiateOperation() {
  currentOperation = 'number';
}

function additionOperation() {
  currentOperation = 'addition';
}

function subtractionOperation() {
  currentOperation = 'subtraction';
}

function multiplicationOperation() {
  currentOperation = 'multiplication';
}

function divisionOperation() {
  currentOperation = 'division';
}

function calculatorOperations() {
  if  (currentOperation === 'addition') {
    let result = Number(firstNum.value) + Number(secondNum.value);
    resultButton.textContent = result;
  } else if(currentOperation === 'subtraction') {
    let result = Number(firstNum.value) - Number(secondNum.value);
    resultButton.textContent = result;
  } else if(currentOperation === 'multiplication') {
    let result = Number(firstNum.value) * Number(secondNum.value);
    resultButton.textContent = result;
  } else if(currentOperation === 'division') {
    let result = Number(firstNum.value) / Number(secondNum.value);
    resultButton.textContent = result;
  } 
}

function resetOperation() {
  firstNum.value = '';
  secondNum.value = '';
  resultButton.textContent = '';
}

additionButton.addEventListener('click', additionOperation);
subtractionButton.addEventListener('click', subtractionOperation);
multiplicationButton.addEventListener('click', multiplicationOperation);
divisionButton.addEventListener('click', divisionOperation);
equalsButton.addEventListener('click', calculatorOperations);
firstNum.addEventListener('input', differentiateOperation);
resetButton.addEventListener('click', resetOperation);