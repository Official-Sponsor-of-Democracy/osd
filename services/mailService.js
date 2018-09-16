const mailJet = require('node-mailjet');
const { MJ_APIKEY_PRIVATE } = process.env || require('../config.js');
const { MJ_APIKEY_PUBLIC } = process.env || require('../config.js');

mailJet
  .connect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);

mailJet
  .post('send', {
    'version': 'v3.1'
  })
  .request({
    Messages: [{
      From: {
        Email: 'pilot@mailjet.com',
        Name: 'Mailjet Pilot',
      },
      To: [{
        Email: 'passenger1@mailjet.com',
        Name: 'passenger 1',
      }],
      Subject: 'Your email flight plan!',
      TextPart: 'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
      HTMLPart: '<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!',
    }],
  })
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  });
  