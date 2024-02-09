document.querySelector('.more-button').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
  document.querySelector('.atomic-animation').style.display = document.querySelector('.list-container').classList.contains('active') ? 'block' : 'none';
});
