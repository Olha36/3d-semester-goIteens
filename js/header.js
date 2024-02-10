document.querySelector('.more-button').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});

document.querySelector('.interactive-group img').addEventListener('click', function () {
  document.querySelector('.interactive-modal').classList.toggle('interactive-active');
})

document.querySelector('.more-button-list-item img').addEventListener('click', function () {
  document.querySelector('.interactive-modal').classList.toggle('interactive-active');
})

document.querySelector('.switcher').addEventListener('click', function () {
  console.log('hi switcher');
  document.querySelector('.switcher-circle-night').classList.toggle('switcher-active'); 
  document.querySelector('.switcher-circle-day').classList.toggle('switcher-non-active'); 
  document.querySelector('.switcher-modal').classList.toggle('modal-active'); 
})

document.querySelector('.cross-menu').addEventListener('click', function() {
  document.querySelector('.switcher-modal').classList.remove('modal-active'); 
})

document.querySelector('.save').addEventListener('click', function() {
  document.querySelector('.user-name').textContent =  document.querySelector('.input-name').value + '!';
  document.querySelector('.input-name').value = "";
  document.querySelector('.thanks-subscription').classList.toggle('thanks-active'); 
})

document.querySelector('.thanks-cross-menu').addEventListener('click', function() {
  console.log('thanks cross');
  document.querySelector('.thanks-subscription').classList.toggle('thanks-active'); 
})





