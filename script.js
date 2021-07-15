let input = document.getElementById("city");
var key = "badc180ea392f35f8982429971a1c1c7";

window.onload = function (event) {
  fetchWeather("Mures");
};

function fetchWeather() {
  var city = input.value === "" ? "Mures" : input.value;
  var key = "badc180ea392f35f8982429971a1c1c7";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      key
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return drawWeather(data);
    });
  // input.value = "";
}

function drawWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city-name").innerText = "Weather in " + name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = Math.floor(temp) + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
  document.querySelector(".weather").classList.remove("loading");
}

document
  .getElementById("weatherButton")
  .addEventListener("click", fetchWeather);

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    fetchWeather();
  }
});

///////////////////////////////////////////////////////////// Forecast Code //////////////////////////////////////////////////////////////////////////

document.getElementById("forecast").addEventListener("click", fetchForecast);
var city = input.value === "" ? "Mures" : input.value;
var forecastVar =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  city +
  "&appid=badc180ea392f35f8982429971a1c1c7&units=metric";
// var cityID = input.value;

function fetchForecast() {
  let forecastBox = document.getElementsByClassName("forecast-box");
  forecastBox[0].classList.remove("hide-forecast");
  fetch(forecastVar)
    .then(function (responseForecast) {
      console.log(responseForecast);
      return responseForecast.json();
    })
    .then(function (list) {
      return drawForecast(list);
    });
}

function drawForecast(data) {
  console.log(data);
  let i = 0;
  for (j = 0; j < 40; j = j + 8) {
    console.log(data.list[j]);
    const { icon, description } = data.list[j].weather[0];
    const { temp, humidity } = data.list[j].main;
    const { speed } = data.list[j].wind;
    const date = new Date(data.list[j].dt_txt);
    console.log(date);
    document.querySelector(`.day-forecast-${i}`).innerText = getDateText(
      date.getDay()
    );
    document.querySelector(`.icon-forecast-${i}`).src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(
      `.description-forecast-${i}`
    ).innerText = description;
    document.querySelector(`.temp-forecast-${i}`).innerText =
      Math.floor(temp) + "°C";
    document
      .querySelector(`.weather-forecast-${i}`)
      .classList.remove("loading");
    i++;
  }
}

function getDateText(day) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}
