const crossMenu =document.querySelector('.cross-menu');
console.log(crossMenu);

const onCrossClick = () => {
  console.log('closed');
}

crossMenu?.addEventListener('click', onCrossClick);