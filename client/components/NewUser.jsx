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
      businessid: null,
      coordinates: null,
      clicked: 0,
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

  findLocations() {
    const { address } = this.state;
    const { cityzip } = this.state;
    Utilities.findVotingLocations(address, cityzip);
    this.renderPage('map');
  }

  signUser() {
    const { email } = this.state;
    const { name } = this.state;
    const { address } = this.state;
    const { businessid } = this.state;
    const { phonenumber } = this.state;
    Utilities.signUserIn(name, email, phonenumber, address, businessid);
    const printout = Utilities.getCoordinates(address);
    printout.then((resolve) => {
      this.renderPage('map', { name: name, email: email, phonenumber: phonenumber, address: address, businessid: businessid, coordinates: resolve.data.results[0].geometry.location});
    });
  }

  renderPage(page, info) {
    this.state.clicked++;
    if (this.state.clicked > 0) {
      // Utilities.calcRoute();
      this.props.changePage(page, info);
    }
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
                  Address
                  <input type="address" className="form-control" id="InputAddress" address={this.value} onChange={this.handleStreetAddressChange.bind(this)} />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="InputBusinessID">
                  Business ID
                  <input type="text" className="form-control" id="InputBusinessID" businessid={this.value} onChange={this.handleBusinessIdChange.bind(this)} />
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
