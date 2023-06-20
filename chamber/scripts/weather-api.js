// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const city = 'Santiago';
const units = 'metric';
const appId = 'de64adba7154b478d2244bfca2081396'; 

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${appId}`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
            displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  function displayResults(weatherData) {
    const temperature = weatherData.main.temp.toFixed(0);
    const condition = weatherData.weather[0].description;
    const windSpeed = weatherData.wind.speed;
    const windChill = calculateWindChill(temperature, windSpeed);
  
    currentTemp.innerHTML = `<strong>${temperature}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const capitalizedCondition = condition.charAt(0).toUpperCase() + condition.slice(1).toLowerCase();
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', condition);
  
    const resultContainer = document.querySelector('#result-container');
    resultContainer.innerHTML = `
      <p>Temperature: ${temperature} &deg;C</p>
      <p>Condition: ${capitalizedCondition}</p>
      <p>Wind Speed: ${windSpeed} mph</p>
      <p>Wind Chill: ${windChill} &deg;C</p>
    `;
  }
  
  function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed >= 4.8) {
      const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
      return windChill.toFixed(0);
    } else {
      return "N/A";
    }
  }
  
  