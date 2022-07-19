const menu = document.querySelector('[data-menu]');
const navIcon = document.querySelector('[data-navIcon]');
const navBarHeight = document.querySelector('.navBar').offsetHeight;

document.documentElement.style.setProperty('--scrollPadding', navBarHeight + 1 + 'px');

function openCloseMenu() {
    menu.classList.toggle('right');
    navIcon.classList.toggle('bgWhite');
}

function navigateTo(locationId) {
    window.location.hash = locationId;
}
console.log(navBarHeight);


navIcon.addEventListener('click', openCloseMenu);
