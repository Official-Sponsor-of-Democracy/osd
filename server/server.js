const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { saveBusiness } = require('../db/database.js');
const { validateBusiness } = require('../db/database.js');
const { getRefNum } = require('../services/getReferneceNum.js');
// const { getCoordinates } = require('../services/googleServices.js');

const app = express();

const staticFiles = path.join(__dirname, '/../dist');
app.use(express.static(staticFiles));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 
app.post('/createBusiness', (req, res) => {
  // get the data given to the req should be name, email, password, contact, address, employee count
  const business = req.body;
  business.referenceNum = getRefNum();
  business.employeeVoterCount = 0;

  // with the info save the given data to the mongo database
  saveBusiness(business, (newPartner) => {
    // respond with the saved partner
    console.log(newPartner);
    // call the email function
    res.send(201);

  });
});

app.post('/loginBusiness', (req, res) => {
  // should take business info passed to the req body which will be email and password
  const { email, password } = req.body;
  console.log(req.body);
  // query the mongo database to see if the user inputs are valid
  validateBusiness(email, password, (partner) => {
    // the database responds with a session with the business information
    res.send(partner);
  });
});

app.post('/userInfo', (req, res) => {
  const address = req.body;
  res.end(getCoordinates(address));
});

app.post('/sendEmail', (req, res) => {
  // make a file that exports a stock message with personalized information.

  // Call a handler function that sends a get request to the
  // sendjet api and takes the message as the argument.
});

module.exports = app;
