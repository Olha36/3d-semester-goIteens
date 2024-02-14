const dino = document.querySelector('.dino');
// console.log(dino);

const cactus = document.querySelector('.cactus');
const startGame = document.querySelector('.start-game');


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
  console.log(dinoPosition);
  const cactusPosition = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
  console.log(cactusPosition);

  if(cactusPosition < 50 && cactusPosition >= 0 && dinoPosition >= 140) {
    // alert('Game over');
    const newP = document.createElement('p');
    const pContent = 'Гра закінчена!';
    newP.appendChild(pContent);
  }
}, 10)


document.addEventListener("keydown", function(event) {
  jump();
})

startGame.addEventListener('click', function() {
 slide()
})