import React from 'react';
import ReactDOM from 'react-dom';

const Map = require('./components/Map');


const index = document.getElementById('map');
ReactDOM.render(<Map email="test" />, index);
