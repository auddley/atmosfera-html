//if dev
window.isDev = window.location.hostname === 'localhost' || window.location.hostname.startsWith('html.dev')

// LazyLoad
;(function () {
  // Set the options to make LazyLoad self-initialize
  window.lazyLoadOptions = {
    elements_selector: '.lazy',
    // ... more custom settings?
  }

  // Listen to the initialization event and get the instance of LazyLoad
  window.addEventListener(
    'LazyLoad::Initialized',
    function (event) {
      window.lazyLoadInstance = event.detail.instance
      window.lazyLoadInstance.update()
    },
    false
  )
})()

// Scroll top
;(function () {
  let scrollTop = legancy.scrollTop()
  scrollTop.init()
})()

// SVG
;(function () {
  loadScript(
    'https://cdnjs.cloudflare.com/ajax/libs/svg4everybody/2.1.9/svg4everybody.min.js',
    function () {
      svg4everybody()
    }
  )
})()

//Popups
;(function () {
    //Перечисление блоков которым задать отступ равный скролу
    legancyPopupInit({
        paddingRightElements: ['.website-header .header__wrapper'],
    });

    //локальное хранилище html
    let localHistory = {
        application: null,
        search: null,
    }

    const applicationPopupHtml = document.querySelector('.js-application')
    const searchPopupHtml = document.querySelector('.js-search')

    //Запись в переменную шаблона конкретного попапа

    // Оформление заявки
    if(applicationPopupHtml) {
        localHistory.application = applicationPopupHtml
        applicationPopupHtml.remove();
    }

    // поиск
    if(searchPopupHtml) {
        localHistory.search = searchPopupHtml
        searchPopupHtml.remove();
    }


    //Конкретный попап

    // Оформление заявки
    const applicationPopup = legancyPopup({
        content: localHistory.application,
        title: false,
        close: true,
        onAfterOpen(popup) {
            window.masks.phone();
            window.fileForm.init();
        },
        onAfterClose(popup) {
        }
    });

    const searchPopup = legancyPopup({
        content: localHistory.search,
        title: false,
        close: true,
        onAfterAppend(popup) {
            popup.classList.add('search-popup');
        },
        onAfterClose(popup) {
            popup.classList.add('search-popup');
        }
    });



    //Объявление глобальной функцией
    window.popups = {
        application: applicationPopup,
        search: searchPopup,
    }

    //События клика
    const popupsTriggers = document.querySelectorAll('[data-popup]');
    popupsTriggers.forEach((el) => {
        switch (el.dataset.popup) {
            case 'application':
                el.addEventListener('click', () => {
                    let title = el.getAttribute('data-title');
                    window.popups.application.open(title)
                });
                break;
            case 'search':
                el.addEventListener('click', () => {
                    window.popups.search.open()
                });
                break;
        }
    })
})()
