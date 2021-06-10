import { globalVariables } from './globalVariables.js';

export default function initGame() {
  const initialModal = document.querySelector('[data-modal="initial"]');
  const formInitial = document.querySelector('[data-modal="form"]');
  const wordInput = formInitial.querySelector('[data-modal="word-input"]');
  const tipInput = formInitial.querySelector('[data-modal="tip-input"]');

  function handleClickInitGame(e) {
    e.preventDefault();

    if (wordInput.value.length > 0) {
      globalVariables.wordArray = wordInput.value
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

    globalVariables.wordArray.forEach((letter) => {
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
      button.addEventListener('click', globalVariables.toggleEventListener);
    });
  }

  formInitial.addEventListener('submit', handleClickInitGame);
}
