import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab Navigator Tutorial 2!</Text>
      </View>
    );
  }
}
class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}


export default createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  }
}, {
    initialRouteName: 'Home',
    // order: ['Settings', 'Home'],
    activeTintColor: 'white',
    shifting: true
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});