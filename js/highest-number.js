const numberOne = document.querySelector('.enter-number-one');
console.log(numberOne);

const numberTwo = document.querySelector('.enter-number-two');
console.log(numberTwo);

const numberThree = document.querySelector('.enter-number-three');
console.log(numberThree);

const highestNumber = document.querySelector('.find-biggest');

highestNumber.addEventListener('click', function() {
  const getFirstValue = Number.parseInt(numberOne.value);
  console.log(getFirstValue);
  const getSecondValue = Number.parseInt(numberTwo.value);
  console.log(getSecondValue);
  const getThirdValue = Number.parseInt(numberThree.value);
  console.log(getThirdValue);
  const highest = Math.max(getFirstValue, getSecondValue, getThirdValue);
  console.log(highest);

  document.querySelector('.your-number').textContent = `(${highest})`;
  numberOne.value = '';
  numberTwo.value = '';
  numberThree.value = '';
})
