const initialModal = document.querySelector('[data-modal="initial"]');
const formInitial = document.querySelector('[data-modal="form"]');
const wordInput = formInitial.querySelector('[data-modal="word-input"]');
const tipInput = formInitial.querySelector('[data-modal="tip-input"]');

let hits = 0;
let wordArray;

function handleClickModal(e) {
  e.preventDefault();

  if (wordInput.value.length > 0) {
    wordArray = wordInput.value.split('');
    initialModal.remove();
    generateLettersBox();
  } else {
    return null;
  }
}

function generateLettersBox() {
  const wordContainer = document.querySelector('[data-word="container"]');
  const keyboardButtons = document.querySelectorAll('[data-keyboard] button');
  const tipArea = document.querySelector('[data-tip]');

  tipArea.innerText = tipInput.value || 'Nenhuma';

  wordArray.forEach((letter) => {
    switch (letter) {
      case ' ':
        wordContainer.innerHTML += `<div data-word="letter" class="word-letter none"></div>`;
        hits++;
        break;
      case '-':
        wordContainer.innerHTML += `<div data-word="letter" class="word-letter">-</div>`;
        hits++;
        break;
      default:
        wordContainer.innerHTML += `<div data-word="letter" class="word-letter"></div>`;
    }
  });

  keyboardButtons.forEach((buttons) => {
    buttons.addEventListener('click', handleClickBtnKeyboard);
  });
}

function handleClickBtnKeyboard(e) {
  const targetButton = e.target;
  const valueButton = targetButton.innerText;
  const wordBoxs = document.querySelectorAll('[data-word="letter"]');

  targetButton.disabled = true;

  // Verificando antes de percorrer se a não existe letra existe
  // if(!wordInput.includes(targetButton)) {
  //   console.log('Errou');
  // }

  wordArray.forEach((letter, index) => {
    if (valueButton.toLowerCase() === letter.toLowerCase()) {
      wordBoxs[index].innerText = valueButton;
      hits++;
    }
    // else {
    //   console.log('Errou');
    // }
  });

  if (hits === wordArray.length) {
    const concluedModal = document.querySelector(
      '[data-conclued-modal="container"]',
    );

    concluedModal.classList.add('active');
  }
}

formInitial.addEventListener('submit', handleClickModal);

const btnMobile = document.querySelector('[data-menu="btn"]');
const btnNav = document.querySelector('[data-menu="nav"]');

function handleClickMenuMobile() {
  btnMobile.classList.toggle('active');
  btnNav.classList.toggle('active');
}

btnMobile.addEventListener('click', handleClickMenuMobile);
