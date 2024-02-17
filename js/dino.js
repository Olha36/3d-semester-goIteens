const dino = document.querySelector('.dino');
// console.log(dino);

const cactus = document.querySelector('.cactus');
const startGame = document.querySelector('.start-game');
const reset = document.querySelector('.reset-game');

function jump() {
  if(dino.classList != "jump") {
    dino.classList.add('jump');
  }
  setTimeout(function () {
    dino.classList.remove('jump');
  }, 300)
}

function slide() {
  if(cactus.classList != 'slide') {
    cactus.classList.add('slide');
  }
}


const isAlive = setInterval(function() {
  const dinoPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  const cactusPosition = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if(cactusPosition < 50 && cactusPosition >= 0 && dinoPosition >= 140) {
    document.querySelector('.game-over').textContent = 'Game is over';
    document.querySelector('.slide').classList.remove('slide');
  }

}, 10)

document.addEventListener("keydown", function(event) {
  if(event.key == ' ' || event.key == 'Spacebar') {
    jump();
  }
 
})

startGame.addEventListener('click', function() {
 slide();
})

reset.addEventListener('click', function() {
  slide();
  document.querySelector('.game-over').textContent = '';
})