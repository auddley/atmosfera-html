;(function () {
    function accordionMenuInit() {
        const accordionMenu = document.querySelectorAll('.js-menu-accordion');

        if (accordionMenu.length  && window.innerWidth <= 1199) {

            accordionMenu.forEach(el => {
                const btn = el.querySelector('.js-accordion-btn');
                const body = el.querySelector('.js-accordion-body');

                body.classList.add('accordion-body');
                body.style.display = 'none';
                body.style.height = 'auto';

                if (el.classList.contains('active')) {
                    body.style.display = 'none';
                }

                btn.addEventListener('click', () => {
                    if (!el.classList.contains('active')) {
                        el.classList.add('active');
                        body.style.display = 'flex';
                        body.style.flexDirection = 'column';
                    } else {
                        el.classList.remove('active');
                        body.style.display = 'none';

                    }
                });
            });
        }
    }

    window.accordionMenu = {
        init: accordionMenuInit
    };

    window.accordionMenu.init();
})();