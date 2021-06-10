import generateLettersBox from './generateLettersBox.js';
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
      generateLettersBox(tipInput);
    } else {
      let alertMessage = document.createElement('div');
      alertMessage.innerText = 'Necessário inserir uma palavra!';
      alertMessage.classList.add('alert-message-form');

      wordInput.style.borderColor = '#ff3131';
    }
  }

  formInitial.addEventListener('submit', handleClickInitGame);
}
