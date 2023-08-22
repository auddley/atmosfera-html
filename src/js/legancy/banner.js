;(function () {
    function sliderBannerInit() {
        const swiperBanner = document.querySelector('.banner__wrapper');
        const swiperBannerSingle = document.querySelector('.js-single-banner');

        if (swiperBanner || swiperBannerSingle) {
            const container = swiperBanner ? swiperBanner.querySelector('.js-slider-banner') : swiperBannerSingle.querySelector('.js-slider-banner');
            const pagination = swiperBanner ? swiperBanner.querySelector('.swiper-pagination') : swiperBannerSingle.querySelector('.swiper-pagination');

            const settingsSlider = {
                direction: 'horizontal',
                speed: 600,
                spaceBetween: 10,
                autoplay: {
                    delay: 3000,
                },
                loop: true,
                slidesPerView: 1,
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