/*скрытое меню*/
let openReff = document.querySelector('.js-open-reff')
let openBtn = document.querySelector('.open-menu-btn');
let hidenMenu = document.querySelector('.hidden-menu-list')

openBtn.addEventListener('click', function (e){
  e.preventDefault();
  hidenMenu.classList.toggle('visually-hidden')
});

openReff.addEventListener('click', function (e){
  e.preventDefault();
  hidenMenu.classList.toggle('visually-hidden')
});

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


