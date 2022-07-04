"use strict";

/*const inputName = document.querySelector ('.js_inputName');
const inputJob = document.querySelector ('.js_inputJob');
const inputImg = document.querySelector ('.js_inputImg');
const inputEmail = document.querySelector ('.js_inputEmail');
const inputTel = document.querySelector ('.js_inputTel');
const inputLinkedin = document.querySelector ('.js_inputLinkedin');
const inputGithub = document.querySelector ('.js_inputGithub');

const previewName = document.querySelector ('.js_previewName');
const previewJob = document.querySelector ('.js_previewJob');
const previewImg = document.querySelector ('.js_previewImg');
const previewTel = document.querySelector ('.js_previewTel');
const previewEmail = document.querySelector ('.js_previewEmail');
const previewLinkedin = document.querySelector ('.js_previewLinkedin');
const previewGithub = document.querySelector ('.js_previewGithub');*/

const allInputs = document.querySelector(".js_allInputs");


const data = {
    palette: 1,
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: ''
};

const handleInput = (ev) => {

    const nameInput = ev.target.name;
    const valueInput = ev.target.value;
    const id = document.getElementById(nameInput);
    data[nameInput] = valueInput;
    console.log(id);



    id.innerHTML = valueInput;



};

allInputs.addEventListener('keyup', handleInput);

