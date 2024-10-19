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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Montevideo Uruguay",
        location: "Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/montevideo-uruguay-temple/photographs/#Gallery-1"
    },
    {
        templeName: "Brasilia Brasil",
        location: "Brasilia, Brazil",
        dedicated: "2023, September, 17",
        area: 3387,
        imageUrl:
            "https://churchofjesuschristtemples.org/brasilia-brazil-temple/photographs/#Gallery-6"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17-19",
        area: 30659,
        imageUrl:
            "https://churchofjesuschristtemples.org/buenos-aires-argentina-temple/photographs/#Gallery-2"
    },
];

function displayTemples(templeList) {
    const templeContainer = document.getElementById("temple-container");
    templeContainer.innerHTML = ""; // Clear previous content

    templeList.forEach((temple) => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        const templeImage = document.createElement("img");
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.templeName;
        templeImage.loading = "lazy";

        const templeInfo = document.createElement("div");
        templeInfo.classList.add("temple-info");

        templeInfo.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      `;

        templeCard.appendChild(templeImage);
        templeCard.appendChild(templeInfo);
        templeContainer.appendChild(templeCard);
    });
}

function filterOldTemples() {
    const oldTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[1].trim());
        return year < 1900;
    });
    displayTemples(oldTemples);
}

function filterNewTemples() {
    const newTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[1].trim());
        return year > 2000;
    });
    displayTemples(newTemples);
}

function filterLargeTemples() {
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(largeTemples);
}

function filterSmallTemples() {
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(smallTemples);
}

function displayAllTemples() {
    displayTemples(temples);
}

document.getElementById("nav-home").addEventListener("click", displayAllTemples);
document.getElementById("nav-old").addEventListener("click", filterOldTemples);
document.getElementById("nav-new").addEventListener("click", filterNewTemples);
document.getElementById("nav-large").addEventListener("click", filterLargeTemples);
document.getElementById("nav-small").addEventListener("click", filterSmallTemples);

window.onload = displayAllTemples;