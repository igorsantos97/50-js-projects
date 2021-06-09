import initHandleClickBtnKeyboard from './handleClickKeyboard.js';
import { globalVariables } from './globalVariables.js';

export default function initGame() {
  const initialModal = document.querySelector('[data-modal="initial"]');
  const formInitial = document.querySelector('[data-modal="form"]');
  const wordInput = formInitial.querySelector('[data-modal="word-input"]');
  const tipInput = formInitial.querySelector('[data-modal="tip-input"]');

  let wordArray;

  function handleClickInitGame(e) {
    e.preventDefault();

    if (wordInput.value.length > 0) {
      wordArray = wordInput.value
        .split('')
        .map((letter) => letter.toLowerCase());

      initialModal.remove();
      generateLettersBox();
    } else {
      alertMessage = document.createElement('div');
      alertMessage.innerText = 'Necessário inserir uma palavra!';
      alertMessage.classList.add('alert-message-form');

      wordInput.style.borderColor = '#ff3131';
    }
  }

  function generateLettersBox() {
    const wordContainer = document.querySelector('[data-word="container"]');
    const tipArea = document.querySelector('[data-tip]');

    tipArea.innerText = tipInput.value || 'Nenhuma';

    wordArray.forEach((letter) => {
      switch (letter) {
        case ' ':
          wordContainer.innerHTML += `<div data-word="letter" class="word-letter none"></div>`;
          globalVariables.hits++;
          break;
        case '-':
          wordContainer.innerHTML += `<div data-word="letter" class="word-letter">-</div>`;
          globalVariables.hits++;
          break;
        default:
          wordContainer.innerHTML += `<div data-word="letter" class="word-letter"></div>`;
      }
    });

    globalVariables.keyboardButtons().forEach((button) => {
      console.log('Add Listeners');

      function teste() {
        console.log('teste');
        initHandleClickBtnKeyboard(button, wordArray, teste);
      }

      button.addEventListener('click', teste);
    });
  }

  formInitial.addEventListener('submit', handleClickInitGame);
}
