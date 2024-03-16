const switchers = document.querySelectorAll('.switcher');
const userNameList = document.querySelectorAll('.user-name');
const interactiveGroupButton = document.querySelector('.interactive-group');
const listContainer = document.querySelector('.list-container');
const interactiveModal = document.querySelector('.interactive-modal');
const menuItems = document.querySelectorAll('.more-button-list-item');
const burgerMenuBtn = document.querySelector('#burger-menu-btn');
const digitalAnchorLink = document.querySelector('.digital-group');
const gameAnchorLink = document.querySelector('.game-group');
const teamAnchorLink = document.querySelector('.team');
const targetElement = document.getElementById('digital-sections');
const gamesTargetElement = document.getElementById('games');
const aboutTargetElement = document.getElementById('about-me');
const crossMenu =document.querySelector('.cross-menu');
const modalSwitcher = document.querySelector('.switcher-modal');
const saveButton = document.querySelector('.save');
const thanksCloseButton = document.querySelector('.thanks-cross-menu');


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
  toggleModal();
}

const digitalLinksHandleClick = (event) => {
  event.preventDefault();
  targetElement?.scrollIntoView({ behavior: 'smooth' });
}

const gameLinksHandleClick = (event) => {
  event.preventDefault();
  gamesTargetElement?.scrollIntoView({ behavior: 'smooth' })
}

const ourTeamHandleClick = (event) => {
  event.preventDefault();
  aboutTargetElement.scrollIntoView( {behavior: 'smooth' });
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

thanksCloseButton?.addEventListener('click', subscriptionModalToggle);
digitalAnchorLink?.addEventListener('click', digitalLinksHandleClick);
gameAnchorLink?.addEventListener('click', gameLinksHandleClick);
teamAnchorLink?.addEventListener('click', ourTeamHandleClick);
burgerMenuBtn?.addEventListener('click', onMoreButtonClick);
interactiveGroupButton?.addEventListener('click', updatePosition);
menuItems.forEach((item)=> {
  item.addEventListener('click', updateMobilePosition);
})
// menuItems?.addEventListener('click', updateMobilePosition);
crossMenu?.addEventListener('click', onSwitcherClick);
saveButton?.addEventListener('click', onSaveButtonClick);


