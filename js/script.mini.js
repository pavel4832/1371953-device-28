let promoSliderMenuBtn=document.querySelectorAll(".slider-btn"),promoSlideItems=document.querySelectorAll(".slider-item"),serviceSliderBtn=document.querySelectorAll(".service-slider-btn"),serviceSlideItems=document.querySelectorAll(".service-slider-item"),imgArray=document.getElementsByClassName("js-img-logo"),messagePopupElement=document.querySelector(".message-popup-container"),openBtnMessage=document.querySelector(".message-btn"),closeBtnMessage=document.querySelector(".close-message-btn"),mapPopupElement=document.querySelector(".map-popup-container"),openBtnMap=document.querySelector(".open-map-js"),closeBtnMap=document.querySelector(".close-map-btn");function promoButtonActiveSet(b){for(var c=0;c<promoSliderMenuBtn.length;c++)promoSliderMenuBtn[c].classList.remove("active-slider-btn");b.classList.add("active-slider-btn")}function promoSlideActiveSet(a){for(var c=0;c<promoSlideItems.length;c++)promoSlideItems[c].classList.add("visually-hidden"),promoSlideItems[c].dataset.number===a.dataset.number&&promoSlideItems[c].classList.remove("visually-hidden")}for(var k=0;k<promoSliderMenuBtn.length;k++)promoSliderMenuBtn[k].addEventListener("click",function(){promoButtonActiveSet(this),promoSlideActiveSet(this)});function serviceButtonActiveSet(a){for(var b=0;b<serviceSliderBtn.length;b++)serviceSliderBtn[b].classList.remove("active-btn-now");a.classList.add("active-btn-now")}function serviceSlideActiveSet(a){for(var b=0;b<serviceSlideItems.length;b++)serviceSlideItems[b].classList.remove("active-service-slide"),serviceSlideItems[b].dataset.number===a.dataset.number&&serviceSlideItems[b].classList.add("active-service-slide")}for(var f=0;f<promoSliderMenuBtn.length;f++)serviceSliderBtn[f].addEventListener("click",function(){serviceButtonActiveSet(this),serviceSlideActiveSet(this)});for(var j=0;j<imgArray.length;j++)imgArray[j].addEventListener("mouseover",function(){this.src=this.classList.contains("dji-logo-img")?"img/logo-dji-fullcolor.png":this.classList.contains("sp_gadgets-logo-img")?"img/logo-sp_gadgets-fullcolor.png":this.classList.contains("gopro-logo-img")?"img/logo-gopro-fullcolor.png":"img/logo-vive-fullcolor.png"}),imgArray[j].addEventListener("mouseout",function(){this.src=this.classList.contains("dji-logo-img")?"img/logo-dji.png":this.classList.contains("sp_gadgets-logo-img")?"img/logo-sp_gadgets.png":this.classList.contains("gopro-logo-img")?"img/logo-gopro.png":"img/logo-vive.png"});openBtnMessage.addEventListener("click",function(a){a.preventDefault(),messagePopupElement.style.display="flex"}),closeBtnMessage.addEventListener("click",function(a){a.preventDefault(),messagePopupElement.style.display="none"}),openBtnMap.addEventListener("click",function(a){a.preventDefault(),mapPopupElement.style.display="flex"}),closeBtnMap.addEventListener("click",function(a){a.preventDefault(),mapPopupElement.style.display="none"});