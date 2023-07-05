
var lastModified = new Date(document.lastModified);
var lastModifiedElement = document.getElementById("last-modified");
lastModifiedElement.textContent = lastModified.toLocaleString();


// Make a GET request to the OpenWeatherMap API
fetch('https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=YOUR_API_KEY&units=metric')
.then(response => response.json())
.then(data => {
  // Extract the required weather information from the API response
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;

  // Create the HTML content for the weather card
  const weatherCard = document.getElementById('weather-card');
  weatherCard.innerHTML = `
  <h2>Weather</h2>
  <p>Temperature: ${temperature}°C</p>
  <p>Description: ${description}</p>
  <p>Humidity: ${humidity}%</p>
  `;
})
.catch(error => console.log(error));


// Get the current total number of specialty drinks from localStorage
let totalDrinks = localStorage.getItem('totalDrinks') || 0;

// Update the total number of specialty drinks
totalDrinks++;
localStorage.setItem('totalDrinks', totalDrinks);

// Display the total number of specialty drinks on the information card
const drinksCard = document.getElementById('drinks-card');
drinksCard.textContent = `Total Specialty Drinks Created By You: ${totalDrinks}`;


