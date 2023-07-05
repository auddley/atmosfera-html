;(function () {
    function openCatalogInit() {
        const catalog = document.querySelectorAll('.js-catalog');

        if (catalog.length && window.innerWidth <= 990) {
            catalog.forEach(el => {
                const btn = el.querySelector('.catalog__subtitle');
                const list = el.querySelector('.catalog__links-list');
                btn.querySelector('span').innerText = 'Смотреть ещё';

                btn.addEventListener('click', () => {
                    btn.classList.toggle('active');
                    list.classList.toggle('active');

                    if (btn.classList.contains('active')) {
                        btn.querySelector('span').innerText = 'Закрыть';
                    } else {
                        btn.querySelector('span').innerText = 'Смотреть ещё';
                    }
                });
            });
        }
    }

    window.openCatalog = {
        init: openCatalogInit
    };

    window.openCatalog.init();
})();