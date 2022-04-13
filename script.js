/* TOGGLE MENU  */
function toggleMenu() {
    const toggleNav = document.getElementById('toggle-nav');
    toggleNav.classList.toggle('active');
}

const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', toggleMenu);
/* TOGGLE MENU END */


/* LIGHT MODE */
function changeMode() {
	changeClasses();
}
 
function changeClasses() {
    body.classList.toggle(lightModeClass);
    /* Light Text */
    introductionTitle.classList.toggle(lightModeClass);
    introductionDescription.classList.toggle(lightModeClass);
}

const lightModeClass = 'light-mode';
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
/* Light Text */
const introductionTitle = document.getElementsByClassName('introduction-title')[0];
const introductionDescription = document.getElementsByClassName('introduction-description')[0];

button.addEventListener('click', changeMode);
/* LIGHT END */

