const form = document.querySelector('.search')
let city;
const apiKey = "895284fb2d2c50a520ea537456963d9c";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`
const weatherIcon = document.querySelector('.weather-icon');

async function apiCall(city){
    try{
        const response = await fetch(weatherUrl + `&q=${city}`);
        const data = await response.json();
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main === 'Clouds'){
            weatherIcon.src = 'images/clouds.png';
        }else if(data.weather[0].main === 'Clear'){
            weatherIcon.src = 'images/clear.png';
        }else if(data.weather[0].main === 'Rain'){
            weatherIcon.src = 'images/rain.png';
        }else if(data.weather[0].main === 'Drizzle'){
            weatherIcon.src = 'images/drizzle.png';
        }else if(data.weather[0].main === 'Mist'){
            weatherIcon.src = 'images/mist.png';
        }

    }catch(error){
        console.log(error);
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    city = document.querySelector('.input').value.toLowerCase();
    apiCall(city);
})

