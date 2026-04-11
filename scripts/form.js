// Product Array - Criteria 5
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate Select Options dynamically
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    // FIX: Only run this loop if the productSelect element exists on the page
    if (productSelect) {
        products.forEach(product => {
            let option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
            productSelect.appendChild(option);
        });
    }

    // Update Footer Date (This will still run safely on both pages)
    const currentYear = new Date().getFullYear();
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }

    const lastModifiedDate = document.lastModified;
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate}`;
    }
});