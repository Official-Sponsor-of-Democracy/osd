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
      clicked: 0,
    };
  }

  onMarkerClick(event) {

    this.renderPage('gameplan', this.props.employeeInfo);
    console.log(this, "this in marker")
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
          initialCenter={center}
          zoom={15}
        >
          <Marker
            onClick={this.onMarkerClick.bind(this, google.maps.event)}
            name="hello"
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
