import initCloseModalResultFinal from './closeModalResultFinal.js';
import { globalVariables } from './globalVariables.js';

export default function initHandleClickBtnKeyboard(elementTarget) {
  const valueButton = elementTarget.innerText;
  const wordBoxs = document.querySelectorAll('[data-word="letter"]');
  let listHeartActive = document.querySelectorAll('[data-life] i.fas');

  elementTarget.disabled = true;

  // Checking before going through (percorrer) all the buttons
  // if there is the chosen letter in the array
  if (!globalVariables.wordArray.includes(valueButton.toLowerCase())) {
    const lastHearActive = listHeartActive[listHeartActive.length - 1];
    lastHearActive.className = lastHearActive.className.replace('fas', 'far');

    // get Updated ListHeartActive
    listHeartActive = document.querySelectorAll('[data-life] i.fas');

    // Check if the player's number of chances reached (atingiu) 0
    if (!listHeartActive.length) {
      globalVariables.keyboardButtons().forEach((button) => {
        button.removeEventListener('click', globalVariables.teste2);
      });
    }

    return;
  }

  globalVariables.wordArray.forEach((letter, index) => {
    if (valueButton.toLowerCase() === letter.toLowerCase()) {
      wordBoxs[index].innerText = valueButton;
      globalVariables.hits++;
    }
  });

  // Check if the player has won
  if (globalVariables.hits === globalVariables.wordArray.length) {
    const concluedModal = document.querySelector(
      '[data-conclued-modal="container"]',
    );

    concluedModal.classList.add('active');

    initCloseModalResultFinal();
  }
}
