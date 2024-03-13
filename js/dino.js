const dino = document.querySelector('.dino');
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
  const dinoRect = dino.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();

  if (cactusRect.left < dinoRect.right &&
    cactusRect.top < dinoRect.bottom &&
    !dino.classList.contains('jump')) {
  document.querySelector('.game-over').textContent = 'Game is over';
  document.querySelector('.cactus').classList.remove('slide');
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

startGame.addEventListener('touchstart', function() {
  jump();
})
reset.addEventListener('click', function() {
  slide();
  document.querySelector('.game-over').textContent = '';
})

