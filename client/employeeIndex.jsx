import React from 'react';
import ReactDOM from 'react-dom';

const EmployeeApp = require('./components/EmployeeApp.jsx');

const index = document.getElementById('employeeapp');
ReactDOM.render(<EmployeeApp name="Yomi" />, index);
