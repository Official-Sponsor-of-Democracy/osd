const React = require('react');
const {
  Map, InfoWindow, Marker, GoogleApiWrapper,
} = require('google-maps-react');
const {
  googleApi,
} = require('../config');

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 42.3601, lng: -71.0589 },
      locations: { one: { lat: 46.3601, lng: -61.0589 }, two: { lat: 42.3601, lng: -71.0589 }, three: { lat: 45.3601, lng: -74.0589 }},
      clicked: 0,
    };
  }

  onMarkerClick(event) {
    this.renderPage('gameplan', this.props.employeeInfo);
    console.log(this, "this in marker")
  }

  onMarkerOneClick(event) {
    this.renderPage('gameplan', this.props.employeeInfo);
    console.log(this.state.locations.one, "clicked one")
  }

  onMarkerTwoClick(event) {
    this.renderPage('gameplan', this.props.employeeInfo);
    console.log(this.state.locations.two, "clicked two")
  }

  onMarkerThreeClick(event) {
    this.renderPage('gameplan', this.props.employeeInfo);
    console.log(this.state.locations.three, "clicked three")
  }

  renderPage(page, info) {
    this.state.clicked++;
    if (this.state.clicked > 0) {
      this.props.changePage(page, info);
    }
  }

  render() {
    const { google } = this.props;
    const { center } = this.state;
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
            name={'SOMA'}
            onClick={this.onMarkerOneClick.bind(this, google.maps.event)}
            position={this.state.locations.one}
          />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            onClick={this.onMarkerTwoClick.bind(this, google.maps.event)}
            position={this.state.locations.two}
          />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            onClick={this.onMarkerThreeClick.bind(this, google.maps.event)}
            position={this.state.locations.three}
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
