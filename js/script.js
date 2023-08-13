 const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');
    if(iconMenu){
        iconMenu.addEventListener('click', (e) => {
         document.body.classList.toggle('lock');
         iconMenu.classList.toggle('active');
         menuBody.classList.toggle('active');
        })
    }

let pageSlider = new Swiper('.slider__swiper',{
   wrapperClass:"slider__wrapper",
   slideClass:"slider__slide",
     pagination: {
   clickable: false,
    el: '.slider-pagination',
    type: 'fraction',

     formatFractionCurrent: function(number) {
if (number < 10) {
number = '0' + number;
}
return number;
},
formatFractionTotal: function(number) {
if (number < 10) {
number = '0' + number;
}
return number;
},
 
  },
  navigation: {
    nextEl: '.slider__arrow_right',
    prevEl: '.slider__arrow_left',
  },
  slidesPerView:1,
  speed:800,
  observer:true,
  observeParents:true,
  
})  
