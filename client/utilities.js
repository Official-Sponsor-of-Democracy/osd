const axios = require('axios');

function addNewUser(email, password) {
  if (email === undefined && password === undefined) {
    console.log('made call to server which added to database');
  } else {
    axios.get('https://swapi.co/api/people/3/').then((resolve) => {
      console.log(resolve);
    });
    console.log(email, password);
  }
}

function signUserIn(email, password) {
  if (email === undefined && password === undefined) {
    console.log('made call to server which added to database');
  } else {
    axios.get('https://swapi.co/api/people/2/').then((resolve) => {
      console.log(resolve);
    });
    console.log(email, password);
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

module.exports.addNewUser = addNewUser;
module.exports.signUserIn = signUserIn;
module.exports.addNewBusiness = addNewBusiness;
