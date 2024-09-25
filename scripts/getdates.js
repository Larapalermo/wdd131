const currentYear = new Date().getFullYear();

const footer = document.querySelector('footer');

const copyrightParagraph = document.createElement('p');

const lastModifiedParagraph = document.createElement('p');
lastModifiedParagraph.textContent = `Last modified: ${document.lastModified}`;

footer.appendChild(copyrightParagraph);
footer.appendChild(lastModifiedParagraph); 