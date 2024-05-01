;(function () {
  function openMenuInit() {
    const mainMenu = document.querySelector('.js-menu-open');

    if (mainMenu) {
      const btnMenu = mainMenu.querySelector('.navigation__main-btn');
      const btnIcon = btnMenu.querySelector('.icon-menu');
      const bodyMenu = mainMenu.querySelector('.desktop-menu');

      btnMenu.addEventListener('click', () => {
        if (!btnMenu.classList.contains('active')) {
          btnMenu.classList.add('active');
          btnIcon.classList.add('active');
          bodyMenu.classList.add('active');
        } else {
          btnMenu.classList.remove('active');
          btnIcon.classList.remove('active');
          bodyMenu.classList.remove('active');
        }
      })
    }
  }

  window.openMenu = {
    init: openMenuInit
  };

  window.openMenu.init();
})();