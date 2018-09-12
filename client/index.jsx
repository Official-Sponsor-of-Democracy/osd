
// const React = require('react');
// const ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

const App = require('./components/App');

// ReactDOM.render(
//   <App />, document.getElementById('app'),
// );

// import Header from './components/Header'

// class HelloMessage extends React.Component {
//   render() {
//     return (
//     <div >

//       <div className = "container" >
//       <h1> Hello {
//         this.props.name
//       } </h1>
//       </div>
//     </div>
//     )
//   }
// }

const index = document.getElementById('app');

ReactDOM.render(<App name="Yomi" />, index);
