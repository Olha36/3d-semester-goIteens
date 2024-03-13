const numberOne = document.querySelector('.enter-number-one');
const numberTwo = document.querySelector('.enter-number-two');
const numberThree = document.querySelector('.enter-number-three');
const highestNumber = document.querySelector('.find-biggest');

highestNumber.addEventListener('click', function() {
  const getFirstValue = Number.parseInt(numberOne.value);
  const getSecondValue = Number.parseInt(numberTwo.value);
  const getThirdValue = Number.parseInt(numberThree.value);
  const highest = Math.max(getFirstValue, getSecondValue, getThirdValue);

  document.querySelector('.your-number').textContent = `(${highest})`;
  numberOne.value = '';
  numberTwo.value = '';
  numberThree.value = '';
})
