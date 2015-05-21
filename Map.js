'use strict';

var React = require('react-native');
var {
  MapView,
} = React;

var Map = React.createClass({
  render: function () {
    return (
      <MapView
        style={{flex: 1}}
        showsUserLocation={true}/>
    )
  }
});

module.exports = Map;
