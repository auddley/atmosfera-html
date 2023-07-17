;(function () {
    function tabsInit() {
        const tabs = document.querySelectorAll('.js-tabs');

        if (tabs.length) {
            tabs.forEach(el => {
                const btns = el.querySelectorAll('.tabs-controllers .tabs-btn');
                const contents = el.querySelectorAll('.tabs-content');

                btns.forEach((btn, index) => {
                    btn.addEventListener('click', () => {
                        if (!btn.classList.contains('active')) {
                            btns.forEach(el => el.classList.remove('active'));
                            contents.forEach(el => el.classList.remove('active'));

                            btn.classList.add('active');
                            contents[index].classList.add('active');
                        }
                    });
                });
            });
        }
    }

    window.tabs = {
        init: tabsInit
    };

    window.tabs.init();
})();