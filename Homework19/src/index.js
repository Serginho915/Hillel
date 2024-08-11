
const city = 'Odesa';
const APIkey = '13ce92ddea7b4a2945b1cbe519f584e5';

async function getWeather() {
    try {
        document.getElementById('temperature').innerText = 'Loading...';
        document.getElementById('description').innerText = 'Loading...';

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ua&appid=${APIkey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch the weather data');
        }
        const data = await response.json();

        document.getElementById('city').innerHTML = city;
        document.getElementById('temperature').innerText = `Температура: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Опис: ${data.weather[0].description}`;

    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('temperature').innerText = 'Failed to load';
        document.getElementById('description').innerText = 'Failed to load';
    }
}
window.getWeather = getWeather;
getWeather();
