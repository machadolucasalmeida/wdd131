
const lastMod = document.lastModified;
const spanElement = document.getElementById("lastModified");
if (spanElement) {
    spanElement.textContent = `Last Modified: ${lastMod}`;
}