let userScore = 0;
let computerScore = 0;

document.querySelector('.computer-score').textContent = computerScore;
document.querySelector('.user-score').textContent = userScore;

function updateComputerScore() {
  document.querySelector('.computer-score').textContent = computerScore;
}

function updateUserScore() {
  document.querySelector('.user-score').textContent = userScore;
}

function play(userChoice) {
  const computerChoices = ['stone', 'scissors', 'paper'];

  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  if((userChoice === 'stone' && computerChoice === 'scissors') ||
     (userChoice === 'scissors' && computerChoice === 'paper') ||
     (userChoice === 'paper' && computerChoice === 'stone')) {
      document.querySelector('.winner').textContent = 'Ви виграли раунд!'
      document.querySelector('.winner').style.color = '#039900';
      userScore++;
      updateUserScore();
      console.log(`user has won! Computer chose: ${computerChoice}`);
  } else if (userChoice === computerChoice) {
    document.querySelector('.winner').textContent = `Нічия!`
    document.querySelector('.winner').style.color = 'black';
    console.log(`It's a tie! Computer chose: ${computerChoice}`);
  } else {
    document.querySelector('.winner').textContent = `Комп'ютер виграв раунд!`
    console.log(`computer has won! Computer chose: ${computerChoice}`);
    document.querySelector('.winner').style.color = 'red';
    computerScore++;
    updateComputerScore();
  }
  
  document.querySelector('.computer-variant').addEventListener('click', function() {
    this.textContent = `${computerChoice}`
  })
  document.querySelector('.computer-variant').addEventListener('blur', function() {
    this.textContent = `Варіант комп’ютера`
  })

}

