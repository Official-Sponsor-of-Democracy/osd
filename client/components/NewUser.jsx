const React = require('react');
const Utilities = require('../utilities');

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phonenumber: null,
      address: '',
      cityzip: '',
      businessid: null,
    };
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleBusinessIdChange(event) {
    this.setState({ businessid: event.target.value });
  }

  handlePhoneNumberChange(event) {
    this.setState({ phonenumber: event.target.value });
  }

  handleStreetAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  handleCityZipChange(event) {
    this.setState({ cityzip: event.target.value });
  }

  findLocations() {
    const { address } = this.state;
    const { cityzip } = this.state;
    Utilities.findVotingLocations(address, cityzip);
  }

  signUser() {
    const { email } = this.state;
    const { name } = this.state;
    const { address } = this.state;
    const { cityzip } = this.state;
    const { businessid } = this.state;
    const { phonenumber } = this.state;
    Utilities.signUserIn(name, email, phonenumber, address, cityzip, businessid);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <div role="form">
              <div className="form-group">
                <label htmlFor="InputName">
                  Name
                  <input type="name" className="form-control" id="InputName" name={this.value} onChange={this.handleNameChange.bind(this)} />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Email Address
                  <input type="email" className="form-control" id="exampleInputEmail1" email={this.value} onChange={this.handleEmailChange.bind(this)} />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="InputPhoneNumber">
                  Phone Number
                  <input type="phonenumber" className="form-control" id="InputPhoneNumber" phonenumber={this.value} onChange={this.handlePhoneNumberChange.bind(this)} />
                </label>
              </div>
            </div>
            <div role="form">
              <div className="form-group">
                <label htmlFor="InputAddress">
                  Street Address
                  <input type="address" className="form-control" id="InputAddress" address={this.value} onChange={this.handleStreetAddressChange.bind(this)} />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="InputCityZip">
                  City, State and Zip Code
                  <input type="cityzip" className="form-control" id="InputCityZip" cityzip={this.value} onChange={this.handleCityZipChange.bind(this)} />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="InputBusinessID">
                  Business ID
                  <input type="businessid" className="form-control" id="InputBusinessID" businessid={this.value} onChange={this.handleBusinessIdChange.bind(this)} />
                </label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.signUser.bind(this)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = NewUser;
