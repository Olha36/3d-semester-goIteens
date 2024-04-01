const time = document.querySelector('.time');
const timeInput = document.querySelector('.find-time');
const showTime = document.querySelector('.show-time');

function showTimeInHours() {
  const timeValue = Number.parseInt(time.value);
  showTime.textContent = Math.round(timeValue / 60) + ':' + (timeValue % 60);
  time.value = '';
}

timeInput.addEventListener('click', showTimeInHours);

