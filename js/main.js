const searchInput = document.querySelector('#weatherInput')
const searchBtn = document.querySelector('#getWeather')

searchBtn.addEventListener('click', async () => {
    let searchVal = searchInput.value
    let kelvin = 0
    try {
        const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${searchVal}&APPID=463319c700962c51a60305c16be313bf`, {mode: 'cors'} )
        const searchData = await response.json()
        kelvin = searchData.main.temp
        let kelvinToFahrenheit = Math.floor((kelvin - 273.15) * (9/5) + 32)
        let conditions = searchData.weather[0].main
        console.log(conditions)
        console.log(searchData)
        console.log(kelvinToFahrenheit)
    }catch(err){

    }
})


