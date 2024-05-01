;(function () {
    function accordionMenuInit() {
        const accordionMenu = document.querySelector('.js-mob-menu');

        if (accordionMenu && window.innerWidth <= 1199) {
            const allBtns = accordionMenu.querySelectorAll('.js-mob-menu__btn');
            const allList = accordionMenu.querySelectorAll('.js-mob-menu__list');

            allList.forEach(el => {
                el.style.display = 'none';
            })

            allBtns.forEach(el => {
                el.addEventListener('click', () => {
                    const elAfterBtn = el.nextElementSibling;

                    if (el.classList.contains('js-mob-menu__btn') && elAfterBtn.classList.contains('js-mob-menu__list')) {
                        if (el.classList.contains('active')) {
                            el.classList.remove('active');
                            elAfterBtn.classList.remove('active');
                            elAfterBtn.style.display = 'none';
                        } else {
                            el.classList.add('active');
                            elAfterBtn.classList.add('active');
                            elAfterBtn.style.display = 'flex';
                            elAfterBtn.style.flexDirection = 'column';
                            elAfterBtn.style.height = 'auto';
                        }
                    }
                })
            })
        }
    }

    window.accordionMenu = {
        init: accordionMenuInit
    };

    window.accordionMenu.init();
})();