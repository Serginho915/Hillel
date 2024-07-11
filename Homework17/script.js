const city = 'Odesa';
const APIkey = '13ce92ddea7b4a2945b1cbe519f584e5'

async function getWeather(){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ua&appid=${APIkey}`);
        const data = await response.json();
    
        console.log(data);

        document.getElementById('city').innerHTML = city;
        document.getElementById('temperature').innerText = `Температура: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Опис: ${data.weather[0].description}`;
        
    }
    catch (error) {
        console.error('Error fetching the weather data:', error);
    }
}


getWeather()