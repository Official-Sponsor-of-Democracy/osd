const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const staticFiles = path.join(__dirname, '/../dist');
app.use(express.static(staticFiles));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/createBusiness', (req, res) => {
  res.set('Allow-Control-Access-Origin', '*');
  // get the data given to the req should be an email and a name
  // with the email and name save the given data to the mongo database
  // respond with the data in that the user just input to display on the page plus any additional beginner stats
  res.end('Hello');
});

app.get('/loginBusiness', (req, res) => {
  // should take user info passed to the req body
  // if the user info passed in is a valid user from the database respond with a session for the user
});

app.post('/sendEmail', (req, res) => {
  // make a file that exports a stock message with personalized information
  // call a handler function that sends a get request to the sendjet api and takes the message as the argument
});

module.exports = app;
