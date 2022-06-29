'use strict';

//  1º paso: llamar a las clases (buscar los elementos que necesitamos)
//  2º paso: escuchar al evento cuando hagamos click sobre la flecha
//  3º paso: añadir o quitar la clase collapsed
//  4º paso: añadir o quitar la clase rotate

const designFieldset = document.querySelector('.js-designFieldset');
const fillFieldset = document.querySelector('.js-fillFieldset');
const shareFieldset = document.querySelector('.js-shareFieldset');

const designArrow = document.querySelector('.js-design-arrow');
const fillArrow = document.querySelector('.js-fill-arrow');
const shareArrow = document.querySelector('.js-share-arrow');


function handleClickDesign (ev){
  ev.preventDefault();
  designFieldset.classList.toggle('collapsed');
  designArrow.classList.toggle('rotate');
}

function handleClickFill (ev){
  ev.preventDefault();
  fillFieldset.classList.toggle('collapsed');
  fillArrow.classList.toggle('rotate');
}

function handleClickShare (ev){
  ev.preventDefault();
  shareFieldset.classList.toggle('collapsed');
  shareArrow.classList.toggle('rotate');
}



designArrow.addEventListener('click', handleClickDesign);
fillArrow.addEventListener('click', handleClickFill);
shareArrow.addEventListener('click', handleClickShare);
