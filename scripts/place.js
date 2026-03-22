const brazilData = {
    area: "8,515,767 sq km",
    population: "214,300,000",
    capital: "Brasília",
    languages: ["Português", "Tupi-Guarani", "Fictício"],
    currency: "Real (BRL)",
    timeZone: "UTC-3",
    callingCode: "+55",
    tld: ".br"
};

const weatherData = {
    temp: 10,
    condition: "Partly Cloudy",
    windSpeed: 5,
    icon: "<img src='images/place/weather-icon.svg' alt='Weather Icon' class='weather-svg'>"
};

const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

function displayData() {
    const dataContainer = document.querySelector("#data-card");
    dataContainer.innerHTML = `
        <h2>Data</h2>
        <p class="data-row"><strong>Area:</strong> ${brazilData.area}</p>
        <p class="data-row"><strong>Population:</strong> ${brazilData.population}</p>
        <p class="data-row"><strong>Capital:</strong> ${brazilData.capital}</p>
        <p class="data-row"><strong>Languages:</strong> ${brazilData.languages.join(", ")}</p>
        <p class="data-row"><strong>Currency:</strong> ${brazilData.currency}</p>
        <p class="data-row"><strong>Time Zone:</strong> ${brazilData.timeZone}</p>
        <p class="data-row"><strong>Calling Code:</strong> ${brazilData.callingCode}</p>
        <p class="data-row"><strong>Internet TLD:</strong> ${brazilData.tld}</p>
    `;
}

function displayWeather() {
    const weatherContainer = document.querySelector("#weather-card");
    let chill = "N/A";

    if (weatherData.temp <= 10 && weatherData.windSpeed > 4.8) {
        chill = `${calculateWindChill(weatherData.temp, weatherData.windSpeed)} °C`;
    }

    weatherContainer.innerHTML = `
        <h2 aria-label="Current Weather">Weather</h2>
        <div class="weather-icon">${weatherData.icon}</div>
        <p class="data-row"><strong>Temperature:</strong> <span>${weatherData.temp} °C</span></p>
        <p class="data-row"><strong>Conditions:</strong> <span>${weatherData.condition}</span></p>
        <p class="data-row"><strong>Wind:</strong> <span>${weatherData.windSpeed} km/h</span></p>
        <p class="data-row"><strong>Wind Chill:</strong> <span>${chill}</span></p>
    `;
}

function setFooter() {
    document.querySelector('#currentyear').textContent = new Date().getFullYear();
    document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
}

displayData();
displayWeather();
setFooter();