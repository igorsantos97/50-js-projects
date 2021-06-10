import { globalVariables } from './globalVariables.js';

export default function generateLettersBox(tipInput) {
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
