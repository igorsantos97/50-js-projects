const initialModal = document.querySelector('[data-modal="initial"]');
const formInitial = document.querySelector('[data-modal="form"]');
const wordInput = formInitial.querySelector('[data-modal="word-input"]');
const tipInput = formInitial.querySelector('[data-modal="tip-input"]');
let hits = 0;

function handleClickModal(e) {
  e.preventDefault();

  if (wordInput.value.length > 0) {
    initialModal.remove();
    generateLettersBox();
  } else {
    return null;
  }
}

function generateLettersBox() {
  const wordContainer = document.querySelector('[data-word="container"]');
  const arrayWord = wordInput.value.split('');

  arrayWord.forEach((letter) => {
    switch (letter) {
      case ' ':
        wordContainer.innerHTML += `<div class="word-letter none"></div>`;
        hits++;
        break;
      case '-':
        wordContainer.innerHTML += `<div class="word-letter">-</div>`;
        hits++;
        break;
      default:
        wordContainer.innerHTML += `<div class="word-letter"></div>`;
    }
  });
}

formInitial.addEventListener('submit', handleClickModal);
