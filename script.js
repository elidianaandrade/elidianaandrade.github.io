const toggleButton = document .getElementById('toggle-button');

function toggleMenu() {
    const toggleNav = document .getElementById('toggle-nav');
    toggleNav.classList.toggle('active');
}

toggleButton.addEventListener('click', toggleMenu);
