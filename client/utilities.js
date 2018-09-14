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