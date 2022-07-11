"use strict";

const shareBtn = document.querySelector('.js_shareBtn');
const warning = document.querySelector('.js_warning');
const inputList = document.querySelectorAll('.js_input');
const shareTwitter = document.querySelector('.js_shareTwitter');


designArrow.classList.add('rotate');

function handleClick (ev){
  ev.preventDefault();
  const id = ev.currentTarget.id;
  console.log (ev.currentTarget.id);

  if (id === 'design'){
    designFieldset.classList.toggle('collapsed');
    designArrow.classList.toggle('rotate');
    fillFieldset.classList.add('collapsed');
    fillArrow.classList.remove('rotate');
    shareFieldset.classList.add('collapsed');
    shareArrow.classList.remove('rotate');

  } else if (id === 'fill'){
    fillFieldset.classList.toggle('collapsed');
    fillArrow.classList.toggle('rotate');
    designFieldset.classList.add('collapsed');
    designArrow.classList.remove('rotate');
    shareFieldset.classList.add('collapsed');
    shareArrow.classList.remove('rotate');

  } else if (id === 'share') {
    shareFieldset.classList.toggle('collapsed');
    shareArrow.classList.toggle('rotate');
    designFieldset.classList.add('collapsed');
    designArrow.classList.remove('rotate');
    fillFieldset.classList.add('collapsed');
    fillArrow.classList.remove('rotate');
   
  };

  };

designArrow.addEventListener('click', handleClick);
fillArrow.addEventListener('click', handleClick);
shareArrow.addEventListener('click', handleClick);



function handleClickShare (ev){
  ev.preventDefault();
  shareTwitter.classList.remove('collapsed');


  shareBtn.classList.add('clicked');

}

shareBtn.addEventListener('click', handleClickShare);


