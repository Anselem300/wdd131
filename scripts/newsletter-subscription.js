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