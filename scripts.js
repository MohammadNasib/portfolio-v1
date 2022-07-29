const menu = document.querySelector('[data-menu]');
const form = document.querySelector('[data-form]');
const navIcon = document.querySelector('[data-navIcon]');
const navBarHeight = document.querySelector('.navBar').offsetHeight;
const modal = document.querySelector('#modal');
const invalidMssg = document.querySelector('.invalidMssg');

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

// show and hide invalid email message
function showInvalidMssg() {
    invalidMssg.classList.add('toggleInvalidMssg');
}

function hideInvalidMssg() {
    invalidMssg.classList.remove('toggleInvalidMssg');
}

// email funtion
function sendEmail(e) {
    let name = document.querySelector('[data-name]').value;
    let address = document.querySelector('[data-email]').value;
    let message = document.querySelector('[data-message]').value;

    e.preventDefault();

    Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'naeemulavrar155@gmail.com',
        Password: 'C6ABECD07A01050C1D6A5657D53421640C07',
        To: 'mohammadnasib111@gmail.com',
        From: address,
        Subject: `An email from ${name}`,
        Body: message,
    })
        .then((mssg) => {
            if (mssg === 'OK') {
                form.reset();
                hideInvalidMssg();
                return openModal();
            }

            showInvalidMssg();
        })
        .catch((err) => alert(err));
}

navIcon.addEventListener('click', openCloseMenu);
form.addEventListener('submit', sendEmail);
