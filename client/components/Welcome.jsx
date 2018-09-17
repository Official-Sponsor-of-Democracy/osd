const React = require('react');
const Utilities = require('../utilities');

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      clicked: 0,
    };
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  checkUser() {
    const { email } = this.state;
    const { password } = this.state;
    const userCheck = Utilities.checkUser(email, password);
    userCheck.then((resolve) => {
      if (typeof resolve.data === 'object') {
      //   const fromResolve = {
      //     name: "AAA Plumbing",
      //     email: "jldela@Gmail.com",
      //     employeeCount: 20,
      //     referenceNum: 2,
      //     password: "hello",
      //     employerContact: "Roger",
      //     address: "1808 Elysian Fields Ave New Orleans, La ",
      //     coordinates: { lat: 2020, lng: 2999 },
      //     employeeVoterCount: 7,
        // };
        console.log(resolve);
        this.renderPage('profile', resolve.data);
      } else {
        alert('User Not Recognized')
        this.renderPage('welcome');
      }
    });
  }

  renderPage(page, info) {
    this.state.clicked++;
    if (this.state.clicked > 0) {
      this.props.changePage(page, info);
    }
  }

  render() {
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
            <div role="form">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Email address
                  <input type="email" className="form-control" id="exampleInputEmail1" email={this.value} onChange={this.handleEmailChange.bind(this)} />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  Password
                  <input type="password" className="form-control" id="exampleInputPassword1" password={this.value} onChange={this.handlePasswordChange.bind(this)} />
                </label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.checkUser.bind(this)}>
                  Sign In
              </button>
            </div>
            <div id="signupbtn" className="text-muted">
              <button type="button" id="notexistingMember" className="btn text-muted" onClick={this.renderPage.bind(this, "businessForm")} >
                Not a member? Sign up here
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Welcome;
