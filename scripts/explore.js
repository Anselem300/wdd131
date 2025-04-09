const subscriptionOptions = ["Daily", "Weekly", "Monthly", "Yearly"];

const selectElement = document.getElementById("subscription");
subscriptionOptions.forEach(optionText => {
    const option = document.createElement("option");
    option.value = optionText.toLowerCase();
    option.textContent = optionText;
    selectElement.appendChild(option);
});

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