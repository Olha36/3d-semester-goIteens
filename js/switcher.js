const switchers = document.querySelectorAll('.switcher');
const crossMenu =document.querySelector('.cross-menu');
console.log(crossMenu);
const cactusDarkTheme = document.querySelector(".cactus");
const footballWrapper = document.querySelector('.football-wrapper');
const footerLinks = document.querySelectorAll('.contacts a');
const switcherModal = document.querySelector('.switcher-modal')

const toggleSwitcher = () => {
  document.querySelector('.switcher-circle-night')?.classList?.toggle('switcher-active'); 
  document.querySelector('.switcher-circle-day')?.classList?.toggle('switcher-non-active');
}

const onSwitcherClick = () => {
  toggleSwitcher()
  // toggleModal();
  document.body.classList.toggle('change-bc-color');
  cactusDarkTheme.classList.toggle('cactus-dark'); 
  footballWrapper.classList.toggle('football-wrapper-dark');
  footerLinks.forEach((link) => link.classList.toggle('footer-dark'));
  switcherModal.classList.toggle('switcher-dark');

}

const onCrossClick = () => {
  switcherModal.classList.toggle('switcher-non-active')
}

switchers.forEach(switcher => {
  switcher.addEventListener('click', onSwitcherClick);
})
crossMenu?.addEventListener('click', onCrossClick);