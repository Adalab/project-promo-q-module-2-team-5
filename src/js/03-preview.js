"use strict";

const allInputs = document.querySelector(".js_allInputs");
let allButtons = [];

const data = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

const handleInput = (ev) => {
  const nameInput = ev.target.name;
  const valueInput = ev.target.value;
  const id = document.getElementById(nameInput);
  data[nameInput] = valueInput;
  if (nameInput === "name" || nameInput === "job") {
    id.innerHTML = valueInput;
  } else if (nameInput === "linkedin" || nameInput === "github") {
    id.href = valueInput;
  } else if (nameInput === "email") {
    id.href = `mailto: ${valueInput}`;
  } else if (nameInput === "phone") {
    id.href = `tel: ${valueInput}`;
  } else if (valueInput === "") {
    id.href.disabled = true;
  }
};

allInputs.addEventListener("keyup", handleInput);

//FUNCIÓN PARA DESHABILITAR LOS BOTONES SI NO TIENEN NADA EN EL HREF

// function listenerButtons() {
//   allButtons = document.querySelectorAll(".js_previewBtn");
//   console.log(allButtons);
//   for (const eachBtn of allButtons) {
//     eachBtn.addEventListener("click", buttonsDisabled);
//   }
// }

// function buttonsDisabled(ev) {
//   console.log(ev);
//   console.log(`ha entrado`);
//   ev.preventDefault();
// }

// listenerButtons();
