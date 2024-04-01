const computerScoreTextElement = document.querySelector('.computer-score');
const userScoreTextElement = document.querySelector('.user-score');
const showWinner = document.querySelector('.winner');
const showComputerChoice = document.querySelector('.computer-variant');

let userScore = 0;
let computerScore = 0;

function updateComputerScore() {
  computerScoreTextElement.textContent = computerScore;
}

function updateUserScore() {
  userScoreTextElement.textContent = userScore;
}

function showTextContent() {
  this.textContent = `${computerChoice}`;
  this.textContent = `Варіант комп’ютера`
}



function play(userChoice) {
  const computerChoices = ['камінь', 'ножиці', 'папір'];
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  if((userChoice === 'камінь' && computerChoice === 'ножиці') ||
     (userChoice === 'ножиці' && computerChoice === 'папір') ||
     (userChoice === 'папір' && computerChoice === 'камінь')) {
      showWinner.textContent = 'Ви виграли раунд!'
      showWinner.style.color = '#039900';
      userScore++;
      updateUserScore();
  } else if (userChoice === computerChoice) {
    showWinner.textContent = `Нічия!`
    showWinner.style.color = 'black';
  } else {
    showWinner.textContent = `Комп'ютер виграв раунд!`
    showWinner.style.color = 'red';
    computerScore++;
    updateComputerScore();
  }

  function displayComputerChoice() {
    showComputerChoice.textContent = `${computerChoice}`;
  }
  
  function resetComputerChoice() {
    showComputerChoice.textContent = `Варіант комп’ютера`;
  }

  showComputerChoice.addEventListener('click', displayComputerChoice);
  showComputerChoice.addEventListener('blur', resetComputerChoice);

}

