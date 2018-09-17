const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const googleServices = require('../services/googleServices.js');
const db = require('../db/database.js');
const { validateBusiness } = require('../db/database.js');
const { getRefNum } = require('../services/getReferneceNum.js');
const { businessSignUpEmail } = require('../services/mailService.js');

const { saveEmployee } = db;
const { saveBusiness } = db;
const { getCoordinates } = googleServices;
const { getPollingLocations } = googleServices;

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
  // get business coordinates to save to the database
  getCoordinates({ address: '4244 Maple Leaf Dr. New Orleans, LA' }, (latLngObj) => {
    const latLngString = `${latLngObj.lat},${latLngObj.lng}`;
    business.coordinates = latLngString;
    // with the info save the given data to the mongo database
    saveBusiness(business, (newPartner) => {
      // console.log(newPartner);
      // call the email function
      businessSignUpEmail(business);
      res.sendStatus(201, 'business saved');
    });
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

//
// post /userInfo should take user info from request
app.post('/userInfo', (req, res) => {
  const userInfo = req.body;
  // take user address 
  // make call to get coordinates 
  getCoordinates(userInfo, (latLngObj) => {
    // use coordinates to make call to get polling locations function (pass 20 miles in meters also);
    userInfo.coordinates = `${latLngObj.lat},${latLngObj.lng}`;
    getPollingLocations(`${latLngObj.lat},${latLngObj.lng}`, (libraries) => {
      const info = {
        locations: libraries,
        userCoordinates: latLngObj,
      };
      // save user and home coordinates to database
      saveEmployee(userInfo, () => {
        // respond with three closest library locations (should contain address, coordinates, name, user home coordinates)
        console.log(info)
        res.send(info);
      })
    });
  });
});

// take the coordinates of polling location, email
app.post('/driveTime', (req, res) => {

});
// find user in database and get their home coordinates & the business id
// find business with id in database & get there coordinates and get there employerContact and their email
// make call to google drive time
// respond with drivetime and employerContact and employer email

// takes the composed email text, employer email, & employee email
// sends an email to the employee, and the employer of the with the text
// adds a tally to the business votercount

// app.post('/userInfo', (req, res) => {
//   const address = req.body;
//   res.end(getCoordinates(address));
// });

app.post('/sendEmail', (req, res) => {
  // make a file that exports a stock message with personalized information.

  // Call a handler function that sends a get request to the
  // sendjet api and takes the message as the argument.
});

module.exports = app;
