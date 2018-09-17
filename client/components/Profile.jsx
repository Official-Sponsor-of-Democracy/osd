const React = require('react');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
    };
  }

  changePage(pageId) {
    this.state.clicked++;
    if (this.state.clicked > 0) {
      this.props.changePage(pageId);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6" id="middle-column">
            <img id="osd-icon-profile" src="https://preview.ibb.co/cTMFwe/Screen_Shot_2018_09_13_at_12_39_03_PM.png" />
            <h3>
              {this.props.info.name}
            </h3>
            <table className="table">
              <tr>
                <td>
                Stats
                </td>
                <td>
                  
                </td>
              </tr>
              <tbody>
                <tr>
                  <td>
                  Business ID
                  </td>
                  <td>
                  {this.props.info.referenceNum}
                  </td>
                </tr>
                <tr className="table">
                  <td>
                    Business Contact
                  </td>
                  <td>
                    {this.props.info.employerContact}
                  </td>
                </tr>
                <tr className="table">
                  <td>
                    Email
                  </td>
                  <td>
                    {this.props.info.email}
                  </td>
                </tr>
                <tr className="table">
                  <td>
                    Address
                  </td>
                  <td>
                    {this.props.info.address}
                  </td>
                </tr>
                <tr className="table">
                  <td>
                    Total Number of Employees
                  </td>
                  <td>
                    {this.props.info.employeeCount}
                  </td>
                </tr>
                <tr className="table">
                  <td>
                    Employee Voters
                  </td>
                  <td>
                    {this.props.info.employeeVoterCount}
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="parentbtn">
              <button type="submit" className="btn btn-primary" onClick={this.changePage.bind(this, "welcome")} >
                Sign Out
              </button>
            </div>
          </div>
          <div className="col-sm-3" />
        </div>
      </div>
    );
  }
}

module.exports = Profile;
