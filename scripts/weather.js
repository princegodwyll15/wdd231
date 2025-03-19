// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Fetch weather data from OpenWeather API
async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6371&units=metric&appid=d2d88154f7fcfd57f092e8a314e5554b';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For debugging
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Function to display fetched weather data
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1); // Capitalize first letter
}

// Call the API fetch function when the page loads
apiFetch();
