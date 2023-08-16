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


const form = document.querySelector('.form');
const inputEmail = form.elements[2];
const inputTel = form.elements[1];
const inputTextArea = form.elements[4];
const formButton = document.querySelector('.form__button');
const formItemTel = document.getElementById('tel');
const formItemEmail = document.getElementById('email');
const formItemMessage = document.getElementById('message');
const errorMessageEmail = document.createElement('span');
const errorMessageTel = document.createElement('span');
const errorMessageTextArea = document.createElement('span');

form.addEventListener('submit',onSubmit);
inputEmail.addEventListener('change',checkEmailValue);
inputTel.addEventListener('change',checkTelValue);
function onSubmit(e){
e.preventDefault();
if(!inputTel.classList.contains('green') && !inputEmail.classList.contains('green') && !inputTextArea.classList.contains('green')){
   formButton.disabled = 'true';
    invalidTel();
    invalidEmail();
    invalidMessage();
}
if(!inputTel.classList.contains('green')){
   formButton.disabled = 'true';
   invalidTel();
}else if(!inputEmail.classList.contains('green')){
   formButton.disabled = 'true';
   invalidEmail();
}else if(!inputTextArea.classList.contains('green')){
  formButton.disabled = 'true';
  invalidMessage();
}
}

function checkEmailValue (e){
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 if(!re.test(String(e.target.value).toLowerCase())){
 invalidEmail();
 if(inputEmail.classList.contains('green')){
   inputEmail.classList.remove('green')
 }
 }else{
    inputEmail.classList.remove('error')
     inputEmail.classList.add('green')
     if(formItemEmail.contains(errorMessageEmail)){
      formItemEmail.removeChild(errorMessageEmail)
    }
 }
}
function checkTelValue (e){
  const re = /\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/;
 if(!re.test(String(e.target.value))){
 invalidTel();
 if(inputTel.classList.contains('green')){
   inputTel.classList.remove('green')
 }
 }else{
    inputTel.classList.remove('error')
     inputTel.classList.add('green')
     if(formItemTel.contains(errorMessageTel)){
      formItemTel.removeChild(errorMessageTel)
    }
 }
}
inputTel.addEventListener('blur',(event) => {
  if(event.target.value.length === 0 && event.target.value.trim() === ''){
    invalidTel();
    formButton.disabled = 'true';
  }
  if(inputTel.classList.contains('green') && inputEmail.classList.contains('green') && inputTextArea.classList.contains('green')){
   formButton.removeAttribute('disabled')
}
})
inputEmail.addEventListener('blur',(event)=>{
if(event.target.value.length === 0){
    invalidEmail();
   formButton.disabled = 'true';
}
if(inputEmail.classList.contains('green') && inputTel.classList.contains('green') && inputTextArea.classList.contains('green')){
   formButton.removeAttribute('disabled')
}
})
inputTextArea.addEventListener('change',(event)=> {
  const eventValue = event.target.value;
  if(event.target.value.length === 0 || eventValue.trim('').length === 0){
    invalidMessage();
   formButton.disabled = 'true';
   if(inputTextArea.classList.contains('green')){
   inputTextArea.classList.remove('green')
 }
}
else{
      inputTextArea.classList.remove('error')
      inputTextArea.classList.add('green')
      if(formItemMessage.contains(errorMessageTextArea)){
      formItemMessage.removeChild(errorMessageTextArea)
      }
   }
})
inputTextArea.addEventListener('blur',(event)=> {
if(event.target.value.length === 0 ){
  invalidMessage();
  formButton.disabled = 'true';
  if(inputEmail.classList.contains('green') && inputTel.classList.contains('green') && inputTextArea.classList.contains('green')){
   formButton.removeAttribute('disabled')
}
}
})
function invalidEmail (){
   inputEmail.classList.add('error')
  if(!formItemEmail.contains(errorMessageEmail)){
       errorMessageEmail.innerHTML = 'Invalid email';
         formItemEmail.append(errorMessageEmail)
      }
}
function invalidTel (){
   inputTel.classList.add('error')
  if(!formItemTel.contains(errorMessageTel)){
       errorMessageTel.innerHTML = 'Invalid telephone number';
         formItemTel.append(errorMessageTel)
      }
}

function invalidMessage (){
   inputTextArea.classList.add('error')
  if(!formItemMessage.contains(errorMessageTextArea)){
       errorMessageTextArea.innerHTML = 'Message is required';
         formItemMessage.append(errorMessageTextArea)
      }
}



