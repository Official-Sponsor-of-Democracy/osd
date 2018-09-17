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

// create email template using employerContact, business email, user name, user email, driveTime, pollingAddress
function createEmail(employerContact, businessId, businessEmail, userName, userEmail, driveTime){
  return axios.post('/sendEmail', {
    userEmail: userEmail,
    businessEmail: businessEmail, 
    body: `${employerContact} and ${userName},

    Based on our calculations it should take ${userName} approximately ${(driveTime + 45) / 60} hours to exercise their right to vote on Tuesday, November 6th, 2018.
              Talk to each other to sort out the specifics
              so everything goes smoothly on election day. Thank
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

// roger integration 
// function getDriveTime(votingCoordinates, userEmail) {
//   if (homeCoordinates === undefined) {
//     console.log('made call to server which added to database');
//   } else {
//     // return axios.post('/driveTime', votingCoordinates, userEmail)
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
function signUserIn(name, email, phonenumber, address, businessid) {
  if (email === undefined && name === undefined) {
    console.log('made call to server which added to database');
  } else {
    axios.get('/home').then((resolve) => { 
    });
    console.log(name, email, phonenumber, address, businessid);
  }
}

// with roger integration
// function signUserIn(name, email, phonenumber, address, businessid) {
//   if (email === undefined && name === undefined) {
//     console.log('made call to server which added to database');
//   } else {
//     return axios.post('/userInfo')
//   }
// }

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
module.exports.createEmail = createEmail;