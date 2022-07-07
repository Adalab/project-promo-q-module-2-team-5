// const collapsableMenu = document.querySelectorAll('.collapsablemenu');//Con querySelectoAll() objetemos un objeto con todos los elementos que tienen el selector especificado (en este caso la clase 'collapsablemenu')
// collapsableMenu.forEach(item => item.addEventListener('click', hideShow, true));

// //forEach() va a ir recorriendo el objeto propiedad por propiedad. Lo que ponemos entre paréntesis es el nombre que le daremos a cada propiedad para referirnos a ellas dentro de la función flecha. En este caso le estamos diciendo que por cada item (propiedad) añada un eventListener.

// //Ponemos a la escucha cada una de las secciones que hay dento del form y establecemos que al hacer click en ellas se ejecute la funcion manejadorea hideshow.


// //----------Definimos las diferentes MINIFUNCIONES que va a contener la función manejadora.

// const paletteSelection = (element) => {
//   const card = document.querySelector ('.card');
//   const cardStyles = ['palette1', 'palette2','palette3'];
//   if (element.name === 'palette') {
//     dataCard[element.name] = element.id;
//     cardStyles.forEach(item => item === `palette${element.id}` ? card.classList.add(item) :card.classList.remove(item));
//   }
// };