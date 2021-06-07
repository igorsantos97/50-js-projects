export default function initCloseModalResultFinal() {
  const modalContainer = document.querySelector(
    '[data-conclued-modal="container"]',
  );

  const btnClose = document.querySelector('[data-conclued-modal="close"]');

  function closeModalResultFinal() {
    modalContainer.classList.remove('active');
  }

  function clickOutSideModal(e) {
    const elementTarget = e.target;

    if (elementTarget === this) {
      closeModalResultFinal();
    }
  }

  btnClose.addEventListener('click', closeModalResultFinal);
  modalContainer.addEventListener('click', clickOutSideModal);
}
