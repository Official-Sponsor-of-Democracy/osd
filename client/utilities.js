const axios = require('axios');
const {
  googleApi,
} = require('../config.js');

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

// create email template using employerContact, business email, user name, user email, driveTime, pollingAddress
function createEmail(employeeInfo){
  return axios.post('/sendEmail', {
    userEmail: employeeInfo.email,
    businessEmail: employeeInfo.employerEmail, 
    body: `${employeeInfo.employerContact} and ${employeeInfo.name},

    Based on our calculations it should 
    take ${employeeInfo.name} approximately ${(employeeInfo.driveTime.toString())} to 
    drive from their home, vote at the ${employeeInfo.chosenlocation.name}, and make it back to work on Tuesday, November 6th, 2018.
    Talk to each other to sort out the specifics so everything goes smoothly on election day. Thank
    you for supporting democracy one vote at a time!`
  })
}

// used in Welcome to check if email/password in db
function checkUser(email, password) {
  if (email === undefined && password === undefined) {
    console.log('made call to server which added to database');
  } else {
    console.log("in check user");
    return axios.post('/loginBusiness', { email, password });
  }
}
// working simple
function getCoordinates(address) {
  if (address === undefined) {
    console.log('made call to server which added to database');
  } else {
    const formattedAddress = address.replace(/" "/g, '+');
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${googleApi}`)
  }
}

// working simple
function getWorkCoordinates(id) {
  if (id === undefined) {
    console.log('made call to server which added to database');
  } else {
    return axios.get(`https://swapi.co/api/people/1/`)
  }
}

// waiting on roger  
// function getDriveTime(votingCoordinates, userEmail) {
//   if (homeCoordinates === undefined) {
//     console.log('made call to server which added to database');
//   } else {
//     // return axios.post('/driveTime', {votingCoordinates: votingCoordinates , userEmail: userEmail})
//   }
// }

//working simple
function getDriveTime(homeCoordinates, votingCoordinates) {
  if (homeCoordinates === undefined) {
    console.log('made call to server which added to database');
  } else {
    return axios.get(`https://swapi.co/api/people/1/`)
    // return axios.post('/driveTime')
  }
}


// working simple
// function signUserIn(name, email, phonenumber, address, businessid) {
//   if (email === undefined && name === undefined) {
//     console.log('made call to server which added to database');
//   } else {
//     axios.get('/home').then((resolve) => { 
//     });
//     console.log(name, email, phonenumber, address, businessid);
//   }
// }

// waiting on roger
function signUserIn(name, email, phonenumber, address, businessid) {
  if (email === undefined && name === undefined) {
    console.log('made call to server which added to database');
  } else {
    return axios.post('/userInfo', { name: name, email: email, phonenumber: phonenumber, address: address, businessid: businessid})
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
  }
}

function findVotingLocations(coordinates) {
  if (coordinates === undefined) {
    console.log('made call to server which added to database');
  } else {

    return axios.get(`https://swapi.co/api/people/1/`);
  }
}

module.exports.signUserIn = signUserIn;
module.exports.addNewBusiness = addNewBusiness;
module.exports.findVotingLocations = findVotingLocations;
module.exports.getCoordinates = getCoordinates;
module.exports.checkUser = checkUser;
module.exports.getDriveTime = getDriveTime;
module.exports.getWorkCoordinates = getWorkCoordinates;
module.exports.createEmail = createEmail;