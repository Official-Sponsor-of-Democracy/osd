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

  // working simple
  signUser() {
    const { email } = this.state;
    const { name } = this.state;
    const { address } = this.state;
    const { businessid } = this.state;
    const { phonenumber } = this.state;
    Utilities.signUserIn(name, email, phonenumber, address, businessid);
    const workCoordinates = Utilities.getWorkCoordinates(businessid);
    workCoordinates.then((resolve) => {
      const printout = Utilities.getCoordinates(address);
      const geoWorkCoordinates = resolve;
      printout.then((resolve) => {
        const votinglocations = Utilities.findVotingLocations(resolve.data.results[0].geometry.location);
        const geocoordinates = resolve.data.results[0].geometry.location;
        votinglocations.then((resolve) => {
          console.log(resolve, " find locations resolve")
          this.renderPage('map', { name: name, email: email, phonenumber: phonenumber, address: address, businessid: businessid, coordinates: geocoordinates, locationone: { lat: 46.3601, lng: -61.0589 }, locationtwo: { lat: 42.3601, lng: -71.0589 }, locationthree: { lat: 45.3601, lng: -74.0589 }, workcoordinates: geoWorkCoordinates });
        });
      });});
    }

  // roger integration
  // signUser() {
  //   const { email } = this.state;
  //   const { name } = this.state;
  //   const { address } = this.state;
  //   const { businessid } = this.state;
  //   const { phonenumber } = this.state;
  //   const votinglocations = Utilities.signUserIn(name, email, phonenumber, address, businessid);
  //   votinglocations.then((resolve) => {
  //   this.renderPage('map', { name: name, email: email, phonenumber: phonenumber, address: address, businessid: businessid, coordinates: resolve.userCoordinates, pollingLocations: resolve.locations });
  //   });
  // }

  renderPage(page, info) {
    this.state.clicked++;
    if (this.state.clicked > 0) {
      // Utilities.calcRoute();
      this.props.changePage(page, info); 
    }
  }

  render() {
    return (
      <div id="welcome" className="container-fluid">
        <div className="row">
          <div id="welcome-left-column" className="col-md-6">
            <h3>
              Official Sponsors of Democracy
            </h3>
            <dl>
              <dt>
                Supported
              </dt>
              <dd>
                Afraid to ask for more time off? Your boss supports your right to vote
              </dd>
              <dt>
                Logistics Made Easy
              </dt>
              <dd>
                We create a logistical gameplan custom-tailored to each employee voter
              </dd>
            </dl>
          </div>
          <div id="right-column" className="col-md-6">
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
