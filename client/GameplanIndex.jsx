import React from 'react';
import ReactDOM from 'react-dom';

const Gameplan = require('./components/Gameplan');

const index = document.getElementById('gameplan');
ReactDOM.render(<Gameplan name="gameplan" />, index);
