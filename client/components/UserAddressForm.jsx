const React = require('react');
const Utilities = require('../utilities');

class UserAddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      cityzip: '',
    };
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

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
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
              <button type="submit" className="btn btn-primary" onClick={this.findLocations.bind(this)}>
                Submit
              </button>
            </div>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}

module.exports = UserAddressForm;
