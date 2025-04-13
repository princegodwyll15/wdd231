const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#captionDesc');
const forecastContainer = document.querySelector('#forecastContainer');

async function getWeather() {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.6037&lon=-0.1870&units=metric&appid=d2d88154f7fcfd57f092e8a314e5554b';
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayWeatherResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

async function getForecast() {
  const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=5.6037&lon=-0.1870&units=metric&appid=d2d88154f7fcfd57f092e8a314e5554b';
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error("Error fetching forecast data:", error);
  }
}

function displayWeatherResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
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

document.addEventListener('DOMContentLoaded', () => {
  getWeather();
  getForecast();
});
