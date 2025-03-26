
const hamButton = document.getElementById('menu');
const navigation = document.getElementById('navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');

    if (navigation.classList.contains('open')) {
        hamButton.innerHTML = "❎";
    } else {
        hamButton.innerHTML = "☰";
    }
})

const date = new Date();
let currentYear = document.getElementById("currentyear");
currentYear.textContent = date.getFullYear();

let lastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");
lastModified.textContent = `${lastModif.getMonth()+1}/${lastModif.getDate()}/${lastModif.getFullYear()}, ${lastModif.toLocaleTimeString()}`;


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
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
    // Add more temple objects here...
  ];

  document.addEventListener("DOMContentLoaded", ()=> {
    const templeContainer = document.getElementById("temple-container");
    const menuButtons = document.querySelectorAll(".navigation a");

    function displayTemples(filteredTemples) {

        templeContainer.innerHTML = "";

        filteredTemples.forEach(temple => {
            const card = document.createElement("div");
            card.classList.add("temple-card");
    
            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = `image of ${temple.templeName}`;
            img.width = "400";
            img.height = "250";
            img.loading = "lazy";
    
            const name = document.createElement("h3");
            name.textContent = temple.templeName;
    
            const location = document.createElement("p");
            location.textContent = `Location: ${temple.location}`;
    
            const  dedication = document.createElement("p");
            dedication.textContent = `Dedicated: ${temple.dedicated}`;
    
            const area = document.createElement("p");
            area.textContent = `Size: ${temple.area} sq ft`;
    
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
    
            templeContainer.appendChild(card);
    
        });
       
    }

    function filterTemples(criteria){
        let filteredTemples;
        
        switch(criteria) {
            case "Old":
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(",")[0]);
                    return year < 1900;
                });
                break;

            case "New":
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(",")[0]);
                    return year >2000;
                });
                break;
            
            case "Large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;

            case "Small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;

            case "Home":
                default:
                filteredTemples = temples;
        }

        displayTemples(filteredTemples);
    }

    menuButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const criteria = button.title;
            filterTemples(criteria);
        });
    });

    displayTemples(temples);
});