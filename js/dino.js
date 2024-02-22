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


// const isAlive = setInterval(function() {
//   const dinoPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
//   const cactusPosition = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

//   if(cactusPosition < 50 && cactusPosition >= 0 && dinoPosition >= 120) {
//     document.querySelector('.game-over').textContent = 'Game is over';
//     document.querySelector('.cactus').classList.remove('slide');
//     console.log('cactus position in < 50');
//   }

// }, 10)

const isAlive = setInterval(function() {
  const dinoRect = dino.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();

  if (cactusRect.left < dinoRect.right &&
    cactusRect.right > dinoRect.left &&
    cactusRect.top < dinoRect.bottom &&
    !dino.classList.contains('jump')) {
  document.querySelector('.game-over').textContent = 'Game is over';
  document.querySelector('.cactus').classList.remove('slide');
  console.log('game is over');
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

