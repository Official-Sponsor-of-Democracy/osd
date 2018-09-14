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
      clicked: 0,
    };
  }

  handleNameChange(event) {
    this.setState({ businessName: event.target.value });
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
    Utilities.addNewBusiness(businessName, employerContact, address, numEmployees);
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h3>
              Becoming a Sponsor
            </h3>
            <p>
              Support democracy, create a happier workplace, and simplify election day scheduling
            </p>
            <p>
              After the election we will send you information about your employee-voter turnout,
              along with an Offical Sponsor of Democracy seal
              which you can proudly display at the office
            </p>
            <div role="form">
              <div className="form-group">
                <label htmlFor="businessNameInput">
                  Business Name
                  <input type="businessname" className="form-control" id="businessNameInput" businessname={this.value} onChange={this.handleNameChange.bind(this)} />
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
        </div>
      </div>
    );
  }
}

module.exports = BusinessForm;
