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
    };
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
          onClick={this.onMapClicked}
        >
          <Marker
            onClick={this.onMarkerClick}
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
