export default function initBtnMobileHeader() {
  const btnMobile = document.querySelector('[data-menu="btn"]');
  const btnNav = document.querySelector('[data-menu="nav"]');

  if (btnMobile && btnMobile) {
    function handleClickMenuMobile() {
      btnMobile.classList.toggle('active');
      btnNav.classList.toggle('active');
    }

    btnMobile.addEventListener('click', handleClickMenuMobile);
  }
}
