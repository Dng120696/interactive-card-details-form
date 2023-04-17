'use strict';

//INPUT ELEMENT
const inputCardName = document.getElementById('card-name-val');
const inputCardNum = document.getElementById('card-num-val');

const inputMonth = document.getElementById('month-val');
const inputYear = document.getElementById('year-val');
const inputCvc = document.getElementById('cvc-val');

const input = document.querySelectorAll('input');

const form = document.getElementById('form');
const btnContinue = document.querySelector('.btn-continue');

const formSec = document.querySelector('.form-sec');
const thankYouSec = document.querySelector('.thank-you-sec');
//TEXT CONTENT ELEMENT
const  cardNameVal =  document.querySelector('.name-value');
const  cardNumVal =  document.querySelector('.num-value');
const  monthVal =  document.querySelector('.exp-date-month');
const  yearVal =  document.querySelector('.exp-date-year');
const  cvcVal =  document.querySelector('.cvc-value');

const validation = () =>{
  let validator = true;
  
  for(let i = 0; i < input.length; i++){
 
    if(!input[i].value){
     input[i].parentElement.classList.add('error');
     input[i].parentElement.classList.remove('active');
  
      validator = false;
    }else{
     input[i].parentElement.classList.remove('error');
     input[i].parentElement.classList.add('active');
      validator = true;
    }
  }
  return validator;
};

 
form.addEventListener('submit',(e) =>{
  e.preventDefault();
  if(validation()){
    formSec.classList.add('hidden');
    thankYouSec.classList.remove('hidden');
    cardNameVal.textContent = inputCardName.value;         
    cardNumVal.textContent = inputCardNum.value;         
    monthVal.textContent = inputMonth.value;         
    yearVal.textContent = inputYear.value;         
    cvcVal.textContent = inputCvc.value;       
  }
});


for(let i = 0; i < input.length; i++){
  input[i].addEventListener('focusin', () =>{
    input[i].parentElement.classList.add('active');
    input[i].parentElement.classList.remove('error');
    
  });
};


btnContinue.addEventListener('click',() =>{
  thankYouSec.classList.add('hidden');
  formSec.classList.remove('hidden');
  
  cardNameVal.textContent ='Jane Appleseed';         
  cardNumVal.textContent = '0000 0000 0000 0000';         
  monthVal.textContent = '00';         
  yearVal.textContent = '00';         
  cvcVal.textContent ='000';    
  
  for(let i = 0; i < input.length; i ++){
      input[i].value = '';
      input[i].parentElement.classList.remove('active');
  }


  
});


