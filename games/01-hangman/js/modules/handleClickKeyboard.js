export default function initHandleClickBtnKeyboard(e) {
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
