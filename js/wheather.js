const temperatureElement = document.querySelector('#temperature');
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=f6bd0503c515a86e8ebb6b1104484247    ';

  // Fetch the weather data from the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract the temperature from the API response
      const temperatureInKelvin = data.main.temp;
      // Convert the temperature from Kelvin to Celsius
      const temperatureInCelsius = kelvinToCelsius(temperatureInKelvin);
      // Set the temperature text in the element
      temperatureElement.innerHTML = `Live Temprature   : ${temperatureInCelsius.toFixed(2)}°C`;
    })
    .catch(error => {
      console.error(error);
    });