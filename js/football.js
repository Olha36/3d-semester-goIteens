const footballWrapper = document.querySelector('.football-wrapper');
const ball = document.querySelector('.ball');

function moveBall(x, y) {
  const footballRect = footballWrapper.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();

  // Calculate the maximum allowable position for the ball within the container bounds
  const maxX = footballRect.width - ballRect.width;
  const maxY = footballRect.height - ballRect.height;

  // Calculate the exact position where the ball should move within the container
  const targetX = x - footballRect.left - ballRect.width * 2;
  const targetY = y - footballRect.top - ballRect.height * 2;

  console.log('Target Position:', targetX, targetY); // Log target position

  // Ensure the new position is within the bounds of the container
  const boundedX = Math.min(Math.max(targetX, 0), maxX);
  const boundedY = Math.min(Math.max(targetY, 0), maxY);

  console.log('Bounded Position:', boundedX, boundedY); // Log bounded position

  ball.style.transition = 'transform 0.5s ease';
  ball.style.transform = `translate(${boundedX}px, ${boundedY}px)`;
}

function logKey(e) {
  moveBall(e.clientX, e.clientY);
}

footballWrapper.addEventListener('click', logKey);


