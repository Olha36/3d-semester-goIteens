// to do

// 1. get input value
// 2. get search button
// 3. add EventListener on search button
// 4. when search button is clicked, input value shall convert number entered from minutes to hours
// 5. 1hour = 60 minutes. We shall divide input number by 60.
// 6. get number remaider with the help of '%'
// 7. empty the value after getting time in hours

const time = document.querySelector('.time');
const timeInput = document.querySelector('.find-time');
const showTime = document.querySelector('.show-time');


timeInput.addEventListener('click', function() {
  const timeValue = Number.parseInt(time.value);
  showTime.textContent = Math.round(timeValue / 60) + ':' + (timeValue % 60);
  time.value = '';
})

