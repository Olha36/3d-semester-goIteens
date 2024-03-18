const guessNumberInput = document.querySelector('.search-number');

guessNumberInput.addEventListener('click', function() {
  let guessNumberValue = parseInt(guessNumberInput.value);

  document.querySelector('.guess-wrapper input').value = "";

  function randomNum() {
      return Math.round(Math.random() * (100 - 1) + 1);
  }

  let guessNumber = randomNum();

  if (guessNumber === guessNumberValue) {
      document.querySelector('.number-content').textContent = `Ви виграли! Число - ${guessNumber}`;
      document.querySelector('.number-content').style.color = '#039900';
  } else {
      document.querySelector('.number-content').textContent = `Ви програли! Число - ${guessNumber}`;
      document.querySelector('.number-content').style.color = 'red';
  }
  
});
