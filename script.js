/* TOGGLE MENU ACTIVE */
function toggleMenuActive() {
    const toggleNav = document.getElementById('toggle-nav');
    toggleNav.classList.toggle('active');
}

const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', toggleMenuActive);
/* TOGGLE MENU ACTIVE END */

/* TABBED MENU ACTIVE */
function tabbedSoftskillsActive() {
    const softskillsActive = document.getElementById('tabbed-menu-softskills');
    softskillsActive.classList.add('active');
    const hardskillsInactive = document.getElementById('tabbed-menu-hardskills');
    hardskillsInactive.classList.remove('active');
}

const tabbedSoftskills = document.getElementById('tabbed-menu-softskills');

tabbedSoftskills.addEventListener('click', tabbedSoftskillsActive);


function tabbedHardskillsActive() {
    const hardskillsActive = document.getElementById('tabbed-menu-hardskills');
    hardskillsActive.classList.add('active');
    const softskillsInactive = document.getElementById('tabbed-menu-softskills');
    softskillsInactive.classList.remove('active');
}

const tabbedHardskills = document.getElementById('tabbed-menu-hardskills');

tabbedHardskills.addEventListener('click', tabbedHardskillsActive);
/* TABBED MENU ACTIVE END */

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
