import React from 'react';
import ReactDOM from 'react-dom';

const UserAddressForm = require('./components/UserAddressForm');

const index = document.getElementById('useraddress');
ReactDOM.render(<UserAddressForm name="useraddress" />, index);
