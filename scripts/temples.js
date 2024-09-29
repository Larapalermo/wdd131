const currentYear = new Date().getFullYear();

const footer = document.querySelector('footer');

const copyrightParagraph = document.createElement('p');

const lastModifiedParagraph = document.createElement('p');
lastModifiedParagraph.textContent = `Last modified: ${document.lastModified}`;

footer.appendChild(copyrightParagraph);
footer.appendChild(lastModifiedParagraph);

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');

    if (navigation.classList.contains("active")) {
        hamburger.innerHTML = '&times;';
    } else {
        hamburger.innerHTML = '&#9776;';
    }
});

