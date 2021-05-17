const initialModal = document.querySelector('[data-modal="initial"]');
const formInitial = document.querySelector('[data-modal="form"]');
const wordInput = formInitial.querySelector('[data-modal="word-input"]');
const tipInput = formInitial.querySelector('[data-modal="tip-input"]');
let hits = 0;

function handleClickModal(e) {
  e.preventDefault();

  if (wordInput.value.length > 0) {
    initialModal.remove();
  } else {
    return null;
  }
}

formInitial.addEventListener('submit', handleClickModal);
