const menu = document.querySelector('[data-menu]');
const form = document.querySelector('[data-form]');
const navIcon = document.querySelector('[data-navIcon]');
const navBarHeight = document.querySelector('.navBar').offsetHeight;
const modal = document.querySelector('#modal');

document.documentElement.style.setProperty('--scrollPadding', navBarHeight + 1 + 'px');

function openCloseMenu() {
    menu.classList.toggle('right');
    navIcon.classList.toggle('bgWhite');
}

// navigate in the same page
function navigateTo(locationId) {
    window.location.hash = locationId;
}

//open and close modal
function openModal() {
    modal.showModal();
}

function closeModal() {
    modal.close();
}




// email funtion
function sendEmail(e) {
    e.preventDefault();

    setTimeout(() => {
        form.reset();
        openModal();
    }, 500);
}

navIcon.addEventListener('click', openCloseMenu);
form.addEventListener('submit', sendEmail);
