const navbarEl = document.querySelector('.navbar');
const bottomContainerEL = document.querySelector('.bottom-container');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > bottomContainerEL.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add('active');
    } else {
        navbarEl.classList.remove('active');
    }
});


console.log(bottomContainerEL.offsetTop - navbarEl.offsetHeight - 50)