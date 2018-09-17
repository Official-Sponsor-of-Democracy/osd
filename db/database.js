const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/osd');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Mongo database connected');
});

const businessSchema = mongoose.Schema({
  name: String,
  email: String,
  employeeCount: Number,
  referenceNum: Number,
  password: String,
  employerContact: String,
  address: String,
  coordinates: String,
  employeeVoterCount: Number,
});


// const employeeSchema = mongoose.Schema({
//   address: String,
//   name: String,
//   bisReferenceNum: Number,
// });

const Business = mongoose.model('Business', businessSchema);
// const Employee = mongoose.model(employeeSchema);

const saveBusiness = (business, callback) => {
  const partner = new Business(business);
  partner.save((err, newPartner) => {
    if (err) {
      console.error('database error line 39: ', err);
    } else {
      console.log(partner)
      callback(newPartner);
    }
  });

  // or maybe do this
  /**
   * partner.save()
   *  .then(newPartner => {
   *    callback(newPartner);
   *  })
   *  .catch(err => {
   *    console.error(err);
   *  })
   */
};

// a function that checks the database for a user with the provided information
const validateBusiness = (email, password, callback) => {
  // take the email and password and query the Business model with the data
  Business.findOne({
    email,
    password,
  })
    .then(partner => callback(partner))
    .catch(err => console.error(err));
};

module.exports.saveBusiness = saveBusiness;
module.exports.validateBusiness = validateBusiness;
