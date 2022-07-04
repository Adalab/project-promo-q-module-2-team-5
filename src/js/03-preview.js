"use strict";

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
    if (nameInput === "name" || nameInput === "job") {
        id.innerHTML = valueInput;
    }

    if (nameInput === "email" || nameInput === "tel" || nameInput === "linkedin" || nameInput === "github") {
        id.href = valueInput;
    }
    if (nameInput === "profileImg") {
        id.src = valueInput;
    }
};

allInputs.addEventListener('keyup', handleInput);

