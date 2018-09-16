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
      // center: { lat: 42.3601, lng: -71.0589 },
      // locations: { one: { lat: 46.3601, lng: -61.0589 }, two: { lat: 42.3601, lng: -71.0589 }, three: { lat: 45.3601, lng: -74.0589 }},
      clicked: 0,
    };
  }

  onMarkerClick(event) {
    this.renderPage('gameplan', this.props.employeeInfo);
    console.log(this, "this in marker")
  }

  onMarkerOneClick(event) {
    this.props.employeeInfo.chosenlocation = this.props.employeeInfo.locationone;
    const drivetime = Utilities.getDriveTime(this.props.employeeInfo.coordinates, this.props.employeeInfo.locationone, this.props.employeeInfo.locationtwo);
    drivetime.then((resolve) => {
      console.log(resolve, " find locations resolve")
      this.props.employeeInfo.drivetime = 130;
      this.renderPage('gameplan', this.props.employeeInfo);
    });
    console.log(this.props.employeeInfo.locationone, "clicked one")
  }

  onMarkerTwoClick(event) {
    this.props.employeeInfo.chosenlocation = this.props.employeeInfo.locationtwo;
    const drivetime = Utilities.getDriveTime(this.props.employeeInfo.coordinates, this.props.employeeInfo.locationtwo, this.props.employeeInfo.locationtwo);
    drivetime.then((resolve) => {
      console.log(resolve, " find locations resolve")
      this.props.employeeInfo.drivetime = 130;
      this.renderPage('gameplan', this.props.employeeInfo);
    });
    console.log(this.props.employeeInfo.locationtwo, "clicked two")
  }

  onMarkerThreeClick(event) {
    this.props.employeeInfo.chosenlocation = this.props.employeeInfo.locationthree;
    const drivetime = Utilities.getDriveTime(this.props.employeeInfo.coordinates, this.props.employeeInfo.locationthree, this.props.employeeInfo.locationtwo);
    drivetime.then((resolve) => {
      console.log(resolve, " find locations resolve")
      this.props.employeeInfo.drivetime = 130;
      this.renderPage('gameplan', this.props.employeeInfo);
    });
    console.log(this.props.employeeInfo.locationthree, "clicked three")
  }

  renderPage(page, info) {
    this.state.clicked++;
    if (this.state.clicked > 0) {
      this.props.changePage(page, info);
    }
  }

  render() {
    alert("Click on a voting location in your area")
    const { google } = this.props;
    // const { center } = this.state;
    return (
      <div>
        <Map
          google={google}
          initialCenter={this.props.employeeInfo.coordinates}
          zoom={15}
        >
          <Marker
            onClick={this.onMarkerClick.bind(this, google.maps.event)}
            name="hello"
          />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'one'}
            onClick={this.onMarkerOneClick.bind(this, google.maps.event)}
            position={this.props.employeeInfo.locationone}
          />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'two'}
            onClick={this.onMarkerTwoClick.bind(this, google.maps.event)}
            position={this.props.employeeInfo.locationtwo}
          />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'three'}
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
