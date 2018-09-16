const React = require('react');
const Utilities = require('../utilities');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  changePage(pageId, info) {
    this.setState(() => {
      return { renderThis: pageId, employeeInfo: info };
    });
  }

  render() {
    
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8" id="left-column">
                <h3>
                  {this.props.info.name}
		          	</h3>
              <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        Stats
					           	</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Business ID
					           	</td>
                      <td>
                      {this.props.info.referenceNum}
					          	</td>
                    </tr>
                    <tr className="table-active">
                      <td>
                        Business Contact
						          </td>
                      <td>
                      {this.props.info.employerContact}
					           	</td>
                    </tr>
                  <tr className="table-warning">
                      <td>
                        Email
						          </td>
                      <td>
                      {this.props.info.email}
						          </td>
                    </tr>
                  <tr className="table-success">
                    <td>
                      Address
						          </td>
                    <td>
                      {this.props.info.address}
                    </td>
                  </tr>
                    <tr className="table-danger">
                      <td>
                        Total Number of Employees
						          </td>
                      <td>
                      {this.props.info.employeeCount}
						          </td>
                    </tr>
                  <tr className="table-active">
                    <td>
                      Employee Voters
						          </td>
                    <td>
                      {this.props.info.employeeVoterCount}
                    </td>
                  </tr>
                  </tbody>
                </table>  
            </div>
            <div className="col-sm-4">
                </div>
              </div>
            </div>
          
      );
  }
}

module.exports = Profile;
