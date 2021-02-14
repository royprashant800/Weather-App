// api.openweathermap.org/data/2.5/weather?q={city Name}&appid={API key};

const weatherApi = {
    key: "d18b5ab20239343749a25a24f795a2c1",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('citysr');

//Event listener function on keypress
searchInputBox.addEventListener('keypress', (Event) => {
    if(Event.code == "Enter") {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
})

//Get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

//show weather report
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minmax = document.getElementById('minmax');
    minmax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherCondition = document.getElementById('condition');
    weatherCondition.innerHTML = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherCondition.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('img/clear.jpg')";
        document.querySelector('.container::before').style.backgroundImage = "url('img/clear.jpg')";
    }
    else if(weatherCondition.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('img/cloud.jpg')";
        document.querySelector('.container::before').style.backgroundImage = "url('img/cloud.jpg')";
    }
    else if(weatherCondition.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('img/haze.jpg')";
        document.querySelector('.container::before').style.backgroundImage = "url('img/haze.jpg')";
    }
    else if(weatherCondition.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('img/rainy.jpg')";
        document.querySelector('.container::before').style.backgroundImage = "url('img/rainy.jpg')";
    }
    else if(weatherCondition.textContent == 'Smoke') {
        document.body.style.backgroundImage = "url('img/smoke.jpg')";
        document.querySelector('.container::before').style.backgroundImage = "url('img/smoke.jpg')";
    }
    else if(weatherCondition.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('img/mist.jpg')";
        document.querySelector('.container::before').style.backgroundImage = "url('img/mist.jpg')";
    }
    else if(weatherCondition.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('img/snow.jpg')";
        document.querySelector('.container::before').style.backgroundImage = "url('img/snow.jpg')";
    }
}

//Date manage
function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "june", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day}, ${year}`;
}