'use strict';
console.log('!!!!server.js connected.');

const express = require('express');

require('dotenv').config();
let data = require('./data/weather.json');

const cors = require('cors');

//must include cors if we want to share resources over the web
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;


//our root of site pass callback(two, param)
app.get('/', (request, response) => {
  response.send('hello from cyberland!!!!');
});




app.get('/weather', (request, response, next) => {
  try {
    console.log('did we get req!!',request.query.query);
    let searchQuery = request.query.query;


    let weatherDataToInstant = data.find(weatherElement => weatherElement.city_name === searchQuery);

    console.log('!!!!!!!!!!datatatatat',weatherDataToInstant);



    response.status(200).send('hi');
  } catch (error) {
    next(error);
  }
});









app.get('*', (request, response) => {
  response.send('The route was not found. Error 404');
});






//Errors

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});










app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
