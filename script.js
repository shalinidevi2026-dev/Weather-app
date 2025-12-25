const weatherInfo = document.getElementById('weatherInfo');
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

// Fetch weather by city name
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if(city) {
        fetchWeatherByCity(city);
    } else {
        alert('Please enter a city name.');
    }
});

function fetchWeatherByCity(city) {
    // wttr.in API URL (no API key needed)
    const url = `https://wttr.in/${city}?format=j1`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const current = data.current_condition[0]; // current weather
        displayWeather(city, current);
    })
    .catch(err => {
        weatherInfo.innerHTML = `<p>City not found or API error</p>`;
    });
}

function displayWeather(city, current) {
    weatherInfo.innerHTML = `
        <h2>${city}</h2>
        <p><strong>Temperature:</strong> ${current.temp_C} °C</p>
        <p><strong>Weather:</strong> ${current.weatherDesc[0].value}</p>
        <p><strong>Humidity:</strong> ${current.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${current.windspeedKmph} km/h</p>
    `;
}
