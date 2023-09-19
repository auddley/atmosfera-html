;(function () {
    function burgerInit() {
        const btnBurger = document.querySelector('.btn-burger');

        if (btnBurger) {
            const wrapperHeader = document.querySelector('.header-menu__wrapper');
            const menu = wrapperHeader.querySelector('.header-menu');

            btnBurger.addEventListener('click', () => {
                let toggle = btnBurger.classList.contains('active') ? 'remove' : 'add';

                btnBurger.classList[toggle]('active');
                menu.classList[toggle]('active');
                document.body.classList[toggle]('no-scroll');
            });
        }
    }

    window.burger = {
        init: burgerInit
    };

    window.burger.init();
})();