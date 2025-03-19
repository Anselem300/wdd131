const date = new Date();
let currentYear = document.getElementById('currentyear');
currentYear.textContent = date.getFullYear();

let lastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");
lastModified.textContent = `${lastModif.toLocaleString()}`;

let temperature = 34;
let currentTemperature = document.getElementById("temperature");
currentTemperature.textContent = `${temperature}`;

let windSpeed = 8;
let currentSpeed = document.getElementById('windSpeed');
currentSpeed.textContent = `${windSpeed}`;

function calculateWindChill(temperature, windSpeed) {
    windChill = 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temperature * windSpeed ** 0.16)
    return windChill
};

if (temperature <= 10 && windSpeed > 4.8) {
    calWindChill = calculateWindChill(temperature, windSpeed);
    displayWindChill = document.getElementById("windChill");
    displayWindChill.textContent = `${calWindChill}℃`;
} else {
    displayWindChill = document.getElementById("windChill");
    displayWindChill.textContent = `N/A`;
};
