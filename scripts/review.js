const date = new Date();
let currentYear = document.getElementById('currentyear');
currentYear.textContent = date.getFullYear();

let lastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");
lastModified.textContent = `${lastModif.toLocaleString()}`;


let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount = parseInt(reviewCount) +1;

localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCountDisplay").textContent = reviewCount;