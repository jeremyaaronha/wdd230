// Get temperature and wind speed values from HTML
const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("wind-speed");

// Extract numeric values from HTML elements
const temperature = parseFloat(temperatureElement.innerText);
const windSpeed = parseFloat(windSpeedElement.innerText);

// Check if values meet specification limits
if (temperature <= 50 && windSpeed > 3.0) {
  // Calculate wind chill
  const windChill = calculateWindChill(temperature, windSpeed);
  displayWindChill(windChill);
} else {
  // Values do not meet requirements, display "N/A"
  displayNA();
}

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  return windChill.toFixed(2);
}

// Function to display wind chill
function displayWindChill(windChill) {
  const windChillElement = document.getElementById('wind-chill');
  windChillElement.innerText = `${windChill} °F`;
}

// Function to display "N/A"
function displayNA() {
  const windChillElement = document.getElementById("wind-chill");
  windChillElement.innerText = 'N/A';
}
