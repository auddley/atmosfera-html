;(function () {
  const menu = document.querySelector('.js-menu-open');
  function fixMenuInit() {
    if (menu) {
      if (pageYOffset > 39) {
        if(!menu.classList.contains('min-menu')) {
          menu.classList.add('min-menu');
        }
      } else {
        if (menu.classList.contains('min-menu')) {
          menu.classList.remove('min-menu');
        }
      }

    }
  }

  window.fixMenu = {
    init: fixMenuInit
  };

  window.fixMenu.init();

  document.addEventListener('scroll', function () {
    window.fixMenu.init();
  });
})();