const axios = require('axios');

const getCoordinates = (address) => {
  if (address === undefined) {
    console.log('made call to server which added to database');
  } else {
    const formattedAddress = address.replace(/" "/g, '+');
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${googleApi}`)
  }
};
