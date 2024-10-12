const currentYear = new Date().getFullYear();

const footer = document.querySelector('footer');

const copyrightParagraph = document.createElement('p');

const lastModifiedParagraph = document.createElement('p');
lastModifiedParagraph.textContent = `Last modified: ${document.lastModified}`;

footer.appendChild(copyrightParagraph);
footer.appendChild(lastModifiedParagraph);

function WindChill(temp, windspeed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
}
const temperature = 30;
const windSpeed = 10;

const windChillElement = document.querySelector('#wind-chill');

if (temperature <= 50 && windSpeed > 3) {
    const windChill = WindChill(temperature, windSpeed).toFixed(1);
    windChillElement.textContent = `${windChill} °F`;
} else {
    windChillElement.textContent = 'N/A';
}