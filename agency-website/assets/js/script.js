'use strict';

/* --------
navbar toggle
----------- */

const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navbar = document.querySelector('[data-navbar]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const elemArr = [navCloseBtn, overlay, navOpenBtn];


// for loop if not use forEach 
// for (let i = 0; i < elemArr.length; i++) {
//     elemArr[i].addEventListener('click', function () {
//         navbar.classList.toggle('active');
//         overlay.classList.toggle('active');
//     })
// }

elemArr.forEach((elem) => {
    elem.addEventListener('click', () => {
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
});


/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll('[data-navbar-link]');

navbarLinks.forEach((elem) => {
    elem.addEventListener('click', () => {
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
});

/**
 * header & go-top-btn active when window scroll down to 400px
 */

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 400) {
        header.classList.add('active');
        goTopBtn.classList.add('active');
    } else {
        header.classList.remove('active');
        goTopBtn.classList.remove('active');
    }
});