const buttonGroup = document.querySelectorAll('.button-group');
const firstNum = document.querySelector('.first-number');
const secondNum = document.querySelector('.second-number');
const resultButton = document.querySelector('.result');


let currentOperation = 'number';


document.querySelector('.addition').addEventListener('click', function() {
  currentOperation = 'addition';
})

document.querySelector('.subtraction').addEventListener('click', function() {
  currentOperation = 'subtraction';
})

document.querySelector('.multiplication').addEventListener('click', function() {
  currentOperation = 'multiplication';
})

document.querySelector('.division').addEventListener('click', function() {
  currentOperation = 'division';
})

document.querySelector('.equals').addEventListener('click', function() {
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
  } else {
  }
})

firstNum.addEventListener('input', function() {
  currentOperation = 'number';
})

document.querySelector('.reset').addEventListener('click', function() {
  firstNum.value = '';
  secondNum.value = '';
  resultButton.textContent = '';
})