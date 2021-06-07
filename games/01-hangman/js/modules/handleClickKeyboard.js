import { globalVariables } from './globalVariables.js';

export default function initHandleClickBtnKeyboard(elementTarget, wordArray) {
  const valueButton = elementTarget.innerText;
  const wordBoxs = document.querySelectorAll('[data-word="letter"]');

  elementTarget.disabled = true;

  // Verificando antes de percorrer se a não existe letra existe
  // if(!wordInput.includes(elementTarget)) {
  //   console.log('Errou');
  // }

  wordArray.forEach((letter, index) => {
    if (valueButton.toLowerCase() === letter.toLowerCase()) {
      wordBoxs[index].innerText = valueButton;
      globalVariables.hits++;
    }
    // else {
    //   console.log('Errou');
    // }
  });

  if (globalVariables.hits === wordArray.length) {
    const concluedModal = document.querySelector(
      '[data-conclued-modal="container"]',
    );

    concluedModal.classList.add('active');
  }
  console.log(globalVariables.hits);
}
