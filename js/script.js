/*скрытое меню*/
let openReff = document.querySelector('.js-open-reff');
let openBtn = document.querySelector('.open-menu-btn');
let hidenMenu = document.querySelector('.hidden-menu-list');

openBtn.addEventListener('click', function (e){
  e.preventDefault();
  hidenMenu.classList.toggle('visually-hidden')
});

openReff.addEventListener('click', function (e){
  e.preventDefault();
  hidenMenu.classList.toggle('visually-hidden')
});

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

/*наведние на карточку товара*/
let elementParents = document.querySelectorAll('.product-item');

for (var i=0; i<elementParents.length; i++) {
  elementParents[i].addEventListener('mouseover', function () {
    var hidenBlock = this.querySelector('.under-hover');
    var currentImage = this.querySelector('img');
    hidenBlock.classList.remove('visually-hidden');
    currentImage.style.opacity = '0.7';
  });

  elementParents[i].addEventListener('mouseout', function () {
    var hidenBlock = this.querySelector('.under-hover');
    var currentImage = this.querySelector('img');
    hidenBlock.classList.add('visually-hidden');
    currentImage.style.opacity = '1.0';
  });
}


