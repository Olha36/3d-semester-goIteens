document.querySelector('.more-button').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});

document.querySelector('.interactive-group img').addEventListener('click', function () {
  document.querySelector('.interactive-modal').classList.toggle('interactive-active');
})

document.querySelector('.more-button-list-item img').addEventListener('click', function () {
  document.querySelector('.interactive-modal').classList.toggle('interactive-active');
})


