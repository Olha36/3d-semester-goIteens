const switchers = document.querySelectorAll('.switcher');
const userNameList = document.querySelectorAll('.user-name');
const interactiveGroupButton = document.querySelector('.interactive-group');
const listContainer = document.querySelector('.list-container');
const interactiveModal = document.querySelector('.interactive-modal');
const menuItems = document.querySelectorAll('.more-button-list-item-interactive');
const burgerMenuBtn = document.querySelector('#burger-menu-btn');
const gameAnchorLink = document.querySelector('.game-group');
const teamAnchorLink = document.querySelector('.team');
const crossMenu =document.querySelector('.cross-menu');
const modalSwitcher = document.querySelector('.switcher-modal');
const saveButton = document.querySelector('.save');
const thanksCloseButton = document.querySelector('.thanks-cross-menu');
const closeInteractiveModal = document.querySelector(".modal-cross");
const cactusDarkTheme = document.querySelector(".cactus");
const footballWrapper = document.querySelector('.football-wrapper');
const footerLinks = document.querySelectorAll('.contacts a');

const onMoreButtonClick = () => {
 if(listContainer) {
  listContainer.classList.toggle('active');
 }
}

const updatePosition = () => {
  const groupItemsRect = interactiveGroupButton.getBoundingClientRect();

  if(interactiveModal) {
    interactiveModal.classList.toggle('interactive-active');
    interactiveModal.style.left = `${groupItemsRect.left}px`;
    interactiveModal.style.top = `${groupItemsRect.bottom}px`
  }
}

const updateMobilePosition = (event) => {
  const menuItem = event.target;
  const listItemRect = menuItem.getBoundingClientRect();

  if(interactiveModal) {
    interactiveModal.classList.toggle('interactive-active');
    interactiveModal.style.left = `${listItemRect.left}px`; 
    interactiveModal.style.top = `${listItemRect.bottom}px`; 
  }
};


const toggleSwitcher = () => {
  document.querySelector('.switcher-circle-night')?.classList?.toggle('switcher-active'); 
  document.querySelector('.switcher-circle-day')?.classList?.toggle('switcher-non-active');
}

const toggleModal = () => {
  modalSwitcher?.classList?.toggle('modal-active'); 
}

const onSwitcherClick = () => {
  toggleSwitcher()
  // toggleModal();
  document.body.classList.toggle('change-bc-color');
  cactusDarkTheme.classList.toggle('cactus-dark'); 
  footballWrapper.classList.toggle('football-wrapper-dark');
  footerLinks.forEach((link) => link.classList.toggle('footer-dark'));
}

const saveUserName = () => {
  userNameList.forEach(user => {
    user.textContent = document.querySelector('.input-name').value + '!'
})};

const subscriptionModalToggle = () => {
  document.querySelector('.thanks-subscription')?.classList.toggle('thanks-active'); 
}

const onSaveButtonClick = () => {
  saveUserName();
  
  document.querySelector('.input-name').value = "";
  subscriptionModalToggle();
}

switchers.forEach(switcher => {
  switcher.addEventListener('click', onSwitcherClick);
})

const onClickClose = () => {
  interactiveModal.classList.toggle('interactive-active');
};

thanksCloseButton?.addEventListener('click', subscriptionModalToggle);
burgerMenuBtn?.addEventListener('click', onMoreButtonClick);
interactiveGroupButton?.addEventListener('click', updatePosition);
menuItems.forEach((item)=> {
  item.addEventListener('click', updateMobilePosition);
})
crossMenu?.addEventListener('click', onSwitcherClick);
saveButton?.addEventListener('click', onSaveButtonClick);
closeInteractiveModal.addEventListener("click", onClickClose);