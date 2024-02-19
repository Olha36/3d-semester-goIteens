const switchers = document.querySelectorAll('.switcher');
const users = document.querySelectorAll('.user-name');

document.querySelector('.more-button').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});

document.querySelector('.interactive-group img').addEventListener('click', function () {
  document.querySelector('.interactive-modal').classList.toggle('interactive-active');
})

document.querySelector('.more-button-list-item img').addEventListener('click', function () {
  document.querySelector('.interactive-modal').classList.toggle('interactive-active');
})

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

// document.querySelector('.game-group').addEventListener('click', linksHandleClick)
// document.querySelector('.ourTeam').addEventListener('click', linksHandleClick)

