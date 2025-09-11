
window.addEventListener('DOMContentLoaded', (event) => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
    const seconds = currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds();

    let date = document.getElementById("date");
    date.innerHTML = `Last Modification: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
});