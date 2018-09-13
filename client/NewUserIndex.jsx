import React from 'react';
import ReactDOM from 'react-dom';

const NewUser = require('./components/NewUser');


const index = document.getElementById('newuser');
ReactDOM.render(<NewUser email="test" />, index);
