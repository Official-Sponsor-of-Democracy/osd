const React = require('react');
const {
  Map, InfoWindow, Marker, GoogleApiWrapper,
} = require('google-maps-react');
const {
  googleApi,
} = require('../config');
const Utilities = require('../utilities');

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
    };
  }

  onMarkerClick() {
    alert("Please select a polling location")
  }

  onMarkerOneClick() {
    this.props.employeeInfo.chosenlocation = this.props.employeeInfo.locationone;
    const drivetime = Utilities.getDriveTime(this.props.employeeInfo.coordinates, 
      this.props.employeeInfo.locationone, this.props.employeeInfo.locationtwo);
    drivetime.then((resolve) => {
      this.props.employeeInfo.drivetime = 130;
      this.renderPage('gameplan', this.props.employeeInfo);
    });
  }

  onMarkerTwoClick() {
    this.props.employeeInfo.chosenlocation = this.props.employeeInfo.locationtwo;
    const drivetime = Utilities.getDriveTime(this.props.employeeInfo.coordinates,
      this.props.employeeInfo.locationtwo, this.props.employeeInfo.locationtwo);
    drivetime.then((resolve) => {
      this.props.employeeInfo.drivetime = 130;
      this.renderPage('gameplan', this.props.employeeInfo);
    });
  }

  onMarkerThreeClick() {
    this.props.employeeInfo.chosenlocation = this.props.employeeInfo.locationthree;
    const drivetime = Utilities.getDriveTime(this.props.employeeInfo.coordinates,
      this.props.employeeInfo.locationthree, this.props.employeeInfo.locationtwo);
    drivetime.then((resolve) => {
      this.props.employeeInfo.drivetime = 130;
      this.renderPage('gameplan', this.props.employeeInfo);
    });
  }

  renderPage(page, info) {
    this.state.clicked++;
    if (this.state.clicked > 0) {
      this.props.changePage(page, info);
    }
  }

  render() {
    alert("Choose a polling location in your area")
    const { google } = this.props;
    return (
      <div>
        <Map
          google={google}
          initialCenter={this.props.employeeInfo.coordinates}
          zoom={13}
        >
          <Marker
            onClick={this.onMarkerClick.bind(this, google.maps.event)}
          />
          <Marker
            onClick={this.onMarkerOneClick.bind(this, google.maps.event)}
            position={this.props.employeeInfo.locationone}
          />
          <Marker
            onClick={this.onMarkerTwoClick.bind(this, google.maps.event)}
            position={this.props.employeeInfo.locationtwo}
          />
          <Marker
            onClick={this.onMarkerThreeClick.bind(this, google.maps.event)}
            position={this.props.employeeInfo.locationthree}
          />
          <InfoWindow onClose={this.onInfoWindowClose} />
        </Map>
      </div>
    );
  }
}

module.exports = GoogleApiWrapper({
  apiKey: (googleApi),
})(MapPage);
