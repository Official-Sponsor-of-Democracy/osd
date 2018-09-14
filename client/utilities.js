const axios = require('axios');
const {
  googleApi,
} = require('./config');

function addNewUser(email, password) {
  if (email === undefined && password === undefined) {
    console.log('made call to server which added to database');
  } else {
    axios.get('/home').then((resolve) => {
      console.log(resolve);
    });
    console.log(email, password);
  }
}

function getCoordinates(address) {
  if (address === undefined) {
    console.log('made call to server which added to database');
  } else {
    const formattedAddress = address.replace(/" "/g, "+");
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${googleApi}`)
  }
}

// var settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "https://maps.googleapis.com/maps/api/directions/json?origin=4707+eilers+avenue+austin+texas&destination=Universal+Studios+Hollywood&key=AIzaSyDyOcw4O6ZqUChULjprwYUoa33GHO5I7AE",
    //   "method": "GET",
    //   "headers": {
    //     "Content-Type": "application/json",
    //     "Cache-Control": "no-cache",
    //     "Postman-Token": "a2cf149f-fe37-495d-ad31-69ec24747bf0"
    //   }
    // }

function getDriveTime(address1, address2) {
  if (address1 === undefined) {
    console.log('made call to server which added to database');
  } else {
    const formattedAddress1 = address1.replace(/" "/g, "+");
    const formattedAddress2 = address2.replace(/" "/g, "+");
    return axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=4707+eilers+avenue+austin+texas&destination=Universal+Studios+Hollywood&key=${googleApi}`, 
    {
      "headers": {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      }});
  }
}

function signUserIn(name, email, phonenumber, address, businessid) {
  if (email === undefined && name === undefined) {
    console.log('made call to server which added to database');
  } else {
    axios.get('/home').then((resolve) => {
      
    });
    console.log(name, email, phonenumber, address, businessid);
  }
}

function addNewBusiness(businessName, employerContact, address, numEmployees) {
  if (businessName === undefined && address === undefined) {
    console.log('made call to server which added to database');
  } else {
    axios.get('https://swapi.co/api/people/1/').then((resolve) => {
      console.log(resolve);
    });
    console.log(businessName, employerContact, address, numEmployees);
  }
}

function findVotingLocations(address, cityzip) {
  if (address === undefined && cityzip === undefined) {
    console.log('made call to server which added to database');
  } else {
    axios.get('https://swapi.co/api/people/5/').then((resolve) => {
      console.log(resolve);
    });
    console.log(address, cityzip);
  }
}

module.exports.addNewUser = addNewUser;
module.exports.signUserIn = signUserIn;
module.exports.addNewBusiness = addNewBusiness;
module.exports.findVotingLocations = findVotingLocations;
module.exports.getCoordinates = getCoordinates;
module.exports.getDriveTime = getDriveTime;