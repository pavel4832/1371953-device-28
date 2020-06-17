/*Определение переменных для скрипта*/
let promoSliderMenuBtn = document.querySelectorAll('.slider-btn'); /*массив кнопок переключения промо слайдера*/
let promoSlideItems = document.querySelectorAll('.slider-item'); /*массив промо слайдов*/
let serviceSliderBtn = document.querySelectorAll('.service-slider-btn'); /*массив кнопок переклчателей сладера*/
let serviceSlideItems = document.querySelectorAll('.service-slider-item'); /*массив сервис слайдов*/
let imgArray = document.getElementsByClassName('js-img-logo'); /*массив логотипов*/
let messagePopupElement = document.querySelector('.message-popup-container'); /*модальное окно сообщений*/
let openBtnMessage = document.querySelector('.message-btn'); /*кнопка вызова окна сообщений*/
let closeBtnMessage = document.querySelector('.close-message-btn'); /*кнопка закрытия окна сообщений*/
let messageForm = document.querySelector('.message-form'); /*форма отправки*/
let messageName = document.querySelector('.js-name'); /*поле ввода имени*/
let messageEmail = document.querySelector('.js-email'); /*поле ввода email*/
let messageText = document.querySelector('.js-textarea'); /*поле ввода сообщения*/
let isStorageSupport = true;
let storageName = '';
let storageEmail = '';
let storageText = '';
let mapPopupElement = document.querySelector('.map-popup-container'); /*модальное окно карты*/
let openBtnMap = document.querySelector('.open-map-js'); /* кнопка открытия карты*/
let closeBtnMap = document.querySelector('.close-map-btn'); /*кнопка закрытия карты*/

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
  storageText = localStorage.getItem('message');
} catch (err) {
  isStorageSupport = false;
}

/*реализация промо слайдера*/
  function promoButtonActiveSet(element) {
    for (var a = 0; a < promoSliderMenuBtn.length; a++) {
      promoSliderMenuBtn[a].classList.remove('active-slider-btn');
    }
    element.classList.add('active-slider-btn');
  }

  function promoSlideActiveSet(element) {
    for (var b = 0; b < promoSlideItems.length; b++) {
      promoSlideItems[b].classList.add('visually-hidden');

      if (promoSlideItems[b].dataset.number === element.dataset.number) {
        promoSlideItems[b].classList.remove('visually-hidden');
      }
    }
  }

  for (var k = 0; k < promoSliderMenuBtn.length; k++) {
    promoSliderMenuBtn[k].addEventListener('click', function () {
      promoButtonActiveSet(this);
      promoSlideActiveSet(this);
    })
  }

 /*реализация слайдера с сервисами*/
  function serviceButtonActiveSet(element) {
    for (var d = 0; d < serviceSliderBtn.length; d++) {
      serviceSliderBtn[d].classList.remove('active-btn-now');
    }
    element.classList.add('active-btn-now');
  }

  function serviceSlideActiveSet(element) {
    for (var e = 0; e < serviceSlideItems.length; e++) {
      serviceSlideItems[e].classList.remove('active-service-slide');

      if (serviceSlideItems[e].dataset.number === element.dataset.number) {
        serviceSlideItems[e].classList.add('active-service-slide');
      }
    }
  }

  for (var f = 0; f < promoSliderMenuBtn.length; f++) {
    serviceSliderBtn[f].addEventListener('click', function () {
      serviceButtonActiveSet(this);
      serviceSlideActiveSet(this);
    })
  }

/*наведение на картнку логотипа в списке*/
  for (var j = 0; j < imgArray.length; j++) {
    imgArray[j].addEventListener('mouseover', function () {
      if(this.classList.contains('dji-logo-img')) {
        this.src = 'img/logo-dji-fullcolor.png';
      } else if(this.classList.contains('sp_gadgets-logo-img')) {
        this.src = 'img/logo-sp_gadgets-fullcolor.png';
      } else if(this.classList.contains('gopro-logo-img')) {
        this.src = 'img/logo-gopro-fullcolor.png';
      } else {
        this.src = 'img/logo-vive-fullcolor.png';
      }
    });

    imgArray[j].addEventListener('mouseout', function () {
      if(this.classList.contains('dji-logo-img')) {
        this.src = 'img/logo-dji.png';
      } else if(this.classList.contains('sp_gadgets-logo-img')) {
        this.src = 'img/logo-sp_gadgets.png';
      } else if(this.classList.contains('gopro-logo-img')) {
        this.src = 'img/logo-gopro.png';
      } else {
        this.src = 'img/logo-vive.png';
      }
    });
  }

/*Открытие модального окна с формой отправки сообщения*/
  openBtnMessage.addEventListener('click', function (e) {
    e.preventDefault();
    messagePopupElement.classList.add('popup-show');

    if (storageName) {
      messageName.value = storageName;
      messageEmail.value = storageEmail;
      messageText.value = storageText;
    }

    messageName.focus();
  });

  closeBtnMessage.addEventListener('click', function (e) {
    e.preventDefault();
    messagePopupElement.classList.remove('popup-show');
    messagePopupElement.classList.remove('popup-error');
  });

  messageForm.addEventListener('submit', function (e) {
    if (!messageName.value || !messageEmail.value || !messageText.value) {
      e.preventDefault();
      messagePopupElement.classList.remove('popup-error');
      messagePopupElement.offsetWidth = messagePopupElement.offsetWidth;
      messagePopupElement.classList.add('popup-error');
    } else {
      localStorage.setItem('name', messageName.value);
      localStorage.setItem('email', messageEmail.value);
      localStorage.setItem('message', messageText.value);
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
      if (messagePopupElement.classList.contains('popup-show')) {
        e.preventDefault();
        messagePopupElement.classList.remove('popup-show');
        messagePopupElement.classList.remove('popup-error');
      }
    }
  });

/*Открытие модального окна с картой*/
  openBtnMap.addEventListener('click', function (e) {
    e.preventDefault();
    mapPopupElement.style.display = 'flex';
  });

  closeBtnMap.addEventListener('click', function (e) {
    e.preventDefault();
    mapPopupElement.style.display = 'none';
  });

