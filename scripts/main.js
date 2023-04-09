
// Add font
let googleFontRef = document.createElement('link');
googleFontRef.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap';
googleFontRef.rel = 'stylesheet';
document.head.appendChild(googleFontRef);

const loginContainer = document.querySelector('#login');
const frontPageContainer = document.querySelector('#front_page .content');

// Add visual elements
let frontPageBg = document.createElement('div');
frontPageBg.id = 'front-page-bg';
frontPageContainer.insertBefore(frontPageBg, loginContainer);

// TODO fix hacky way to wait until all proxy elements are loaded.
// setTimeout(() => {
//     // Get rid of ugly proxy elements
//     let proxyElements = document.querySelectorAll('.proxy');
//     console.log(proxyElements);
//     proxyElements.forEach((ele) => ele.remove());
// }, 1000);

// document.documentElement.style.setProperty('--mute-url', chrome.extension.getURL('assets/mute.png'));
// document.documentElement.style.setProperty('--unmute-url', chrome.extension.getURL('assets/unmute.png'));

console.log('Redesign Done initializing');