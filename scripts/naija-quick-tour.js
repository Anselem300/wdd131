const date = new Date();
let currentYear = document.getElementById("currentYear");
currentYear.textContent = `${date.getFullYear()}`;

const hamButton = document.getElementById("menu");
const navigation = document.getElementById("navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        hamButton.innerHTML = "❎";
    } else {
        hamButton.innerHTML = "☰";
    }
});

const explore = [
    {
        imageName: "Local Street in Lagos",
        alt: "Local Street",
        imageUrl: "images/nigeria_explore1.jpeg",
    },
    {
        imageName: "Abuja: Capital of Nigeria",
        alt: "Abuja",
        imageUrl: "images/nigeria_explore2.jpeg",
    },
    {
        imageName: "Victoria Island Lagos",
        alt: "Victoria Island",
        imageUrl: "images/nigeria_explore3.jpeg",
    },
    {
        imageName: "Lagos Terrain",
        alt: "Lagos",
        imageUrl: "images/nigeria_explore4.jpeg",
    },
];

const imageToShow = 3;

const exploreContainer = document.getElementById("explore-container");
const viewMoreContainer = document.getElementById("explore-viewmore");

 explore.slice(0, imageToShow).forEach(item => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = item.imageUrl;
    img.alt = item.alt;
    img.loading = 'lazy';

    const caption = document.createElement("figcaption");
    caption.textContent = item.imageName;

    figure.appendChild(img);
    figure.appendChild(caption);
    exploreContainer.appendChild(figure);
});

if (explore.length > imageToShow) {
    const viewMoreLink = document.createElement("a");
    viewMoreLink.textContent = "See More";
    viewMoreLink.href = "explore.html";
    viewMoreLink.style.fontSize = "1.2rem";

    viewMoreContainer.appendChild(viewMoreLink);
};
 