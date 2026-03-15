const currentYearElement = document.querySelector('#currentyear');
const today = new Date();
currentYearElement.innerHTML = today.getFullYear();

const lastMod = document.lastModified;
const spanElement = document.getElementById("lastModified");
if (spanElement) {
    spanElement.textContent = `Last Modification: ${lastMod}`;
}