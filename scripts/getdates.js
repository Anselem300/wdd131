// Select the document element for output

const date = new Date();
let currentYear = document.getElementById("currentyear");
currentYear.innerHTML = date.getFullYear();

// alert(document.lastModified); note that this is for alert

let lastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");
lastModified.innerHTML = lastModif;