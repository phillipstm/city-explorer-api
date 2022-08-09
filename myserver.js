'use strict';
console.log('!!!!server.js connected.');

const express = require('express');
require('dotenv').config();
//let data = require('./data/weather.json');
const cors = require('cors');

//must include cors if we want to share resources over the web
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;


//our root of site pass callback(two, param)
app.get('*', (request, response) => {
  response.send('hello from cyberland!!!!');
});




app.get('/weather', async (request, response, next) => {
  try {
    //console.log('did we get req!!',request.query.query);
    let lat = request.query.lat;
    let lon = request.query.lon;
    console.log('what t h', searchQuery);
    // let weatherDataToInstant = data.find(ele => console.log('mmmmmmm', ele.city_name));
    const url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lang=en&units=I&days=5&lat=${lat}&lon=${lon}`;
    let weatherData = await axios.get(url);
    let weatherForecast = weatherData.data.data.map(weatherData => new Forecast(weatherData));
    //let weatherDataToInstant = data.find(weatherElement => weatherElement.city_name.toLowerCase() === searchQuery.toLowerCase());

    //console.log('!!!!!!!!!!datatatatat', weatherDataToInstant);
    //let weatherObject = new Weather(weatherDataToInstant);
    //console.log('zzzzzzzzzz', weatherObject);

    //let weatherLat = new WeatherLat(weatherDataToInstant);
    //console.log('llllllaaaatttt', weatherLat);

    response.status(200).send(weatherForecast);
  } catch (error) {
    next(error);
  }
});



app.get('*', (request, response) => {
  response.send('The route was not found. Error 404');
});



//Classes
//class Weather {
//   constructor(weatherObject) {
//     console.log('weatherOject in lon..!!!!!!!..', weatherObject.lon);
//     this.dateTime = weatherObject.data.dateTime;

//   }
// }

// class WeatherLat {
//   constructor(weatherLat) {
//     console.log('weatherLat in lattttttttt', weatherLat.lat);
//     this.dateTime = weatherLat.data.dateTime;

//   }
// }

class Forecast {
  constructor(forecast) {
    console.log('forecast222222', forecast.description);
    this.dateTime = forecast.dateTime;
    this.description = forecast.weather.description;
    this.temp = forecast.temp;
    this.min_temp = forecast.min_temp;
    this.max_temp = forecast.max_temp;
  }
}

//Errors

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
