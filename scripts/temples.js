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


let first = 'Antonia';
let last = 'Francesca';

function fullname(firstName, lastName)
{
    return `${firstName} ${lastName}`;
};

const fullName = function(firstName, lastName) {
    return `${firstName} ${lastName}`;
};

const Name = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};

// You can still write it this way
// const fullName = (firstName, lastName) => `${firstName} ${lastName}`;


// writing it in html is this way
// document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);
