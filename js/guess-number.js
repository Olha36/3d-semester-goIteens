const searchIcon = document.querySelector('.search-number');
const guessNumberInput = document.querySelector('.guess-wrapper input');
const showResultParagraph = document.querySelector('.number-content');
const resetButton = document.querySelector('.play-again');

let randomNumber = randomNum();

function randomNum() {
    return Math.round(Math.random() * (100 - 1) + 1);
}

function resetGame() {
    randomNumber = randomNum();
    showResultParagraph.textContent = "";
    showResultParagraph.style.color = 'black';
}

function checkGuessedNumber() {
    let guessNumberValue = parseInt(guessNumberInput.value);
    guessNumberInput.value = "";
  
    if (randomNumber === guessNumberValue) {
      showResultParagraph.textContent = `Ви виграли! Число - ${randomNumber}`;
      showResultParagraph.style.color = '#039900';
    } else {
      showResultParagraph.textContent = `Ви програли! Число - ${randomNumber}`;
      showResultParagraph.style.color = 'red';
    }
}

searchIcon.addEventListener('click', checkGuessedNumber);
resetButton.addEventListener('click', resetGame);

