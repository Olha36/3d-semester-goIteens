const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const startGame = document.querySelector('.start-game');
const reset = document.querySelector('.reset-game');
const gameOver = document.querySelector('.game-over');

function removeJump() {
  dino.classList.remove('jump');
}

function jump() {
  if(dino.classList != "jump") {
    dino.classList.add('jump');
  }
  setTimeout(removeJump, 300)
}

function slide() {
  if(cactus.classList != 'slide') {
    cactus.classList.add('slide');
  } 
}

function getIntersections() {
  const dinoRect = dino.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();

  if (cactusRect.left < dinoRect.right &&
    cactusRect.top < dinoRect.bottom &&
    !dino.classList.contains('jump')) {
    gameOver.textContent = 'Game is over';
    cactus.classList.remove('slide');
  }
}

const isAlive = setInterval(getIntersections, 10);

function spaceBarKey(event) {
  if(event.key == ' ' || event.key == 'Spacebar') {
    jump();
  }
}

function resetOperation() {
  slide();
  gameOver.textContent = '';
}

document.addEventListener("keydown", spaceBarKey);
startGame.addEventListener('click', slide);
startGame.addEventListener('touchstart', jump);
reset.addEventListener('click', resetOperation);

