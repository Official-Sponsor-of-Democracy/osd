function addNewUser(email, password) {
  if (email === undefined && password === undefined) {
    console.log('made call to server which added to database');
  } else {
    console.log(email, password);
  }
}

module.exports.addNewUser = addNewUser;
