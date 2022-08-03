'use strict';
console.log('!!!!server.js connected.');

const express = require('express');

require('dotenv').config();
// let data = require('./data/pizza.json');

const cors = require('cors');

//must include cors if we want to share resources over the web
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;
/**Routes we will use to access our end point
 * * .get() is an express method
 * it correlates to axios.get
 * the first parameter is a URL in quote
 * the second is a callback function
 */

//our root of site pass callback(two, param)
app.get('/', (request, response) => {
  response.send('hello from cyberland!!!!');
});

// localhost:3001/hello?name=bob
// query: { name: 'bob' }, and the URL in the req
// app.get('/hello' (request, response) => {
//     console.log('request object: ', request.query.name);
//     let location = request.query.location;
//     let lat = request.query.lat;
//     let lon = request.query.lon;
// });


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
