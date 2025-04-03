const date = new Date();
let currentYear = document.getElementById('currentyear');
currentYear.textContent = date.getFullYear();

let lastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");
lastModified.textContent = `${lastModif.toLocaleString()}`;

const products = [
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low Voltage Reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp Equalizer",
      averagerating: 5.0
    }
  ];

    const getElement = document.getElementById("products");
    getElement.innerHTML = `<option value="" disabled selected>Select a Product</option>`;

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} (⭐${product.averagerating})`;
        getElement.appendChild(option);
    });