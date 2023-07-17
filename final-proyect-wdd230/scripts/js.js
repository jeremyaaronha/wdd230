
var lastModified = new Date(document.lastModified);
var lastModifiedElement = document.getElementById("last-modified");
lastModifiedElement.textContent = lastModified.toLocaleString();


// Make a GET request to the OpenWeatherMap API

const apiKey = 'de64adba7154b478d2244bfca2081396';

// Función para actualizar el contenido de los elementos HTML con los datos del clima
function actualizarClima(temperatura, descripcion, humedad) {
  const weatherCard = document.querySelector('.weather-individual-card');
  weatherCard.querySelector('p:nth-child(2)').textContent = `Temperature: ${temperatura}°C`;
  weatherCard.querySelector('p:nth-child(3)').textContent = `Condition Description: ${descripcion}`;
  weatherCard.querySelector('p:nth-child(4)').textContent = `Humidity: ${humedad}%`;
}

// Función para actualizar el contenido de los elementos HTML con la previsión de temperatura
function actualizarPrevisionTemperatura(forecast) {
  const forecastCards = document.querySelectorAll('.forecast-temperature');

  forecastCards.forEach((card, index) => {
    const date = new Date(forecast[index + 1].dt * 1000).toLocaleDateString();
    const temperatura = Math.round(forecast[index + 1].temp.day - 273.15); // Convertir temperatura de Kelvin a Celsius

    card.textContent = `${date}: ${temperatura}°C`;
  });
}

// Obtener datos del clima actual y previsión de temperatura
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const temperatura = Math.round(data.main.temp - 273.15); // Convertir temperatura de Kelvin a Celsius
    const descripcion = data.weather[0].description;
    const humedad = data.main.humidity;

    actualizarClima(temperatura, descripcion, humedad);

    return fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Carlsbad&cnt=4&appid=${apiKey}`);
  })
  .then(response => response.json())
  .then(data => {
    const forecast = data.list;

    actualizarPrevisionTemperatura(forecast);
  })
  .catch(error => {
    console.log('Error al obtener los datos del clima:', error);
  });



// Get the current total number of specialty drinks from localStorage
let totalDrinks = localStorage.getItem('totalDrinks') || 0;

// Update the total number of specialty drinks
totalDrinks++;
localStorage.setItem('totalDrinks', totalDrinks);

// Display the total number of specialty drinks on the information card
const drinksCard = document.getElementById('drinks-card');
drinksCard.textContent = `Total Specialty Drinks Created By You: ${totalDrinks}`;


