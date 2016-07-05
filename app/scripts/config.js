const baseForecastUrl = 'http://api.openweathermap.org/data/2.5/'
const apiKey = '195ed9b45418c46b4a7c6f0e7a487e18';

let config = {
  getForecastUrl : (cityName)=>  `${baseForecastUrl}forecast/daily?mode=json&units=metric&q=${cityName}&appid=${apiKey}`
}
export { config }
