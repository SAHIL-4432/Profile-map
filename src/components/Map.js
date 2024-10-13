"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_leaflet_1 = require("react-leaflet");
var leaflet_1 = require("leaflet");
// Fix for default marker icon
delete leaflet_1["default"].Icon.Default.prototype._getIconUrl;
leaflet_1["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
var mapContainerStyle = {
    width: '100%',
    height: '400px'
};
function Map(_a) {
    var profile = _a.profile;
    if (!profile)
        return null;
    return (<react_leaflet_1.MapContainer center={[profile.location.lat, profile.location.lng]} zoom={13} style={mapContainerStyle}>
      <react_leaflet_1.TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
      <react_leaflet_1.Marker position={[profile.location.lat, profile.location.lng]}>
        <react_leaflet_1.Popup>
          {profile.name}<br />
          {profile.description}
        </react_leaflet_1.Popup>
      </react_leaflet_1.Marker>
    </react_leaflet_1.MapContainer>);
}
exports["default"] = Map;
