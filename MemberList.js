'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  Image,
  ActivityIndicatorIOS,
  ListView,
  View,
} = React;

var MemberList = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    var data = this.props.data;

    return {
      dataSource: ds.cloneWithRows(data),
      loaded: false
    }
  },

  componentDidMount: function () {
    this.fetchData();
  },

  fetchData: function () {
    setTimeout(() => { this.setState({loaded: true}) }, 2000);
  },

  renderMember: function (member) {
    var photo = member.photo ? member.photo.thumb_link : 'http://img2.meetupstatic.com/img/458386242735519287330/noPhoto_50.png';

    return (
      <View style={{padding: 5, flexDirection: 'row'}}>
        <Image
          style={{height: 75, width: 75}}
          source={{uri: photo }}/>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 22}}>{member.name}</Text>
        </View>
      </View>
    );
  },

  render: function() {
    if (this.state.loaded === false) {
      return (
        <View style={styles.container}>
          <ActivityIndicatorIOS/>
        </View>
      );
    }
    else {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMember}/>
      );
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

module.exports = MemberList;
