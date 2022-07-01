"use strict";

designArrow.classList.add('rotate');

function handleClick (ev){
  ev.preventDefault();
  const id = ev.currentTarget.id;
  console.log (ev.currentTarget.id);

  if (id === 'design'){
    designFieldset.classList.remove('collapsed');
    designArrow.classList.add('rotate');
    fillFieldset.classList.add('collapsed');
    fillArrow.classList.remove('rotate');
    shareFieldset.classList.add('collapsed');
    shareArrow.classList.remove('rotate');

  } else if (id === 'fill'){
    fillFieldset.classList.remove('collapsed');
    fillArrow.classList.add('rotate');
    designFieldset.classList.add('collapsed');
    designArrow.classList.remove('rotate');
    shareFieldset.classList.add('collapsed');
    shareArrow.classList.remove('rotate');

  } else if (id === 'share') {
    shareFieldset.classList.remove('collapsed');
    shareArrow.classList.add('rotate');
    designFieldset.classList.add('collapsed');
    designArrow.classList.remove('rotate');
    fillFieldset.classList.add('collapsed');
    fillArrow.classList.remove('rotate');
   
  };

  };

designArrow.addEventListener('click', handleClick);
fillArrow.addEventListener('click', handleClick);
shareArrow.addEventListener('click', handleClick);


// function handleClickFill (ev){
//     ev.preventDefault();
//     fillFieldset.classList.toggle('collapsed');
//     fillArrow.classList.toggle('rotate');
//   }

//   fillArrow.addEventListener('click', handleClickFill);
  

// function handleClickShare (ev){
//     ev.preventDefault();
//     shareFieldset.classList.toggle('collapsed');
//     shareArrow.classList.toggle('rotate');
//   }

// shareArrow.addEventListener('click', handleClickShare); 

// if (designFieldset !== classList.contains('collapsed')){
//   fillFieldset.classList.add('collapsed');
//   shareFieldset.classList.add('collapsed');
// }
// if (fillFieldset !== classList.contains('collapsed')){
//   designFieldset.classList.add('collapsed');
//   shareFieldset.classList.add('collapsed');
// }
// if (shareFieldset !== classList.contains('collapsed')){
//   fillFieldset.classList.add('collapsed');
//   designFieldset.classList.add('collapsed');
// }