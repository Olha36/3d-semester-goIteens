const subscribeButton = document.querySelector('.subscribe');
const subscribeModalWindow = document.querySelector('.email-subscription');
const footerInput = document.querySelector('.input-footer');
const closeEmailModalWindow = document.querySelector('.email-cross-menu');

function showModalWindow() {
  subscribeModalWindow.classList.toggle('email-active'); 
  footerInput.value = '';
}

subscribeButton.addEventListener('click', showModalWindow);
closeEmailModalWindow.addEventListener('click', showModalWindow);