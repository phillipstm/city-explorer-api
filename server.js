'use strict';

console.log('!!!!dummmmmbyserver.js connected.');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
// let weather = require('./modules/weather.js');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.get('/', (request, response) => {
  response.send('hello,hello,hellocananybodyhearme!!!!');
});


app.get('/weather', weatherHandler);



function weatherHandler(request, response) {
  console.log(request.query);
  // const { lat, lon } = request.query;
  // weather(lat, lon)
  //   .then(summaries => response.send(summaries))
  //   .catch((error) => {
  //     console.error(error);
  //     response.status(200).send('Sorry. Something went wrong!');
  //   });
  response.status(200).send('not yet!');
}




app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
