const footballWrapper = document.querySelector('.football-wrapper');
const ball = document.querySelector('.ball');

function playFootball(event) {
  let newPositionLeft = event.clientX - footballWrapper.getBoundingClientRect().left;
  let newPositionTop = event.clientY - footballWrapper.getBoundingClientRect().top;

  ball.style.top = newPositionTop - 25 + 'px'
  ball.style.left = newPositionLeft - 25 + 'px';
  ball.style.transition = 'transform 0.5s ease';
}

function changeColor() {
  let colors = ['#159ec6','#0c728f', '#45c4e9']; //
  let index = 0;

  colors.forEach((color, i) => {
      setInterval(() => {
      footballWrapper.style.backgroundColor = color;
      index = (index + 1) % colors.length;
      
    }, 3000 * (i + 1));
  });

}
changeColor();
footballWrapper.addEventListener('click', playFootball);




