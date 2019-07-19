//weather script
var requestURL = "http://api.openweathermap.org/data/2.5/weather?zip=97132,us&APPID=c3259b476fba8880191b6e087f87f2e9";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onreadystatechange = function () {
    var jsonObj = request.response;
    var c = Math.round((((jsonObj.main.temp / 10) * 9) / 5) + 32);
    document.getElementById("temp").innerHTML = c;
    document.getElementById("weather").innerHTML = jsonObj.weather[0].main;
    document.getElementById("wind").innerHTML = jsonObj.wind.speed;
    document.getElementById("humidity").innerHTML = jsonObj.main.humidity;
}  