'use strict';
import axios from 'axios';
console.log('!!!!dummmmmbyserver.js connected.');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
let weather = require('./weather.js');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.get('/', (request, response) => {
  response.send('hello,hello,hellocananybodyhearme!!!!');
});

// app.get('/weather', weatherHandler);
app.get('/weather', (request, response, next) => {
  try {
    console.log('did we get req!!',request.query.query);
    let searchQuery = request.query.query;
    console.log('what t h',searchQuery);


function weatherHandler(request, response) {
  const { lat, lon } = request.query;
  weather(lat, lon)
    .then(summaries => response.send(summaries))
    .catch((error) => {
      console.error(error);
      response.status(200).send('Sorry. Something went wrong!');
    });
}


app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
  
