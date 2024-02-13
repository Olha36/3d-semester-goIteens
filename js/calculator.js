const buttonGroup = document.querySelectorAll('.button-group');
console.log(buttonGroup);

const firstNum = document.querySelector('.first-number');
const secondNum = document.querySelector('.second-number');

let currentOperation = 'number';


document.querySelector('.addition').addEventListener('click', function() {
  currentOperation = 'addition';
})

document.querySelector('.subtraction').addEventListener('click', function() {
  currentOperation = 'subtraction';
})

document.querySelector('.equals').addEventListener('click', function() {
  let result;
  if  (currentOperation === 'addition') {
    result = Number(firstNum.value) + Number(secondNum.value);
    console.log(result);
    document.querySelector('.result').textContent = result;
  } else if(currentOperation === 'subtraction') {
    result = Number(firstNum.value) - Number(secondNum.value);
    console.log(result);
    document.querySelector('.result').textContent = result;
  } else {
    console.log('not working yet');
  }
  // const result = Number(firstNum.value) + Number(secondNum.value);
  // document.querySelector('.result').textContent = result;
})