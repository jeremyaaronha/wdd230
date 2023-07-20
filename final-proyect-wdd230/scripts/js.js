
var lastModified = new Date(document.lastModified);
var lastModifiedElement = document.getElementById("last-modified");
lastModifiedElement.textContent = lastModified.toLocaleString();












// Make a GET request to the OpenWeatherMap API

const apiKey = 'de64adba7154b478d2244bfca2081396';

// Función para actualizar el contenido de los elementos HTML con los datos del clima
function actualizarClima(temperatura, descripcion, humedad) {
    const weatherCard = document.querySelector('.weather-individual-card');
    weatherCard.querySelector('.current-temperature').textContent = `${temperatura}°C`;
    weatherCard.querySelector('.condition-description').textContent = descripcion;
    weatherCard.querySelector('.humidity').textContent = `${humedad}%`;
  }

  function actualizarClima(temperatura, descripcion, humedad) {
    document.querySelector('.current-temperature').textContent = `${temperatura}°C`;
    document.querySelector('.condition-description').textContent = descripcion;
    document.querySelector('.humidity').textContent = `${humedad}%`;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const temperatura = Math.round(data.main.temp - 273.15);
      const descripcion = data.weather[0].description;
      const humedad = data.main.humidity;

      actualizarClima(temperatura, descripcion, humedad);

      return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=4&appid=${apiKey}`);
    })

    .catch(error => {
      console.log('Error al obtener los datos del clima:', error);
    });






    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=4&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const forecast = data.list;
  
      const temperatureDay1 = Math.round(forecast[1].main.temp - 273.15);
      const temperatureDay2 = Math.round(forecast[2].main.temp - 273.15);
      const temperatureDay3 = Math.round(forecast[3].main.temp - 273.15);
  
      // Obtener las fechas de los siguientes 3 días en formato "NameDay, MonthDay, DayNumber"
      const [nextDay1, nextDay2, nextDay3] = getNextThreeDaysFormatted();
  
      // Actualizar el contenido de los elementos HTML con las fechas y temperaturas
      document.querySelector('.forecast-day-1').textContent = nextDay1;
      document.querySelector('.forecast-temperature-1').textContent = `${temperatureDay1}°C`;
      document.querySelector('.forecast-day-2').textContent = nextDay2;
      document.querySelector('.forecast-temperature-2').textContent = `${temperatureDay2}°C`;
      document.querySelector('.forecast-day-3').textContent = nextDay3;
      document.querySelector('.forecast-temperature-3').textContent = `${temperatureDay3}°C`;
    })
    .catch(error => {
      console.log('Error al obtener los datos del clima:', error);
    });
  





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
  




    

  













  // Function to load fruits from the JSON file
  function loadFruits() {
    // URL of the JSON file containing fruit data
    const jsonURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

    // Fetch the JSON file content using an HTTP request
    fetch(jsonURL)
      .then(response => response.json())
      .then(data => {
        // Retrieve all select elements for fruits in the form
        const fruitSelects = document.querySelectorAll('select[name^="fruit"]');

        // Clear existing options in each select
        fruitSelects.forEach(select => (select.innerHTML = ''));

        // Add a default option at the beginning of each select
        fruitSelects.forEach(select => {
          const defaultOption = document.createElement('option');
          defaultOption.value = '';
          defaultOption.textContent = '- Please select a fruit -';
          select.appendChild(defaultOption);
        });

        // Add the fruit options from the JSON data to each select
        data.forEach(fruit => {
          fruitSelects.forEach(select => {
            const option = document.createElement('option');
            option.value = fruit.name;
            option.textContent = fruit.name;
            select.appendChild(option);
          });
        });
      })
      .catch(error => console.error('Error loading JSON: ', error));
  }

  // Load the fruits when the page finishes loading
  window.addEventListener('load', loadFruits);



 
    // Function to load fruits from the JSON file
    function loadFruits() {
      // Fetch the nutrition data from the JSON file
      fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        .then(response => response.json())
        .then(data => {
          // Get the select elements for each fruit
          const fruitSelects = document.querySelectorAll('select[name^="fruit"]');
  
          // Add the options from the JSON data to each select
          data.forEach(fruit => {
            const option = document.createElement('option');
            option.value = fruit.name;
            option.textContent = fruit.name;
            fruitSelects.forEach(select => {
              select.appendChild(option.cloneNode(true));
            });
          });
        })
        .catch(error => {
          console.error('Error loading JSON: ', error);
          const outputArea = document.getElementById('output-area');
          outputArea.innerHTML = 'Error loading JSON. Please check the data source.';
        });
    }
  
    // Load the fruits when the page finishes loading
    window.addEventListener('load', loadFruits);
  

    function displayTotalDrinksSubmitted() {
        // Get the total number of drinks submitted by the user from local storage
        let totalDrinksSubmitted = parseInt(localStorage.getItem('totalDrinksSubmitted')) || 0;
    
        // Display the information card about the total number of drinks submitted
        const drinksCard = document.getElementById('drinks-card');
        drinksCard.innerHTML = `
          <p>You have submitted a total of ${totalDrinksSubmitted} specialty drinks.</p>
        `;
      }
    
      // Load the total number of drinks submitted when the page finishes loading
      window.addEventListener('load', displayTotalDrinksSubmitted);
    
    // Function to handle form submission and display the output
    function handleSubmit(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the input values from the form
      const firstName = document.getElementById('first-name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const fruit1 = document.getElementById('fruit1').value;
      const fruit2 = document.getElementById('fruit2').value;
      const fruit3 = document.getElementById('fruit3').value;
      const specialInstructions = document.getElementById('special-instructions').value;
  
      // Fetch the nutrition data from the JSON file
      fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        .then(response => response.json())
        .then(data => {
          const nutritionData = {};
  
          // Store the nutrition data in an object for easy access
          data.forEach(fruit => {
            nutritionData[fruit.name] = fruit.nutritions;
          });
  
          // Calculate nutrition information based on the selected fruits
          const selectedFruits = [fruit1, fruit2, fruit3];
          let totalCarbohydrates = 0;
          let totalProtein = 0;
          let totalFat = 0;
          let totalSugar = 0;
          let totalCalories = 0;
  
          selectedFruits.forEach(fruit => {
            totalCarbohydrates += nutritionData[fruit].carbohydrates;
            totalProtein += nutritionData[fruit].protein;
            totalFat += nutritionData[fruit].fat;
            totalSugar += nutritionData[fruit].sugar;
            totalCalories += nutritionData[fruit].calories;
          });

            // Get the total number of drinks submitted by the user from local storage
            let totalDrinksSubmitted = parseInt(localStorage.getItem('totalDrinksSubmitted')) || 0;

            // Increment the total number of drinks submitted by the user
            totalDrinksSubmitted+= 1;
        
            // Store the updated total number of drinks submitted back in local storage
            localStorage.setItem('totalDrinksSubmitted', totalDrinksSubmitted);
  
          // Display the formatted output on the page
          const orderDate = lastModified.toLocaleString();

          displayTotalDrinksSubmitted();


          const outputArea = document.getElementById('output-area');
          outputArea.innerHTML = `
            <h2>Your Order</h2>
            <p><strong>Order Date:</strong> ${orderDate}</p>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Selected Fruits:</strong> ${selectedFruits.join(', ')}</p>
            <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
            <h2>Nutrition Information</h2>
            <p><strong>Total Carbohydrates:</strong> ${totalCarbohydrates.toFixed(2)} g</p>
            <p><strong>Total Protein:</strong> ${totalProtein.toFixed(2)} g</p>
            <p><strong>Total Fat:</strong> ${totalFat.toFixed(2)} g</p>
            <p><strong>Total Sugar:</strong> ${totalSugar.toFixed(2)} g</p>
            <p><strong>Total Calories:</strong> ${totalCalories.toFixed(2)} cal</p>
          `;
        })
        .catch(error => {
          console.error('Error loading JSON: ', error);
          const outputArea = document.getElementById('output-area');
          outputArea.innerHTML = 'Error loading JSON. Please check the data source.';
        });
        }

    // Attach the event handler to the form submission
    document.getElementById('drink-form').addEventListener('submit', handleSubmit);

    displayTotalDrinksSubmitted();


  