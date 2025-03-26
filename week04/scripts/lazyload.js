const date = new Date();
let currentYear = document.getElementById("currentyear");
currentYear.innerHTML = `${date.getFullYear()}`;

const lastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");
lastModified.textContent = `${lastModif.toLocaleString()}`;

