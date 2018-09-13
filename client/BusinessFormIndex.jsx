import React from 'react';
import ReactDOM from 'react-dom';

const BusinessForm = require('./components/BusinessForm');

const index = document.getElementById('businessform');
ReactDOM.render(<BusinessForm name="test" />, index);
