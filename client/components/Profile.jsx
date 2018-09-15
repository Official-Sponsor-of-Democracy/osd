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
    console.log(this.props)
      return (
        <div className="container-fluid">
          <div className="row">
              <div className="col-sm-8">
                <h3>
                  hello
		          	</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        #
					           	</th>
                      <th>
                        Product
						          </th>
                      <th>
                        Payment Taken
					           	</th>
                      <th>
                        Status
					          	</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
					           	</td>
                      <td>
                        TB - Monthly
					          	</td>
                      <td>
                        01/04/2012
					           	</td>
                      <td>
                        Default
						          </td>
                    </tr>
                    <tr className="table-active">
                      <td>
                        1
						          </td>
                      <td>
                        TB - Monthly
					           	</td>
                      <td>
                        01/04/2012
					           	</td>
                      <td>
                        Approved
					           	</td>
                    </tr>
                    <tr className="table-success">
                      <td>
                        2
						          </td>
                      <td>
                        TB - Monthly
						          </td>
                      <td>
                        02/04/2012
						          </td>
                      <td>
                        Declined
						          </td>
                    </tr>
                    <tr className="table-warning">
                      <td>
                        3
						          </td>
                      <td>
                        TB - Monthly
						          </td>
                      <td>
                        03/04/2012
						          </td>
                      <td>
                        Pending
						          </td>
                    </tr>
                    <tr className="table-danger">
                      <td>
                        4
						          </td>
                      <td>
                        TB - Monthly
						          </td>
                      <td>
                        04/04/2012
					          	</td>
                      <td>
                        Call in to confirm
						          </td>
                    </tr>
                  </tbody>
                </table>  
            </div>
            <div className="col-sm-4">
                  <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
                  <h3>
                    h3. Lorem ipsum dolor sit amet.
			            </h3>
                  <ul>
                    <li className="list-item">
                      Lorem ipsum dolor sit amet
				            </li>
                    <li className="list-item">
                      Consectetur adipiscing elit
			            	</li>
                    <li className="list-item">
                      Integer molestie lorem at massa
			            	</li>
                    <li className="list-item">
                      Facilisis in pretium nisl aliquet
			            	</li>
                    <li className="list-item">
                      Nulla volutpat aliquam velit
			            	</li>
                    <li className="list-item">
                      Faucibus porta lacus fringilla vel
				            </li>
                    <li className="list-item">
                      Aenean sit amet erat nunc
			            	</li>
                    <li className="list-item">
                      Eget porttitor lorem
			            	</li>
                  </ul>
                </div>
              </div>
            </div>
          
      );
  }
}

module.exports = Profile;
