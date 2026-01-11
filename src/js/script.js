//Extra text

let pushButton = document.querySelector('.button-open');
let additionalBrands = document.querySelector('.additional-card-container');
let arrowIcon = document.querySelector('.read-more__button-icon');

pushButton.addEventListener('click', function () {
    let buttonText = pushButton.textContent.trim();

    if (buttonText === 'Показать все') {
        pushButton.querySelector('span').nextSibling.textContent = 'Скрыть';
        additionalBrands.style.display = 'grid';
        arrowIcon.style.transform = 'rotate(180deg)';
    } else {
        pushButton.querySelector('span').nextSibling.textContent = 'Показать все';
        additionalBrands.style.display = 'none';
        arrowIcon.style.transform = 'rotate(0deg)';
    }
});

//Extra brands

let pushButton2 = document.querySelector('.technics-container__read-more-button');
let additionalBrands2 = document.querySelector('.technics-cards-list');
let arrowIcon2 = document.querySelector('.technics-container__read-more-button-icon');

pushButton2.addEventListener('click', function () {
    let buttonText = pushButton2.textContent.trim();

    if (buttonText === 'Показать все') {
        pushButton2.querySelector('span').nextSibling.textContent = 'Скрыть';
        additionalBrands2.style.gridTemplateRows='auto auto auto auto';
        additionalBrands2.style.rowGap='20px';
        pushButton2.style.marginTop='0';
        arrowIcon2.style.transform = 'rotate(180deg)';
    } else {
        pushButton2.querySelector('span').nextSibling.textContent = 'Показать все';
        additionalBrands2.style.gridTemplateRows='160px';
        additionalBrands2.style.rowGap='0px';
        pushButton2.style.marginTop='20px';
        arrowIcon2.style.transform = 'rotate(0deg)';
    }
});

//Extra services

let readMoreButton = document.querySelector('.about__read-more-button');
let arrowReadMore = document.querySelector('.about__read-more-button-icon');
let textContainer = document.querySelector('.about__text');


readMoreButton.addEventListener('click', function () {
    let buttonText = readMoreButton.textContent.trim();
    
    if (buttonText === 'Читать далее') {
        readMoreButton.querySelector('span').nextSibling.textContent = 'Скрыть';
        arrowReadMore.style.transform = 'rotate(180deg)';
        textContainer.classList.add('about__text-active');


    } else {
        readMoreButton.querySelector('span').nextSibling.textContent = 'Читать далее';
        arrowReadMore.style.transform = 'rotate(0deg)';
        textContainer.classList.remove('about__text-active');
    }
});

//Modal call window

let callButton = document.querySelector('.footer-nav__item--call');
let callHeaderButton = document.querySelector('.header-nav__item--call');
let callCloseButton = document.querySelector('.modal-call-container__close-button');
let callModal = document.querySelector('.modal-call-container');
let body = document.querySelector('body');
let wrapper = document.querySelector('.wrapper');

callHeaderButton.addEventListener('click', function () {
    callModal.classList.add('modal-call-container__window--active');
    wrapper.style.opacity = '0.1';
    body.style.overflow = 'hidden';
});

callButton.addEventListener('click', function () {
    callModal.classList.add('modal-call-container__window--active');
    wrapper.style.opacity = '0.1';
    body.style.overflow = 'hidden';
});

callCloseButton.addEventListener('click', function () {
    callModal.classList.remove('modal-call-container__window--active');
    wrapper.style.opacity = '1';
    body.style.overflow = 'auto';
});    

//Modal feedback window

let feedbackButton = document.querySelector('.footer-nav__item--chat');
let feedbackHeaderButton = document.querySelector('.header-nav__item--chat');
let feedbackCloseButton = document.querySelector('.modal-feedback-container__close-button');
let feedbackModal = document.querySelector('.modal-feedback-container');

feedbackHeaderButton.addEventListener('click', function () {
    feedbackModal.classList.add('modal-feedback-container__window--active');
    wrapper.style.opacity = '0.1';
    body.style.overflow = 'hidden';
});

feedbackButton.addEventListener('click', function () {
    feedbackModal.classList.add('modal-feedback-container__window--active');
    wrapper.style.opacity = '0.1';
    body.style.overflow = 'hidden';
});

feedbackCloseButton.addEventListener('click', function () {
    feedbackModal.classList.remove('modal-feedback-container__window--active');
    wrapper.style.opacity = '1';
    body.style.overflow = 'auto';
});    

//Burger menu

let burgerButton = document.querySelector('.header-nav__item--burger');
let sideBar = document.querySelector('.side-menu');
let closeButton = document.querySelector('.sidebar__close-button');
let mainContainer = document.querySelector('.main-container');
let blured = document.querySelector('.wrapper__area--blured');

burgerButton.addEventListener ('click', function () {
    sideBar.style.display = 'flex';
    body.style.overflow = 'hidden';
    blured.style.display = 'block';
});

closeButton.addEventListener ('click', function () {
    sideBar.style.display = 'none';
    body.style.overflow = 'auto';
    blured.style.display = 'none';
});

blured.addEventListener ('click', function () {
    sideBar.style.display = 'none';
    body.style.overflow = 'auto';
    blured.style.display = 'none';
});

