;(function () {
    function sliderBannerInit() {
        const swiperBanner = document.querySelector('.banner__wrapper')

        if (swiperBanner) {
            const container = swiperBanner.querySelector('.js-slider-banner')
            const pagination = swiperBanner.querySelector('.swiper-pagination')

            const settingsSlider = {
                direction: 'horizontal',
                speed: 600,
                spaceBetween: 10,
                autoplay: {
                    delay: 3000,
                },
                loop: true,
                slidesPerView: 'auto',
                breakpoints: {
                    320: {
                        pagination: false,
                    },
                    1199: {
                        pagination: {
                            el: pagination,
                            clickable: true
                        },
                    },
                }
            }

            new Swiper(container, settingsSlider)
        }
    }

    window.sliderBanner = {
        init: sliderBannerInit
    };

    window.sliderBanner.init();
})();