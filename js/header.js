const switchers = document.querySelectorAll('.switcher');
const users = document.querySelectorAll('.user-name');

document.querySelector('.more-button').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});

// document.querySelector('.interactive-group').addEventListener('click', function () {
//   document.querySelector('.interactive-modal').classList.toggle('interactive-active');
// })

const groupItems = document.querySelector('.interactive-group');

const updatePosition = () => {
  modalActive.classList.toggle('interactive-active');

  const groupItemsRect = groupItems.getBoundingClientRect();
  console.log(groupItemsRect);

  modalActive.style.left = `${groupItemsRect.left}px`;
  modalActive.style.top = `${groupItemsRect.bottom}`
}
groupItems.addEventListener('click', updatePosition);

const modalActive = document.querySelector('.interactive-modal');
const listItem = document.querySelector('.more-button-list-item');

// Function to update the position of the modal
const updateMobilePosition = () => {
  modalActive.classList.toggle('interactive-active');

  const listItemRect = listItem.getBoundingClientRect();
  modalActive.style.left = `${listItemRect.left}px`; 
  modalActive.style.top = `${listItemRect.bottom}px`; 
};

listItem.addEventListener('click', updateMobilePosition);


const handleClick = (event) => {
  console.log(event.target);
  document.querySelector('.switcher-circle-night').classList.toggle('switcher-active'); 
  document.querySelector('.switcher-circle-day').classList.toggle('switcher-non-active'); 
  document.querySelector('.switcher-modal').classList.toggle('modal-active'); 
}

switchers.forEach(switcher => {
  switcher.addEventListener('click', handleClick)
})

document.querySelector('.cross-menu').addEventListener('click', function() {
  document.querySelector('.switcher-modal').classList.remove('modal-active'); 
})

document.querySelector('.save').addEventListener('click', function() {
  users.forEach(user => {
    user.textContent = document.querySelector('.input-name').value + '!'
    console.log(user);
  })
  
  document.querySelector('.input-name').value = "";
  document.querySelector('.thanks-subscription').classList.toggle('thanks-active'); 
})

document.querySelector('.thanks-cross-menu').addEventListener('click', function() {
  console.log('thanks cross');
  document.querySelector('.thanks-subscription').classList.toggle('thanks-active'); 
})

const smartLinks = document.querySelector('.digital-group');
const gameGroup = document.querySelector('.game-group');
const ourTeam = document.querySelector('.team');


const digitalLinksHandleClick = (event) => {
  event.preventDefault();

  const targetElement = document.getElementById('digital-sections');
  targetElement.scrollIntoView({ behavior: 'smooth' });

  

  

  // const contactsElement = document.getElementById('contacts-group');
  // console.log('hi');
  // contactsElement.scrollIntoView({ behavior: 'smooth' });
}

const gameLinksHandleClick = (event) => {
  event.preventDefault();
  
  const gamesTargetElement = document.getElementById('games');
  gamesTargetElement.scrollIntoView({ behavior: 'smooth' })
}

const ourTeamHandleClick = (event) => {
  event.preventDefault();

  const aboutTargetElement = document.getElementById('about-me');
  aboutTargetElement.scrollIntoView( {behavior: 'smooth' });
}

smartLinks.addEventListener('click', digitalLinksHandleClick);
gameGroup.addEventListener('click', gameLinksHandleClick);
ourTeam.addEventListener('click', ourTeamHandleClick)


