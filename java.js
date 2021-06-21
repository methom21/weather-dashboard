



function weatherinfo(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=438bc70d124a31284573c288e0a446c7`
        )
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=39.7392&lon=-104.9847&appid=438bc70d124a31284573c288e0a446c7&units=imperial`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        var currentTemp = document.getElementById("temperature")
        var currentT = document.createElement("p")
        currentT.textContent = `tempurature: ${data.current.temp} fahrenheit`
        var currentW = document.createElement("p")
        currentW.textContent = `wind: ${data.current.wind_speed}MPH`
        var currentU = document.createElement("p")
        currentU.textContent = `UV index: ${data.current.uvi}%`
        var currentH = document.createElement("p")
        currentH.textContent = `humidity: ${data.current.humidity}%`
        var weatherImg = document.createElement("img")
        weatherImg.setAttribute("src", `http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`)
        $("#today").append(weatherImg,currentT,currentW,currentU,currentH)
        for(var i = 0;i<data.daily.length; i++){

            var column = document.createElement("div")
            column.classList.add("col-md-1")
            var card = document.createElement("div")
            card.classList.add("card")
            var wind5day = document.createElement("p")
            wind5day.classList.add("card-text")
            wind5day.textContent = `wind:${data.daily[i].wind_speed}`
            var humidity5day = document.createElement("p")
            humidity5day.classList.add("card-text")
            humidity5day.textContent = `humidity:${data.daily[i].humidity}`
            var date5day = document.createElement("p")
            date5day.classList.add("card-text")
            var temp5day = document.createElement("p")
            temp5day.classList.add("card-text")
            temp5day.textContent = `temperature:${data.daily[i].temp.day}`
            var weatherIcons = document.createElement("img")
            weatherIcons.setAttribute("src", `http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png`)
            card.append(wind5day, humidity5day, temp5day, weatherIcons)
            column.append(card)
            $("#forecast").append(column)
            
        }
    })
}
weatherinfo();
function getSearchValue(){
    var search = document.querySelector("#search").value
    if(search){
        weatherinfo(search)
        document.querySelector("#search").value = ""

    }
}
document.querySelector("#searchBtn").addEventListener("click", getSearchValue)