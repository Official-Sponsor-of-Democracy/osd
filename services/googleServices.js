const axios = require('axios');
const { googleApi } = require('../config.js');

const getCoordinates = ({ address }, callback) => {
  if (address === undefined) {
    console.log('made call to server which added to database');
  } else {
    const formattedAddress = address.replace(/" "/g, '+');
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
      //  ?address=${formattedAddress}&key=${googleApi}`
        address: formattedAddress,
        key: googleApi,
      },
    })
      .then((response) => {
        const latLngObj = response.data.results[0].geometry.location;
        callback(latLngObj);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.05,-90.03&radius=8046&type=library&keyword=public&key=${googleApi}
const getPollingLocations = (coordinates, callback) => {
  // getCoordinates()
  axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
    params: {
      location: coordinates,
      type: 'library',
      keyword: 'public',
      radius: 32186,
      key: googleApi,
    },
  })
    .then((response) => {
      const topThree = response.data.results
        .slice(0, 3)
        .map((library) => {
          return {
            coordinates: library.geometry.location,
            name: library.name,
            address: library.vicinity,
          };
        });
      callback(topThree);
    })
    .catch((err) => {
      console.error(err);
    });
};


module.exports.getCoordinates = getCoordinates;
module.exports.getPollingLocations = getPollingLocations;
