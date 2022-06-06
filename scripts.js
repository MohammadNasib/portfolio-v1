const menu = document.querySelector('[data-menu]');
const navIcon = document.querySelector('[data-navIcon]');

function openCloseMenu() {
    menu.classList.toggle('right');
    navIcon.classList.toggle('bgWhite');
}

navIcon.addEventListener('click', openCloseMenu);
