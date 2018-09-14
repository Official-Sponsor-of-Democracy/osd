const React = require('react');
const Map = require('./Map');
const NewUser = require('./NewUser');
const Gameplan = require('./Gameplan');

class EmployeeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderThis: 'welcome',
      employeeInfo: {},
    };
  }

  changePage(pageId, info) {
    this.setState(() => {
      return { renderThis: pageId, employeeInfo: info };
    });
  }

  render() {
    if (this.state.renderThis === 'welcome') {
      return (
        <div id="autocomplete" className="container-fluid">
          <NewUser changePage={this.changePage.bind(this)} />
        </div>
      );
    }
    if (this.state.renderThis === 'map') {
      return (
        <div className="container-fluid">
          <Map changePage={this.changePage.bind(this)} employeeInfo={this.state.employeeInfo}/>
        </div>
      );
    }
    if (this.state.renderThis === 'gameplan') {
      return (
        <div className="container-fluid">
          <Gameplan changePage={this.changePage.bind(this)} employeeInfo={this.state.employeeInfo} />
        </div>
      );
    }
  }
}

module.exports = EmployeeApp;
