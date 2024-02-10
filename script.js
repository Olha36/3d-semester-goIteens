document.querySelector('.more-button').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});

document.querySelector('.interactive-group img').addEventListener('click', function () {
  document.querySelector('.interactive-modal').classList.toggle('interactive-active');
})

document.querySelector('.more-button-list-item img').addEventListener('click', function () {
  document.querySelector('.interactive-modal').classList.toggle('interactive-active');
})

document.querySelector('.switcher-circle-day').addEventListener('click', function () {
  console.log('hi day button');
  document.querySelector('.switcher-circle-night').classList.toggle('switcher-active'); 
  document.querySelector('.switcher-circle-day').classList.toggle('switcher-non-active');
})

document.querySelector('.switcher-circle-night').addEventListener('click', function () {
  console.log('hi night button');
  document.querySelector('.switcher-circle-day').classList.toggle('switcher-active'); 
  document.querySelector('.switcher-circle-day').style.opacity='1'
  document.querySelector('.switcher-circle-night').classList.toggle('switcher-non-active');
})




