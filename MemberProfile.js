'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  Image,
  ActivityIndicatorIOS,
  TouchableOpacity,
  ListView,
  View,
} = React;

var MemberProfile = React.createClass({
  render: function () {
    var member = this.props.member;
    var photo = member.photo ? member.photo.photo_link : 'http://img2.meetupstatic.com/img/458386242735519287330/noPhoto_50.png';

    return (
      <TouchableOpacity
      onPress={() => {
        this.props.newMember();
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: photo }}
          style={{height: 200, width: 200, marginBottom: 30}}/>
        <Text style={{fontSize: 22}}>{member.name}</Text>
      </View>
      </TouchableOpacity>
    );
  }
});

module.exports = MemberProfile;
