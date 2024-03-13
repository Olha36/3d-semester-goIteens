document.querySelector('.subscribe').addEventListener('click', function() {
  document.querySelector('.email-subscription').classList.toggle('email-active'); 
  document.querySelector('.input-footer').value = '';
});

document.querySelector('.email-cross-menu').addEventListener('click', function() {
  document.querySelector('.email-subscription').classList.remove('email-active');
});