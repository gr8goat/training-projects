const bgImgEl = document.getElementById('bg-image');

window.addEventListener('scroll', () => {
    updateImage();
});

function updateImage() {
    bgImgEl.style.opacity = 1 - window.pageYOffset / 900;
    bgImgEl.style.backgroundSize = 450 - window.pageYOffset / 12 + '%';
}