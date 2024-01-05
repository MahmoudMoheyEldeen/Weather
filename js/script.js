


let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let customDate = new Date()
let currentDay

let country='Assiut'
// let country=prompt('sadasdasdd')

async function getWeather(){

    country = document.querySelector('.countryInput').value

    if(country==''){
     weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=655cd9957d34459aa4084954233012&q=assiut&days=3`)
    }
    else{
        weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=655cd9957d34459aa4084954233012&q=${country}&days=3`)

    }
    console.log(country);
    weather = await weather.json()
    country=document.querySelector('.countryInput').value;
    document.querySelector('.country-text').innerHTML= weather.location.name
    document.querySelector('.dgree-text').innerHTML= weather.forecast.forecastday[0].day.maxtemp_c
    document.querySelector('.weather-img').setAttribute('src',weather.current.condition.icon)
    document.querySelector('.weather-status').innerHTML= weather.current.condition.text

/////////////Tomorrow

document.querySelector('.tomorrow-dgree-text').innerHTML= weather.forecast.forecastday[1].day.maxtemp_c
document.querySelector('.tomorrow-weather-img').setAttribute('src',weather.current.condition.icon)
document.querySelector('.tomorrow-weather-status').innerHTML= weather.current.condition.text

////////////////afterTomorrow

document.querySelector('.afterTomorrow-dgree-text').innerHTML= weather.forecast.forecastday[2].day.maxtemp_c
document.querySelector('.afterTomorrow-weather-img').setAttribute('src',weather.current.condition.icon)
document.querySelector('.afterTomorrow-weather-status').innerHTML= weather.current.condition.text

/////////////////////////
    
    let dayNumber=customDate.getDate()
    let tomorrow
    let afterTomorrow
    switch(dayNumber){
        case 0:
            document.querySelector('.current-day').innerHTML='Sunday'
            document.querySelector('.tomorrow').innerHTML='Monday'
            document.querySelector('.afterTomorrow').innerHTML='Tuesday'

            break;
        case 1:
            document.querySelector('.current-day').innerHTML='Monaday'
            document.querySelector('.tomorrow').innerHTML='Tuesday'
            document.querySelector('.afterTomorrow').innerHTML='Wednesday'
            break;
        case 2:
            document.querySelector('.current-day').innerHTML='Tuesday'
            document.querySelector('.tomorrow').innerHTML='Wednesday'
            document.querySelector('.afterTomorrow').innerHTML='Thursday'
            break;
        case 3:
            document.querySelector('.current-day').innerHTML='Wednesday'
            document.querySelector('.tomorrow').innerHTML='Thursday'
            document.querySelector('.afterTomorrow').innerHTML='Friday'
            break;
        case 4:
            document.querySelector('.current-day').innerHTML='Thursday'
            document.querySelector('.tomorrow').innerHTML='Friday'
            document.querySelector('.afterTomorrow').innerHTML='Saturday'
            break;
        case 5:
            document.querySelector('.current-day').innerHTML='Friday'
            document.querySelector('.tomorrow').innerHTML='Saturday'
            document.querySelector('.afterTomorrow').innerHTML='Sunday'
            break;
        case 6:
            document.querySelector('.current-day').innerHTML='Saturday'
            document.querySelector('.tomorrow').innerHTML='Sunday'
            document.querySelector('.afterTomorrow').innerHTML='Monday'
            break;
    }


    console.log(country);

document.querySelector('.countryInput').value=''

}

document.querySelector('.find').addEventListener('click',function(event){
    // preventDefault()
    // getWeather
    event.preventDefault()
    console.log('asdadsa');
    getWeather()

})
 getWeather()

