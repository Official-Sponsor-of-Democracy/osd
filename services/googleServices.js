const axios = require('axios');
const { googleApi } = require('../client/config.js');
const getCoordinates = (address) => {
  if (address === undefined) {
    console.log('made call to server which added to database');
  } else {
    const formattedAddress = address.replace(/" "/g, '+');
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${googleApi}`)
  }
};

https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.05,-90.03&radius=8046&type=library&keyword=public&key=${googleApi}
const getPollingLocations = (coordinates) => {
  axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
    params: {
      
    }
  })
};