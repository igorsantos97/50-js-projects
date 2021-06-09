export const globalVariables = {
  hits: 0,
  errors: 0,
  keyboardButtons() {
    return document.querySelectorAll('[data-keyboard] button');
  },
};
