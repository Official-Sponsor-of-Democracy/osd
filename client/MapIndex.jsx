import React from 'react';
import ReactDOM from 'react-dom';


const MapPage = require('./components/Map');


const index = document.getElementById('map');
ReactDOM.render(<MapPage email="test" />, index);
