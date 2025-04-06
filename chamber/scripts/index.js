import { members } from '../data/members.mjs';

// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.figcaption');
const forecastContainer = document.querySelector('.forecast-container'); // Add a container for the forecast

// Fetch current weather data
async function getWeather() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.6037&lon=-0.1870&units=metric&appid=d2d88154f7fcfd57f092e8a314e5554b';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For debugging
            displayWeatherResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Fetch 3-day weather forecast
async function getForecast() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=5.6037&lon=-0.1870&units=metric&appid=d2d88154f7fcfd57f092e8a314e5554b';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For debugging
            displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}

// Function to display current weather
function displayWeatherResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1); // Capitalize first letter
}

function displayForecast(data) {
    const forecastDays = {}; 

    data.list.forEach((item) => {
        const date = new Date(item.dt_txt).toDateString(); 
        if (!forecastDays[date]) {
            forecastDays[date] = item;
        }
    });

    const forecastKeys = Object.keys(forecastDays).slice(0, 3);
    forecastContainer.innerHTML = '';

    forecastKeys.forEach((key) => {
        const forecast = forecastDays[key];
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');

        const date = document.createElement('h3');
        date.textContent = key;

        const temp = document.createElement('p');
        temp.innerHTML = `Temp: ${forecast.main.temp}&deg;C`;

        const icon = document.createElement('img');
        icon.src = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        icon.alt = forecast.weather[0].description;

        const desc = document.createElement('p');
        desc.textContent = forecast.weather[0].description.charAt(0).toUpperCase() + forecast.weather[0].description.slice(1);

        forecastCard.appendChild(date);
        forecastCard.appendChild(icon);
        forecastCard.appendChild(temp);
        forecastCard.appendChild(desc);

        forecastContainer.appendChild(forecastCard);
    });
}
getWeather();
getForecast();

let businessData;

// Create spotlight section
async function creatSpotlight() {
  try {
    businessData = await shuffleArray(members).slice(0, 3);
    console.log(businessData);
    spotlightTemplate();
  } catch (err) {
    console.error("Error fetching or processing business data:", err);
  }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function spotlightTemplate() {
    const spotlightContainer = document.querySelector('.spotlight');
    if (!spotlightContainer) {
        console.error("Spotlight container not found in the DOM.");
        return;
    }

    const spotlightBusinesses = document.querySelector(".spotlight-container");
    if (!spotlightBusinesses) {
        console.error("Spotlight container for cards not found in the DOM.");
        return;
    }

    // Loop through business data and create spotlight cards
    businessData.forEach((business) => {
        const spotlightWrapper = document.createElement('div');
        spotlightWrapper.className = "spotlightWrapper";
        const spotlightCard = document.createElement("div");
        spotlightCard.className = "spotlightCard";

        const memberName = document.createElement("h3");
        memberName.textContent = business.name;
        spotlightCard.appendChild(memberName);

        const memberImage = document.createElement("img");
        memberImage.src = business.image;
        memberImage.loading = "lazy";
        memberImage.alt = `${business.name} logo`;
        memberImage.width = 100;
        memberImage.height = 100;
        spotlightCard.appendChild(memberImage);

        const memberAddress = document.createElement("p");
        memberAddress.textContent = `Address: ${business.address}`;
        spotlightCard.appendChild(memberAddress);

        const memberPhoneNumber = document.createElement("p");
        memberPhoneNumber.textContent = `Phone: ${business.phone}`;
        spotlightCard.appendChild(memberPhoneNumber);

        const memberWebsite = document.createElement("a");
        memberWebsite.href = business.website;
        memberWebsite.textContent = `Visit our site`;
        memberWebsite.target = "_blank";
        spotlightCard.appendChild(memberWebsite);

        const membershipLevel = document.createElement("p");
        membershipLevel.textContent = `Membership Level: ${business.membership_level}`;
        spotlightCard.appendChild(membershipLevel);

        spotlightWrapper.appendChild(spotlightCard);
        spotlightBusinesses.appendChild(spotlightCard);
    });
}
creatSpotlight();
