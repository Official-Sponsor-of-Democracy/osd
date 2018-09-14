const React = require('react');
const Map = require('./Map');
const NewUser = require('./NewUser');

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
        <div className="container-fluid">
          <NewUser changePage={this.changePage.bind(this)} />
        </div>
      );
    } else if (this.state.renderThis === 'map') {
      return (
        <div className="container-fluid">
          <Map changePage={this.changePage.bind(this)} employeeInfo={this.state.employeeInfo}/>
        </div>
      );
    }
  }
}

module.exports = EmployeeApp;