const React = require('react');
const App = require('./App.jsx');
const EmployeeApp = require('./EmployeeApp.jsx');

class ParentApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderThis: 'firstwelcome',
    };
  }

  changePage(pageId) {
    this.setState(() => ({ renderThis: pageId }));
  }

  render() {
    if (this.state.renderThis === 'firstwelcome') {
      return (
        <div id="welcome" className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-md-6 h-100" id="welcome-left-column">
              <h3>
                Official Sponsors of Democracy
            </h3>
              <dl>
                <dt>
                  Support Your Employees
              </dt>
                <dd>
                  Bolster employee morale by letting them know that you support their right to vote
              </dd>
                <dt>
                  Logistics Made Easy
              </dt>
                <dd>
                  We create a logistical gameplan custom-tailored to each employee voter
              </dd>
                <dt>
                  No Surprises
              </dt>
                <dd>
                  Get ahead of election-day scheduling so business goes smoothly
              </dd>
              </dl>
            </div>
            <div className="col-md-6 h-100" id="right-column">
              <div id="parentbtn"  className="text-muted">
              Who are you?
              </div>
              <div>
                <button type="submit" className="btn btn-primary" onClick={this.changePage.bind(this, "app")}>
                  Business Partner
              </button>
              </div>
              <div id="parentbtn">
                <button type="submit" className="btn btn-primary" onClick={this.changePage.bind(this, "employeeapp")} >
                  Employee Voter
              </button>
              </div>
              </div>
          </div>
        </div>
      );
    }
    if (this.state.renderThis === 'app') {
      return (
          <App changePage={this.changePage.bind(this)} />
      );
    }
    if (this.state.renderThis === 'employeeapp') {
      return (
          <EmployeeApp changePage={this.changePage.bind(this)} />
      );
    }
  }
}

module.exports = ParentApp;
