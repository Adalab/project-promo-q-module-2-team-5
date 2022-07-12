'use strict';


const linkCard = document.querySelector('.js_link-card');

const warning = document.querySelector('.js_warning');



function handleCreateCard(ev) {
    ev.preventDefault();
    console.log(data);
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((response) =>response.json())
    .then((serverResp) => {
        console.log(serverResp);

        if(serverResp.success) {
            linkCard.innerHTML = serverResp.cardURL;
            linkCard.href = serverResp.cardURL;
            shareTwitter.classList.remove('collapsed');
            shareBtn.classList.add('clicked');

        }else {
            warning.innerHTML = 'Deben estar rellenos todos los campos';  
            
        }
    });
}


shareBtn.addEventListener('click', handleCreateCard);