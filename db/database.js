const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

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
});


// const employeeSchema = mongoose.Schema({
//   address: String,
//   name: String,
//   bisReferenceNum: Number,
// });

const Business = mongoose.model(businessSchema);
// const Employee = mongoose.model(employeeSchema);

const saveBusiness = (
  {
    name, email, employeeCount, referenceNum, password, employerContact, address,
  }, callback,
) => {
  const partner = new Business(
    {
      name, email, employeeCount, referenceNum, password, employerContact, address,
    },
  );
  partner.save((err, newPartner) => {
    if (err) {
      console.error('database error line 39: ', err);
    } else {
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

module.exports.saveBusiness = saveBusiness;
