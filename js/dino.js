const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const startGameBtn = document.querySelector(".start-game");
const resetBtn = document.querySelector(".reset-game");
const gameOverMessage = document.querySelector(".game-over");
let intervalID = null;

function startGame() {
  if (!intervalID) {
    intervalID = setInterval(getIntersections, 10);
  }
  cactusRunner();
}

function stopGame() {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
  }
  cactus.classList.remove("slide");
}

function jump(event) {
  if (event.key == " " || event.key == "Spacebar" || event.type === "touchstart") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
}

function cactusRunner() {
  if (cactus.classList != "slide") {
    cactus.classList.add("slide");
  }
}

function getIntersections() {
  const dinoRect = dino.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();
  const isDinoBefore = cactusRect.left < dinoRect.right;
  const isDinoAbove = cactusRect.top < dinoRect.bottom;

  if (isDinoBefore && isDinoAbove) {
    gameOverMessage.textContent = "Game is over";
    stopGame();
  }
}

function resetOperation() {
  stopGame();
  startGame();
  gameOverMessage.textContent = "";
}

document.addEventListener('touchstart', jump);
document.addEventListener("keydown", jump);
startGameBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetOperation);
