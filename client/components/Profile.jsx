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
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <h3>
                h3. Lorem ipsum dolor sit amet.
			</h3>
              <table class="table">
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
                  <tr class="table-active">
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
                  <tr class="table-success">
                    <td>
                      2
						</td>
                    <td>
                      TB - Monthly
						</td>
                    <td>
                      02/04/2012
						</td>    
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-4">
              <h3>
                h3. Lorem ipsum dolor sit amet.
			</h3><img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
              <ol>
                <li class="list-item">
                  Lorem ipsum dolor sit amet
				</li>
                <li class="list-item">
                  Consectetur adipiscing elit
				</li>
                <li class="list-item">
                  Integer molestie lorem at massa
				</li>
              </ol>
            </div>
          </div>
        </div>
      );
  }
}

module.exports = Profile;
