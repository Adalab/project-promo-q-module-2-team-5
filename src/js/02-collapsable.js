"use strict";

function handleClickDesign (ev){
    ev.preventDefault();
    designFieldset.classList.toggle('collapsed');
    designArrow.classList.toggle('rotate');
  }

  designArrow.addEventListener('click', handleClickDesign);


  function handleClickFill (ev){
    ev.preventDefault();
    fillFieldset.classList.toggle('collapsed');
    fillArrow.classList.toggle('rotate');
  }

  fillArrow.addEventListener('click', handleClickFill);
  

  function handleClickShare (ev){
    ev.preventDefault();
    shareFieldset.classList.toggle('collapsed');
    shareArrow.classList.toggle('rotate');
  }

  shareArrow.addEventListener('click', handleClickShare);  