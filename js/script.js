/*наведение на картнку логотипа в списке*/
let imgArray = document.getElementsByClassName('js-img-logo');

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
let messagePopupElement = document.querySelector('.message-popup-container');
let openBtnMessage = document.querySelector('.message-btn');
let closeBtnMessage = document.querySelector('.close-message-btn');

  openBtnMessage.addEventListener('click', function (e) {
    e.preventDefault();
    messagePopupElement.style.display = 'flex';
  });

  closeBtnMessage.addEventListener('click', function (e) {
    e.preventDefault();
    messagePopupElement.style.display = 'none';
  });

/*Открытие модального окна с картой*/
let mapPopupElement = document.querySelector('.map-popup-container');
let openBtnMap = document.querySelector('.open-map-js');
let closeBtnMap = document.querySelector('.close-map-btn');

  openBtnMap.addEventListener('click', function (e) {
    e.preventDefault();
    mapPopupElement.style.display = 'flex';
  });

  closeBtnMap.addEventListener('click', function (e) {
    e.preventDefault();
    mapPopupElement.style.display = 'none';
  });

