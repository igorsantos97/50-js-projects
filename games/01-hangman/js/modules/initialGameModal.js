import initHandleClickBtnKeyboard from './handleClickKeyboard.js';
import { globalVariables } from './globalVariables.js';

export default function initGame() {
  const initialModal = document.querySelector('[data-modal="initial"]');
  const formInitial = document.querySelector('[data-modal="form"]');
  const wordInput = formInitial.querySelector('[data-modal="word-input"]');
  const tipInput = formInitial.querySelector('[data-modal="tip-input"]');

  let wordArray;

  function generateLettersBox() {
    const wordContainer = document.querySelector('[data-word="container"]');
    const keyboardButtons = document.querySelectorAll('[data-keyboard] button');
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

    keyboardButtons.forEach((button) => {
      button.addEventListener('click', () => {
        initHandleClickBtnKeyboard(button, wordArray);
        console.log('Inicial' + globalVariables.hits);
      });
    });
  }

  function handleClickModal(e) {
    e.preventDefault();

    if (wordInput.value.length > 0) {
      wordArray = wordInput.value.split('');
      initialModal.remove();
      generateLettersBox();
    } else {
      alertMessage = document.createElement('div');
      alertMessage.innerText = 'Necessário inserir uma palavra!';
      alertMessage.classList.add('alert-message-form');

      wordInput.style.borderColor = '#ff3131';
    }
  }

  formInitial.addEventListener('submit', handleClickModal);
}
