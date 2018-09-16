const React = require('react');
const Utilities = require('../utilities');

class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessName: '',
      employerContact: '',
      address: '',
      numEmployees: '',
      email: '',
      password: '',
      clicked: 0,
    };
  }

  handleNameChange(event) {
    this.setState({ businessName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  handleNumEmployeesChange(event) {
    this.setState({ numEmployees: event.target.value });
  }

  handleEmployerContactChange(event) {
    this.setState({ employerContact: event.target.value });
  }
  
  addBusiness() {
    const { businessName } = this.state;
    const { employerContact } = this.state;
    const { address } = this.state;
    const { numEmployees } = this.state;
    const { email } = this.state;
    const { password } = this.state;
    Utilities.addNewBusiness(businessName, email, password, employerContact, address, numEmployees);
    this.renderPage('signupcomplete')
  }

  renderPage(page) {
    this.state.clicked++;
    if (this.state.clicked > 0) {
      this.props.changePage(page);
    }
  }

  render() {
    return (
      <div id="business-form" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6" id="middle-column">
            <h3>
              Becoming a Sponsor
            </h3>
            <p>
              Support democracy, create a happier workplace, and simplify election day scheduling
            </p>
            
           
            <div role="form">
              <div className="form-group">
                <label htmlFor="businessNameInput">
                  Business Name
                  <input type="businessname" className="form-control" id="businessNameInput" businessname={this.value} onChange={this.handleNameChange.bind(this)} />
                </label>
              </div>
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
              <div className="form-group">
                <label htmlFor="employerContactInput">
                  Employer Contact
                  <input type="employercontact" className="form-control" id="employerContactInput" employercontact={this.value} onChange={this.handleEmployerContactChange.bind(this)} />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="addressInput">
                  Business Address
                  <input type="address" className="form-control" id="addressInput" address={this.value} onChange={this.handleAddressChange.bind(this)} />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="numEmployeesInput">
                  Number of Employees
                  <input type="numemployees" className="form-control" id="numEmployeesInput" numemployees={this.value} onChange={this.handleNumEmployeesChange.bind(this)} />
                </label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.addBusiness.bind(this)}>
                Submit
              </button>
          </div>
           </div>
          <div className="col-md-3">
          </div>
      </div>
    </div>
    );
  }
}

module.exports = BusinessForm;
