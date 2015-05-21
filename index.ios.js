'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  NavigatorIOS,
  View,
} = React;

var MemberList = require('./MemberList');
var MemberProfile = require('./MemberProfile');
var Map = require('./Map');

var data = require('./members');

var marylandjs = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 'memberList'
    }
  },

  newMember: function () {
    this.refs.nav.push({
      component: MemberProfile,
      title: 'Member Profile',
      passProps: {
        member: data[Math.floor(Math.random()*data.length)],
        newMember: this.newMember
      }
    });
  },

  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Member List"
          selected={this.state.selectedTab === 'memberList'}
          onPress={() => {
            this.setState({
              selectedTab: 'memberList'
            });
          }}>
        <MemberList data={data}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Member Profiles"
          selected={this.state.selectedTab === 'memberProfile'}
          onPress={() => {
            this.setState({
              selectedTab: 'memberProfile'
             });
          }}>
          <NavigatorIOS
            ref="nav"
            style={{flex: 1}}
            navigationBarHidden={true}
            initialRoute={{
              component: MemberProfile,
              title: 'Member Profile',
              passProps: {
                member: data[Math.floor(Math.random()*data.length)],
                newMember: this.newMember
              }
            }}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Map"
          selected={this.state.selectedTab === 'map'}
          onPress={() => {
            this.setState({
              selectedTab: 'map'
            });
          }}>
        <Map/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
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

AppRegistry.registerComponent('marylandjs', () => marylandjs);
