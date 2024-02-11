document.querySelector('.search-number').addEventListener('click', function() {
  let inputGuessNumber = parseInt(document.querySelector('.guess-wrapper input').value);
  console.log(inputGuessNumber);

  // Clear the input field
  document.querySelector('.guess-wrapper input').value = "";

  function randomNum() {
      return Math.round(Math.random() * (100 - 1) + 1);
  }

  let guessNumber = randomNum();
  console.log(guessNumber);

  if (guessNumber === inputGuessNumber) {
      document.querySelector('.number-content').textContent = `Ви виграли! Число - ${guessNumber}`;
      document.querySelector('.number-content').style.color = '#039900';
  } else {
      document.querySelector('.number-content').textContent = `Ви програли! Число - ${guessNumber}`;
      document.querySelector('.number-content').style.color = 'red';
  }
  
});
