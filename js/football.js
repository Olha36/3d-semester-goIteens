const footballWrapper = document.querySelector('.football-wrapper');
const ball = document.querySelector('.ball');

function playFootball(event) {
  let newPositionLeft = event.clientX - footballWrapper.getBoundingClientRect().left;
  let newPositionTop = event.clientY - footballWrapper.getBoundingClientRect().top;

  ball.style.top = newPositionTop - 25 + 'px'
  ball.style.left = newPositionLeft - 25 + 'px';
  ball.style.transition = 'transform 0.5s ease';
}

footballWrapper.addEventListener('click', playFootball);




