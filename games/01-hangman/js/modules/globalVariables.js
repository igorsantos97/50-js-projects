import initHandleClickBtnKeyboard from './handleClickKeyboard.js';

export const globalVariables = {
  hits: 0,
  errors: 0,
  wordArray: [],
  keyboardButtons() {
    return document.querySelectorAll('[data-keyboard] button');
  },
  // O motivo de inserir a função "toggleEventListener" como global
  // é que mesmo se eu quisesse passar essa função como parametro
  // de initGameModal.js para handleClickKeyboard
  // o removeEventListener não iria funcionar (acredito que seja algo sobre escopo)
  // por isso add "toggleEventListener" para ser "visto" em ambos scripts
  // um para adicionar o evento de click -> generateLettersBox
  // outro para remover o evento de click -> initHandleClickBtnKeyboard
  toggleEventListener({ target: targetElement }) {
    initHandleClickBtnKeyboard(targetElement);
  },
};
