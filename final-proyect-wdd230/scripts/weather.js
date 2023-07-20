// Make a GET request to the OpenWeatherMap API

const apiKey = 'de64adba7154b478d2244bfca2081396';

// Function to update the content of the HTML elements with the weather data
function updateWeather(temperature, description, humidity) {
  const weatherCard = document.querySelector('.weather-individual-card');
  weatherCard.querySelector('.current-temperature').textContent = `${temperature}°C`;
  weatherCard.querySelector('.condition-description').textContent = description;
  weatherCard.querySelector('.humidity').textContent = `${humidity}%`;
}

// Function to get the next three days formatted as "DayName, MonthDay, DayNumber"
function getNextThreeDaysFormatted() {
  const today = new Date();
  const nextThreeDays = [];

  for (let i = 1; i <= 3; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    nextThreeDays.push(nextDay);
  }

  const formattedDates = nextThreeDays.map(date => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  });

  return formattedDates;
}

// Fetch current weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const humidity = data.main.humidity;

    updateWeather(temperature, description, humidity);

    // Fetch forecast data for the next 3 days
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=4&appid=${apiKey}`);
  })
  .then(response => response.json())
  .then(data => {
    const forecast = data.list;

    const temperatureDay1 = Math.round(forecast[1].main.temp - 273.15);
    const temperatureDay2 = Math.round(forecast[2].main.temp - 273.15);
    const temperatureDay3 = Math.round(forecast[3].main.temp - 273.15);

    // Get the formatted dates for the next 3 days
    const [nextDay1, nextDay2, nextDay3] = getNextThreeDaysFormatted();

    // Update the content of the HTML elements with the dates and temperatures
    document.querySelector('.forecast-day-1').textContent = nextDay1;
    document.querySelector('.forecast-temperature-1').textContent = `${temperatureDay1}°C`;
    document.querySelector('.forecast-day-2').textContent = nextDay2;
    document.querySelector('.forecast-temperature-2').textContent = `${temperatureDay2}°C`;
    document.querySelector('.forecast-day-3').textContent = nextDay3;
    document.querySelector('.forecast-temperature-3').textContent = `${temperatureDay3}°C`;
  })
  .catch(error => {
    console.log('Error fetching weather data:', error);
  });
