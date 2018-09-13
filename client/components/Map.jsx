
const { Map, InfoWindow, Marker, GoogleApiWrapper } = require('google-maps-react');

const React = require('react');

class MapPage extends React.Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose} />
        </Map>
      </div>
    );
  }
}

module.exports = GoogleApiWrapper({
  apiKey: ('AIzaSyDazc4gDBhc9rJDprY4q_w3lFrlaL8V_Ss'),
})(MapPage);
