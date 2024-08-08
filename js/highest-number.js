const numberOne = document.querySelector('.enter-number-one');
const numberTwo = document.querySelector('.enter-number-two');
const numberThree = document.querySelector('.enter-number-three');
const highestNumber = document.querySelector('.find-biggest');
const showEnteredNumber = document.querySelector('.your-number');

function showHighestNumber() {
  const getFirstValue = Number.parseInt(numberOne.value);
  const getSecondValue = Number.parseInt(numberTwo.value);
  const getThirdValue = Number.parseInt(numberThree.value);
  const highest = Math.max(getFirstValue, getSecondValue, getThirdValue);

  showEnteredNumber.textContent = `(${highest})`;
  numberOne.value = '';
  numberTwo.value = '';
  numberThree.value = '';
}

highestNumber.addEventListener('click', showHighestNumber);
