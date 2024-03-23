console.log('javascript connected!')

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

// when the pause button is clicked, pause the carousel
const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');


carouselButton.addEventListener('click', function() {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

async function fetchWeather(){
    let apiKey = process.env.OPEN_WEATHER_API_KEY;
    let city = "Columbus";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial;`

    let data = await fetch(url);
    let weatherData = await data.json();

    if(!data.ok){
        throw new Error('Failed to fetch weather data');
    }

    displayWeather(weatherData);
    console.log(weatherData);
}

fetchWeather();

function displayWeather(jsonData){

    let image = jsonData.weather[0].icon;
    let url = `https://openweathermap.org/img/w/${image}.png`;

   let icon = document.querySelector("#weather-icon");
    let img = document.createElement('img');
     img.src = url
icon.appendChild(img);

//    let weatherDiv = //document.querySelector("#weather");
//    weatherDiv.appendChild(icon);

    let weatherTemp = document.querySelector("#weather-temp");
    weatherTemp.textContent =  jsonData.main.temp + "\u00B0";

    let weatherDescription = document.querySelector("#weather-description");
    weatherDescription.textContent = jsonData.weather[0].description;

   //icon.append(weatherTemp);
   //weatherTemp.append(weatherDescription);

}
// when the play button is clicked, begin cycling through the images
//const carouselPlay = document.getElementById('carouselPlay');
//carouselPlay.addEventListener('click', function() {
    //console.log('cycle the carousel')
    //carousel.cycle();
//})




























//console.log('javascript connected!');

//const carousel = new bootstrap.Carousel('#homeCarousel', {
    //interval: 2000,
    //pause: false
//})

// when the pause button is click, pause the carousel
//const carouselPause = document.getElementById('carouselPause');
//carouselPause.addEventListener('click', function() {
    //console.log('pausing the carousel');
    //carousel.pause();
//})

// when the play button is clicked, begin cycling through the images
//const carouselPlay = document.getElementById('carouselPlay');
//carouselPlay.addEventListener('click', function() {
    //console.log('cycle the carousel');
    //carousel.cycle();
//}) 

