const joinBtnEl = document.querySelector('.btn');
const closeIconEl = document.querySelector('.close-icon');
const containerEl = document.querySelector('.container');
const popupContainerEl = document.querySelector('.popup-container');


joinBtnEl.addEventListener('click', () => {
    containerEl.classList.add('active');
    popupContainerEl.classList.remove('active');
});

closeIconEl.addEventListener('click', () => {
    popupContainerEl.classList.add('active');
    containerEl.classList.remove('active');
});