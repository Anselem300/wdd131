const date = new Date();
let currentYear = document.getElementById("currentYear");
currentYear.textContent = `${date.getFullYear()}`;


let visitCount = localStorage.getItem("visitCount") || 0;
visitCount = parseInt(visitCount) +1;

localStorage.setItem("visitCount", visitCount);
document.getElementById("visitCountDisplay").textContent = `${visitCount} time(s)`;

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