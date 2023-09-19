;(function () {
    function accordionInit() {
        const accordion = document.querySelectorAll('.js-accordion');

        if (accordion.length) {
            accordion.forEach(el => {
                const btn = el.querySelector('.js-accordion-btn');
                const body = el.querySelector('.js-accordion-body');

                const height = body.scrollHeight;


                if (el.classList.contains('active')) {
                    body.style.height = height + 'px';
                }

                btn.addEventListener('click', () => {
                    if (!el.classList.contains('active')) {
                        el.classList.add('active');
                        body.style.height = height + 'px';
                    } else {
                        el.classList.remove('active');
                        body.style.height = '0';
                    }
                });
            });
        }
    }

    window.accordion = {
        init: accordionInit
    };

    window.accordion.init();
})();