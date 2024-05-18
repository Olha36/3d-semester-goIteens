const footballWrapper = document.querySelector('.football-wrapper');
const ball = document.querySelector('.ball');

function playFootball(event) {
  let newPositionLeft = event.clientX - footballWrapper.getBoundingClientRect().left;
  let newPositionTop = event.clientY - footballWrapper.getBoundingClientRect().top;
  let currentLeft = parseInt(ball.style.left || 0, 10);
  let currentTop = parseInt(ball.style.top || 0, 10);
  let distance = Math.sqrt(Math.pow(newPositionLeft - currentLeft, 2) + Math.pow(newPositionTop - currentTop, 2));
  let duration = distance / 200;

  ball.style.transition = `transform ${duration}s linear, left ${duration}s linear, top ${duration}s linear`;
  ball.style.left = newPositionLeft - ball.offsetWidth / 2 + 'px';
  ball.style.top = newPositionTop - ball.offsetHeight / 2 + 'px';

  let rotationAngle = (distance / ball.offsetWidth) * 360;
  ball.style.transform = `rotate(${rotationAngle}deg)`;
}

function changeColor() {
  let colors = ['#159ec6', '#0c728f', '#45c4e9'];
  let index = 0;

  setInterval(() => {
    footballWrapper.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 3000);
}

changeColor();
footballWrapper.addEventListener('click', playFootball);





