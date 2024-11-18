const apikey = "17315bfe117cdaefbb31e516e0ce9b2b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")

const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apikey}`)
    if(response.status==404){
        document.querySelector(".error").style.dispaly="block"
        document.querySelector(".weather").style.display="none"
    }else{

        
    var data= await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/cloudy.png"

    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/sun.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.gif"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src="images/Haze.png"
    }
    document.querySelector(".weather").style.display= "block";
    document.querySelector(".error").style.dispaly="none"

    }

    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


