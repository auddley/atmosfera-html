;(function () {
    function openPriceListInit() {
        const priceList = document.querySelectorAll('.js-price-list');

        if (priceList.length) {
            priceList.forEach(el => {
                const table = el.querySelector('.price-list__list');
                const btn = el.querySelector('.js-btn-price-list');
                const rows = el.querySelectorAll('.price-list__item');
                btn.innerText = 'Выбрать еще ▾';

                let rowHeight = 55;
                table.style.height = 255 + 'px';
                table.style.overflow = 'hidden';

                btn.addEventListener('click', () => {
                    table.classList.toggle('open-list');

                    if (table.classList.contains('open-list')) {
                        table.style.height = (rowHeight * (rows.length - 1)) + 34 + 'px';
                        btn.innerText = 'Скрыть ▴';
                    } else {
                        table.style.height = 255 + 'px';
                        btn.innerText = 'Выбрать еще ▾';
                    }
                });
            });
        }
    }

    window.openPriceList = {
        init: openPriceListInit
    };

    window.openPriceList.init();
})();