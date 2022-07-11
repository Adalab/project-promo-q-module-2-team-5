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
  if (nameInput === "name" || nameInput === "job") {
    id.innerHTML = valueInput;
  }
  else if (nameInput === "LinkedIn" || nameInput === "github") {
    id.href = valueInput;
  }
  else if (nameInput === "email"){
    id.href = `mailto: ${valueInput}`;
  }
  else if (nameInput === "tel"){
    id.href = `tel: ${valueInput}`;
  }
};



allInputs.addEventListener('keyup', handleInput);

