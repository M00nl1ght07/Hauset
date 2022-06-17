const headerIcon = document.querySelector('.header__icon');
const headerBody = document.querySelector('.header__body');
const body = document.querySelector('body');
headerIcon.addEventListener('click',menuBurger);

function menuBurger(){
    body.classList.toggle('_lock');
    headerBody.classList.toggle('_active');
    headerIcon.classList.toggle('_active');
}

//------------------
const personalBlock = document.querySelector('.personal');
const buttonPersonal = document.querySelector('.button__personal');
const buttonOff = document.querySelector('.personal__off');
const buttonStart = document.querySelector('.button__starts');
const startBlock = document.querySelector('.starts');
const buttonOffStart = document.querySelector('.start__off');
const exclusiveBlock = document.querySelector('.exclusive');
const buttonExclusive = document.querySelector('.button__exclusive');
const buttonOffExclusive = document.querySelector('.exclusive__off');

buttonPersonal.addEventListener('click',function(e){
    personalBlock.style.display = 'block';
    e.preventDefault();
    body.classList.add('_lock');

})

buttonOff.addEventListener('click',function(){
    personalBlock.style.display = 'none';
    body.classList.remove('_lock');
})

//---
buttonStart.addEventListener('click',function(e){
    startBlock.style.display = 'block';
    e.preventDefault();
    body.classList.add('_lock');

})

buttonOffStart.addEventListener('click',function(e){
    startBlock.style.display = 'none';
    body.classList.remove('_lock');
})
//----------------------------------------------------------
buttonExclusive.addEventListener('click',function(e){
    exclusiveBlock.style.display = 'block';
    e.preventDefault();
    body.classList.add('_lock');

})
buttonOffExclusive.addEventListener('click',function(e){
    exclusiveBlock.style.display = 'none';
    body.classList.remove('_lock');
})
//----------------
const butConst = document.querySelectorAll('.button__cons');
const cons = document.querySelector('.consultation');
const butOff = document.querySelectorAll('.consultation__off');

for(let item of butConst){
    item.addEventListener('click',function(e){
        e.preventDefault();
        cons.style.display = 'block';
        body.classList.add('_lock');
    })
}

for(let item of butOff){
    item.addEventListener('click',function(e){
        e.preventDefault();
        cons.style.display = 'none';
        body.classList.remove('_lock');
    })
}