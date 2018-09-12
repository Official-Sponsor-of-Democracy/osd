function addNewUser(email, password) {
  if (email === undefined && password === undefined) {
    console.log('made call to server which added to database');
  } else {
    console.log(email, password);
  }
}

function signUserIn(email, password) {
  if (email === undefined && password === undefined) {
    console.log('made call to server which added to database');
  } else {
    console.log(email, password);
  }
}

function addNewBusiness(businessName, address, numEmployees) {
  if (businessName === undefined && address === undefined) {
    console.log('made call to server which added to database');
  } else {
    console.log(businessName, address, numEmployees);
  }
}

module.exports.addNewUser = addNewUser;
module.exports.signUserIn = signUserIn;
module.exports.addNewBusiness = addNewBusiness;
