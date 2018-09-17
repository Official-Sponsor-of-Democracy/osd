const axios = require('axios');
const {
  googleApi,
} = require('./config');

// 
// function addNewUser(email, password) {
//   if (email === undefined && password === undefined) {
//     console.log('made call to server which added to database');
//   } else {
//     axios.post('/createBusiness', { email, password }).then((resolve) => {
//       // console.log(resolve);
//     });
//     console.log(email, password);
//   }
// }

// function getBusinessInfo(id) {
//   if (id === undefined) {
//     console.log('made call to server which added to database');
//   } else {
//     return axios.get('/loginBusiness', id);
//   }
// }

// used in Welcome to check if email/password in db
function checkUser(email, password) {
  if (email === undefined && password === undefined) {
    console.log('made call to server which added to database');
  } else {
    console.log("in check user");
    return axios.post('/loginBusiness', { email, password });
  }
}

function getCoordinates(address) {
  if (address === undefined) {
    console.log('made call to server which added to database');
  } else {
    const formattedAddress = address.replace(/" "/g, '+');
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${googleApi}`)
  }
}

function getWorkCoordinates(id) {
  if (id === undefined) {
    console.log('made call to server which added to database');
  } else {
    return axios.get(`https://swapi.co/api/people/1/`)
  }
}

function getDriveTime(homeCoordinates, votingCoordinates, workCoordinates) {
  if (homeCoordinates === undefined) {
    console.log('made call to server which added to database');
  } else {
    return axios.get(`https://swapi.co/api/people/1/`)
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

function addNewBusiness(businessName, email, password, employerContact, address, employeeCount) {
  if (businessName === undefined && address === undefined) {
    console.log('made call to server which added to database');
  } else {
    axios.post('/createBusiness', {
      businessName, email, password, employerContact, address, employeeCount,
    }).then((resolve) => {
      console.log(resolve);
    });
    // console.log(businessName, email, password, employerContact, address, numEmployees);
  }
}

function findVotingLocations(coordinates) {
  if (coordinates === undefined) {
    console.log('made call to server which added to database');
  } else {
    return axios.get(`https://swapi.co/api/people/1/`);
  }
}

// module.exports.addNewUser = addNewUser;
module.exports.signUserIn = signUserIn;
module.exports.addNewBusiness = addNewBusiness;
module.exports.findVotingLocations = findVotingLocations;
module.exports.getCoordinates = getCoordinates;
module.exports.checkUser = checkUser;
module.exports.getDriveTime = getDriveTime;
module.exports.getWorkCoordinates = getWorkCoordinates;
// module.exports.getBusinessInfo = getBusinessInfo;