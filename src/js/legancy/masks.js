;(function () {
  //Маска телефон
  function phoneMask() {
    const phones = document.querySelectorAll('.js-mask-phone');

    if (phones.length) {
      phones.forEach(phone => {
        Inputmask({ mask: '+7 999 999 99 99', placeholder: ''})
            .mask(phone);
      });
    }
  }

  //Маска только числа
  function numberMask() {
    const numbers = document.querySelectorAll('.js-mask-number');

    if (numbers.length) {
      numbers.forEach(number => {
        number.addEventListener('input', () => {
          number.value = number.value.replace(/[^0-9]/g,'');
        })
      });
    }
  }

  //Маска сумм (Вставляет пробелы)
  function priceMask() {
    const prices = document.querySelectorAll('.js-mask-price');

    if (prices.length) {
      prices.forEach(price => {
        price.addEventListener('input', () => {
          price.value = price.value.replace(/[^0-9]/g,'');
          const resString = String(price.value).split(' ').join('').split(' ').join('').split(' ').join('');
          price.value = resString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        })
      });
    }
  }

  window.masks = {
    phone: phoneMask,
    number: numberMask,
    price: priceMask
  };

  window.masks.phone();
  window.masks.number();
  window.masks.price();
})()