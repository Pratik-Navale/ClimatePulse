const apikey = "5b77232139a5c66014d71135b5de53da";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkwhether(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        // document.querySelector(".error").style.display="block";
        // document.querySelector(".weather").style.display="none";
        alert("Invalide City Name!");
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".Humadity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/Rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png"
        } else if (data.weather[0].main == "Snow") {
            weathericon.src = "images/snow.png"
        }
    }
}
searchbtn.addEventListener("click", () => {

    if (searchbox.value == "") {
        // document.querySelector(".loader").style.display="block";
        alert("Enter City Name!");
    }
    else {
        // document.querySelector(".error").style.display="block";
        checkwhether(searchbox.value);
    }
})
