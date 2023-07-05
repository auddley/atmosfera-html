;(function () {
    let sliders = []

    function slider4ItemsInit() {
        const slider4Items = document.querySelectorAll('.slider-4items');

        if (slider4Items.length) {
            slider4Items.forEach(function (content, indexSw) {
                const container = content.querySelector('.js-slider-4items');
                const prev = content.querySelector('.swiper-button-prev');
                const next = content.querySelector('.swiper-button-next');

                const settingsSlider = {
                    direction: 'horizontal',
                    // slidesPerView: 'auto',
                    slidesPerView: 4,
                    speed: 600,
                    autoHeight: true,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 'auto',
                        },
                        599: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 4,
                        }
                    }
                }

                sliders.push({
                    sw: new Swiper(container, settingsSlider),
                    inx: indexSw
                })
            })
        }
    }

    window.slider4Items = {
        init: slider4ItemsInit
    };

    window.slider4Items.init();
})();