'use strict';

const resetBtn = document.querySelector('.js-reset-btn');

function clearObjectData () {
    data.palette = 1;
    data.name = '';
    data.job = '';
    data.phone = '';
    data.email = '';
    data.linkedin = '';
    data.github = '';
    data.photo = '';
}

function renderPreview (data) {
    previewCard.classList.remove('palette-2', 'palette-3');
    previewCard.classList.add('palette-1');
    previewName.innerHTML = 'Nombre Apellido';
    previewJob.innerHTML = 'Front-end developer';
    previewTel.href = data.phone;
    previewEmail.href = data.email;
    previewLinkedin.href = data.linkedin;
    previewGithub.href = data.github;
    previewImg.style.backgroundImage = 'url( https://placekitten.com/240/200)';
}

//hay que limpiar los inputs

function clearAllInputs () {
    firstRadio.checked = true;
    inputName.value= '';
    inputJob.value= '';
    inputTel.value= '';
    inputEmail.value= '';
    inputLinkedin.value= '';
    inputGithub.value= '';
    inputImg.value= '';
    profilePreview.style.backgroundImage = 'url( https://placekitten.com/240/200)';

}

const handleReset = (ev) =>{
    ev.preventDefault();
    clearObjectData();
    renderPreview(data);
    clearAllInputs();

};

resetBtn.addEventListener('click', handleReset);

