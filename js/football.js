const screenLog = document.querySelector('.screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  // screenLog.innerText = `Screen X/Y: ${e.screenX}, ${e.screenY}`;
  screenLog.innerText = `Client X/Y: ${e.screenX}, ${e.screenY}`;
  console.log('football');
}

