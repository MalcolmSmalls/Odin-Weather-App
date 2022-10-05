const searchInput = document.querySelector('#weatherInput')
const searchBtn = document.querySelector('#getWeather')
let conditions = ""


searchBtn.addEventListener('click', async () => {
    let searchVal = searchInput.value
    let kelvin = 0
    try {
        const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${searchVal}&APPID=463319c700962c51a60305c16be313bf`, {mode: 'cors'} )
        const searchData = await response.json()
        kelvin = searchData.main.temp
        let kelvinToFahrenheit = Math.floor((kelvin - 273.15) * (9/5) + 32)
        conditions = searchData.weather[0].main
        let city = searchData.name
        document.querySelector('h2').textContent = `${kelvinToFahrenheit}°F`
        document.querySelector('h3').textContent = `${city}`
        document.querySelector('p').textContent = `${conditions}`
        switchConditions()
    }catch(err){
        document.querySelector('h2').textContent = `ERROR: Wrong City`
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/hv5AEBpH3ZyNoRnABG/giphy.gif')"
    }
})


// async function switchConditions() {
//     try{
//         const response = await fetch (`https://api.giphy.com/v1/gifs/translate?api_key=kNz4rhxdiTEePFuPQJXKYZltwUB2S8ae&s=${conditions}`, {mode: 'cors'})
//         const gifData = await response.json()
//         let gifLink = gifData.data[Math.floor(Math.random() * 50)].images.original.url
//         console.log(response)
//         document.body.style.backgroundImage = `url('${gifLink}')`                
//     }catch(err){
//         console.log('didnt work')             
//     }
// }



async function switchConditions() {
    try{
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=kNz4rhxdiTEePFuPQJXKYZltwUB2S8ae&q=${conditions}`, {mode: 'cors'});
    const searchData = await response.json();
    let gifLink = searchData.data[Math.floor(Math.random() * 50)].images.original.url
    document.body.style.backgroundImage = `url('${gifLink}')`    
    }catch(err){
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/hv5AEBpH3ZyNoRnABG/giphy.gif')"
    }

}