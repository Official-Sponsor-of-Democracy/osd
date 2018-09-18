import React from 'react';
import ReactDOM from 'react-dom';

const App = require('./components/ParentApp.jsx');
const index = document.getElementById('parentapp');

ReactDOM.render(<App name="Yomi" />, index);
