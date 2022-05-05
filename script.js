/* TOGGLE MENU ACTIVE */
function toggleMenuActive() {
    const toggleNav = document.getElementById('toggle-nav');
    toggleNav.classList.toggle('active');
}

const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', toggleMenuActive);
/* TOGGLE MENU ACTIVE END */

/* TOGGLE MENU ITEMS ACTIVE */

/* TOGGLE MENU ITEMS ACTIVE END */

/* LIGHT MODE */
function changeMode() {
	changeClasses();
}
 
function changeClasses() {
    body.classList.toggle(lightModeClass);
    introTitle.classList.toggle(lightModeClass);
    introDescription.classList.toggle(lightModeClass);
}

const lightModeClass = 'light-mode';
const body = document.getElementsByTagName('body')[0];
const introTitle = document.getElementsByClassName('intro-title')[0];
const introDescription = document.getElementsByClassName('intro-description')[0];

const lightButton = document.getElementById('mode-selector');

lightButton.addEventListener('click', changeMode);
/* LIGHT END */
