;(function () {
    function cityInit() {
        const wrapCity = document.querySelector('.js-choose-city');

        if (wrapCity) {
            const title = wrapCity.querySelector('.js-city-name');
            const list = wrapCity.querySelector('.js-city-list');

            list.querySelectorAll('li').forEach(el => {
                el.addEventListener('click', () => {
                    title.innerText = el.innerText;
                });
            })

        }
    }

    window.city = {
        init: cityInit
    };

    window.city.init();
})();