const React = require('react');
const Map = require('./Map.jsx');
const NewUser = require('./NewUser.jsx');
const Gameplan = require('./Gameplan.jsx');

class EmployeeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderThis: 'welcome',
      employeeInfo: {},
    };
  }

  changePage(pageId, info) {
    this.setState(() => ({ renderThis: pageId, employeeInfo: info }));
  }

  render() {
    if (this.state.renderThis === 'welcome') {
      return (
        
          <NewUser changePage={this.changePage.bind(this)} />
  
      );
    }
    if (this.state.renderThis === 'map') {
      return (
        
          <Map changePage={this.changePage.bind(this)} employeeInfo={this.state.employeeInfo}/>
     
      );
    }
    if (this.state.renderThis === 'gameplan') {
      return (
    
          <Gameplan changePage={this.changePage.bind(this)} 
            employeeInfo={this.state.employeeInfo} 
          />
     
      );
    }
  }
}

module.exports = EmployeeApp;
