const buttonLogin = document.querySelector('#buttonGet');
const inputEmail = document.querySelector('#email');
const inputPassword = document.getElementById('input-password');
const buttonSubmit = document.querySelector('#submit-btn');
const checkAgreement = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const matterCheckbox = document.querySelectorAll('.subject');
let textArea = document.querySelector('#textarea');

function validForms() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkDisabled(event) {
  if (event.target.checked) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', '');
  }
}

textArea.addEventListener('keyup', () => {
  textArea = document.querySelector('#textarea');
  counter.innerText = 500 - textArea.value.length;
});

function checkItens(arrayCheck) {
  for (let index = 0; index < arrayCheck.length; index += 1) {
    if (arrayCheck[index].checked) {
      return arrayCheck[index].value;
    }
  }
}

function checkCheckbox() {
  const arrayCheckBox = [];
  for (let index = 0; index < matterCheckbox.length; index += 1) {
    if (matterCheckbox[index].checked) {
      arrayCheckBox.push(matterCheckbox[index].value);
    }
  }
  return arrayCheckBox;
}

function textForms() {
  const inputName = document.querySelector('#input-name');
  const inputLastName = document.querySelector('#input-lastname');
  const inputEmailForms = document.querySelector('#input-email');
  const inputHouse = document.querySelector('#house');
  const familyRadio = document.querySelectorAll('.radioButton');
  const evaluationRadio = document.querySelectorAll('.evalutionRadio');
  textArea = document.querySelector('#textarea');

  const forms = document.querySelector('#evaluation-form');
  forms.innerHTML = `Nome: ${inputName.value} ${inputLastName.value} 
  Email: ${inputEmailForms.value} 
  Casa: ${inputHouse.value}
  Família: ${checkItens(familyRadio)}
  Matérias: ${checkCheckbox().join(', ')}
  Avaliação: ${checkItens(evaluationRadio)}
  Observações: ${textArea.value}`;
}

// function saveInfo() {
//   let registro = {
//     nome: inputName.value,
//     lastName: inputLastName.value,
//     email: inputEmailForms.value,
//     casa: inputHouse.value,
//     familia: checkItens(familyRadio),
//     matter: checkItens(matterCheckbox),
//     avaliacao: checkItens(evaluationRadio),
//     observacao: agreementCheckbox.checked
//   }
//   localStorage.setItem('dadosForms', JSON.stringify(registro));
// }

// function getItens() {
//   let registroDados = JSON.parse(localStorage.getItem('dadosForms'));
//   if (registroDados !== null) {
//     inputName.value = registroDados.nome;
//     document.querySelector('.name-lastName').innerText = `nome: ${registroDados.nome} ${registroDados.lastName}`;
//     inputLastName.value = registroDados.lastName;
//     inputEmailForms.value = registroDados.email;
//     inputHouse.value = registroDados.casa;
//     compareRadios(familyRadio, registroDados, 'familia');
//     compareRadios(evaluationRadio, registroDados, 'avaliacao');
//   }
// }
// getItens();

// function compareRadios(arrayRadios, registro, key) {
//   for (let index = 0; index < arrayRadios.length; index += 1) {
//     if (arrayRadios[index].value === registro[key]) {
//       arrayRadios[index].checked = true;
//     }
//   }
// }

buttonLogin.addEventListener('click', validForms);
checkAgreement.addEventListener('click', checkDisabled);
buttonSubmit.addEventListener('click', textForms);
