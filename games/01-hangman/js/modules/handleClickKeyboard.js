import initCloseModalResultFinal from './closeModalResultFinal.js';
import { globalVariables } from './globalVariables.js';

export default function initHandleClickBtnKeyboard(elementTarget, wordArray) {
  const valueButton = elementTarget.innerText;
  const wordBoxs = document.querySelectorAll('[data-word="letter"]');
  let listHeartActive = document.querySelectorAll('[data-life] i.fas');

  elementTarget.disabled = true;

  // Verificando antes de percorrer se a não existe letra existe
  if (!wordArray.includes(valueButton.toLowerCase())) {
    const lastHearActive = listHeartActive[listHeartActive.length - 1];
    lastHearActive.className = lastHearActive.className.replace('fas', 'far');

    // Updated ListHeartActive
    listHeartActive = document.querySelectorAll('[data-life] i.fas');
    if (!listHeartActive.length) {
      console.log('Acabou o câo');
    }

    return;
  }

  wordArray.forEach((letter, index) => {
    if (valueButton.toLowerCase() === letter.toLowerCase()) {
      wordBoxs[index].innerText = valueButton;
      globalVariables.hits++;
    }
  });

  if (globalVariables.hits === wordArray.length) {
    const concluedModal = document.querySelector(
      '[data-conclued-modal="container"]',
    );

    concluedModal.classList.add('active');

    initCloseModalResultFinal();
  }
}
