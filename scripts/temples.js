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