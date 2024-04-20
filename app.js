const apiKey = "44984c5312514836b0f394f871540ec1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(response.ok) {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Weather App\rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Weather App\drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Weather App\mist.png";
        }
        document.querySelector(".weather").style.display = "block";
    } else {
        // Handle invalid city name or API error
        document.querySelector(".weather").style.display = "none"; // Hide weather info
        alert("Please enter a valid city name."); // Show error message
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
