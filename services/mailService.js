const mailJet = require('node-mailjet');
const { MJ_APIKEY_PRIVATE } = require('../config.js');
const { MJ_APIKEY_PUBLIC } = require('../config.js');

function businessSignUpEmail({ employerContact, referenceNum }) {
  const request = mailJet
    .connect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);

  request
    .post('send', {
      version: 'v3.1',
    })
    .request({
      Messages: [{
        From: {
          Email: 'rogerjournee@gmail.com',
          Name: 'Boss',
        },
        To: [{
          Email: 'jldela@gmail.com',
          Name: 'Roger',
        }],
        Subject: 'Your email flight plan!',
        TextPart: `Dear ${employerContact}, Thanks for becoming a partner of ours! Here is your official business reference number for your employees.`,
        HTMLPart: '<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!',
      }],
    })
    .then((result) => {
      console.log(result.body);
      console.log(result.body.Messages[0].To);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
}

module.exports.businessSignUpEmail = businessSignUpEmail;
