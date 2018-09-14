const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const staticFiles = path.join(__dirname, '/../dist');
app.use(express.static(staticFiles));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/home', (req, res) => {
  res.set('Allow-Control-Access-Origin', '*');
  console.log('hello');
  console.log(req);
  res.end('Hello');
});

module.exports = app;
