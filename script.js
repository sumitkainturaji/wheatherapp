const apiKey = 'a2d3c8db7be8acd733dac9d947fe4470' // Your OpenWeather API key
const defaultCity = 'Dehradun' // Default city

const getWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.getElementById('cityName').textContent = city
      document.getElementById('maintemp').textContent = data.main.temp
      document.getElementById('mainspeed').textContent = data.wind.speed
      document.getElementById('mainhumidity').textContent = data.main.humidity
      document.getElementById('temp').textContent = data.main.temp
      document.getElementById('feels_like').textContent = data.main.feels_like
      document.getElementById('humidity').textContent = data.main.humidity
      document.getElementById('min_temp').textContent = data.main.temp_min
      document.getElementById('max_temp').textContent = data.main.temp_max
      document.getElementById('wind_speed').textContent = data.wind.speed
      document.getElementById('wind_degrees').textContent = data.wind.deg
      document.getElementById('sunrise').textContent = new Date(
        data.sys.sunrise * 1000
      ).toLocaleTimeString()
      document.getElementById('sunset').textContent = new Date(
        data.sys.sunset * 1000
      ).toLocaleTimeString()
    })
    .catch((err) => console.error(err))
}

// Function to get weather data based on geolocation
const getWeatherByGeolocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          document.getElementById('cityName').textContent = data.name
          document.getElementById('maintemp').textContent = data.main.temp
          document.getElementById('mainspeed').textContent = data.wind.speed
          document.getElementById('mainhumidity').textContent =
            data.main.humidity
          document.getElementById('temp').textContent = data.main.temp
          document.getElementById('feels_like').textContent =
            data.main.feels_like
          document.getElementById('humidity').textContent = data.main.humidity
          document.getElementById('min_temp').textContent = data.main.temp_min
          document.getElementById('max_temp').textContent = data.main.temp_max
          document.getElementById('wind_speed').textContent = data.wind.speed
          document.getElementById('wind_degrees').textContent = data.wind.deg
          document.getElementById('sunrise').textContent = new Date(
            data.sys.sunrise * 1000
          ).toLocaleTimeString()
          document.getElementById('sunset').textContent = new Date(
            data.sys.sunset * 1000
          ).toLocaleTimeString()
        })
        .catch((err) => console.error(err))
    },
    (error) => {
      console.error(error)

      getWeather(defaultCity)
    }
  )
}

const submitButton = document.querySelector('#submitx')
const cityInput = document.querySelector('#city')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  getWeather(cityInput.value)
})

getWeather(defaultCity)

const predefinedCities = ['New York', 'Uttarakhand', 'Bangalore', 'Tokyo']
predefinedCities.forEach((city, index) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(`temp${index + 1}`).textContent = data.main.temp
      document.getElementById(`feels_like${index + 1}`).textContent =
        data.main.feels_like
      document.getElementById(`humidity${index + 1}`).textContent =
        data.main.humidity
      document.getElementById(`min_temp${index + 1}`).textContent =
        data.main.temp_min
      document.getElementById(`max_temp${index + 1}`).textContent =
        data.main.temp_max
      document.getElementById(`wind_speed${index + 1}`).textContent =
        data.wind.speed
      document.getElementById(`wind_degrees${index + 1}`).textContent =
        data.wind.deg
      document.getElementById(`sunrise${index + 1}`).textContent = new Date(
        data.sys.sunrise * 1000
      ).toLocaleTimeString()
      document.getElementById(`sunset${index + 1}`).textContent = new Date(
        data.sys.sunset * 1000
      ).toLocaleTimeString()
    })
    .catch((err) => console.error(err))
})
