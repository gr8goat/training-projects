const containerEl = document.querySelector('.container');
const careersArr = ['YouTuber', 'Web Developer', 'Freelancer', 'Instructor'];

let careersIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I am ${careersArr[careersIndex].slice(0, 1) === 'I' ? 'an' : 'a'} ${careersArr[careersIndex].slice(0, characterIndex)}</h1>`;
    if (characterIndex === careersArr[careersIndex].length) {
        careersIndex++;
        characterIndex = 0;
    }

    if (careersIndex === careersArr.length) {
        careersIndex = 0;
    }
    setTimeout(updateText, 400)
}