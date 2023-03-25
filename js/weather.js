// const API_KEY = config.WEATHER_KEY

const weatherName = document.querySelector('#weather span')
const weatherStatus = document.querySelector('#weather span:last-child')

const onGeoRun = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const name = data.name;
        const weather = data.weather[0].main
        weatherName.innerText = name
        weatherStatus.innerText = weather
    })
}
const onGeoError = () => {
    console.log('Error');
}

navigator.geolocation.getCurrentPosition(onGeoRun,onGeoError)
