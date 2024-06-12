console.log("config index.html");

const apiKey = "8615a8a0af8464e5c29e4f08017ab692";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    if(!data.name){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main === "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main === "Clonds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main === "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});