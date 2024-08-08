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

    if (isNaN(guessNumberValue)) {
        showResultParagraph.textContent = 'Введіть будь-яке число від 1 до 100';
        showResultParagraph.style.color = 'black';
        guessNumberInput.value = "";
        return;  
    }

    guessNumberInput.value = "";

    if (randomNumber === guessNumberValue) {
        showResultParagraph.textContent = `Ви виграли! Число - ${randomNumber}`;
        showResultParagraph.style.color = '#039900';
    } else if(guessNumberValue >= 100) {
        showResultParagraph.textContent = 'Ви загадали число більше 100. Загадайте число в межах 1-100'
    } else if(guessNumberValue <= 0) {
        showResultParagraph.textContent = 'Ви загадали число менше 1. Загадайте число в межах 1-100'
    } else {
        showResultParagraph.textContent = `Ви програли! Число - ${randomNumber}`;
        showResultParagraph.style.color = 'red';
    }
}

function onInputChange() {
 showResultParagraph.textContent = '';
}

searchIcon.addEventListener('click', checkGuessedNumber);
resetButton.addEventListener('click', resetGame);
guessNumberInput.addEventListener('focus', onInputChange)

