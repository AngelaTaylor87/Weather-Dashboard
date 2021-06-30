var today = moment();
document.getElementById('current-date').textContent =  today.format("(L)");
var fetchButton = document.querySelector('#fetch-button');
console.log(fetchButton)
var temp = document.getElementById('current-temp')
var wind = document.getElementById('current-wind')
var humid = document.getElementById('current-hum')
var uvi = document.getElementById('uv-index')
var nDTemp = document.getElementById('n-d-temp')
var nDWind = document.getElementById('n-d-wind')
var nDHum = document.getElementById('n-d-hum')
var nUvi = document.getElementById('n-d-uv')
var thDTemp = document.getElementById('third-d-temp')
var thDWind = document.getElementById('third-d-wind')
var thDHum = document.getElementById('third-d-hum')
var thDUvi = document.getElementById('third-d-uv')
var fDTemp = document.getElementById('fourth-d-temp')
var fDWind = document.getElementById('fourth-d-wind')
var fDHum = document.getElementById('fourth-d-hum')
var fDUvi = document.getElementById('fourth-d-uv')
var fiDTemp = document.getElementById('fifth-d-temp')
var fiDWind = document.getElementById('fifth-d-wind')
var fiDHum = document.getElementById('fifth-d-hum')
var fiDUvi = document.getElementById('fifth-d-uv')
var sDTemp = document.getElementById('sixth-d-temp')
var sDWind = document.getElementById('sixth-d-wind')
var sDHum = document.getElementById('sixth-d-hum')
var sDUvi = document.getElementById('sixth-d-uv')

const APIKey = "6ebf25cc38abf50137f1b884c40624f2";
const click = document.getElementById('click-me');

fetchButton.addEventListener('click', function(){
    event.preventDefault()
    const city = document.querySelector('input').value;
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,alerts&appid=${APIKey}`)
            .then(function (response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                wind.textContent = "Wind: " + data.current.wind_speed + " MPH";
                humid.textContent = "Humidity: " + data.current.humidity + " %";
                temp.textContent = "Temp: " + data.current.temp + " °F";
                uvi.textContent = "Uv Index: " + data.current.uvi;
                nDTemp.textContent = "Temp: " + data.daily[1].temp.day + " °F";
                nDWind.textContent = "Wind: " + data.daily[1.].wind_speed + " MPH";
                nDHum.textContent = "Humidity: " + data.daily[1].humidity + " %";
                nUvi.textContent = "Uv Index: " + data.daily[1].uvi;
                thDTemp.textContent = "Temp: " + data.daily[2].temp.day + " °F";
                thDWind.textContent = "Wind: " + data.daily[2].wind_speed + " MPH";
                thDHum.textContent = "Humidity: " + data.daily[2].humidity + " %";
                thDUvi.textContent = "Uv Index: " + data.daily[2].uvi;
                fDTemp.textContent = "Temp: " + data.daily[3].temp.day + " °F";
                fDWind.textContent = "Wind: " + data.daily[3].wind_speed + " MPH";
                fDHum.textContent = "Humidity: " + data.daily[3].humidity + " %";
                fDUvi.textContent = "Uv Index: " + data.daily[3].uvi;
                fiDTemp.textContent = "Temp: " + data.daily[4].temp.day + " °F";
                fiDWind.textContent = "Wind: " + data.daily[4].wind_speed + " MPH";
                fiDHum.textContent = "Humidity: " + data.daily[4].humidity + " %";
                fiDUvi.textContent = "Uv Index: " + data.daily[4].uvi;
                sDTemp.textContent = "Temp: " + data.daily[5].temp.day + " °F";
                sDWind.textContent = "Wind: " + data.daily[5].wind_speed + " MPH";
                sDHum.textContent = "Humidity: " + data.daily[5].humidity + " %";
                sDUvi.textContent = "Uv Index: " + data.daily[5].uvi;
            })

        })
              
    });  

 