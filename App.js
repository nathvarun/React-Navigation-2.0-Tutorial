import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{
        flex: 1, backgroundColor: '#f2f2f2'
      }}>

        <AppTabNavigator />
      </SafeAreaView>
    )
  }
}

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


const AppTabNavigator = createMaterialTopTabNavigator({
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
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  }
}, {
    initialRouteName: 'Home',
    // order: ['Settings', 'Home'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#f2f2f2',
        borderTopWidth: 0.5,
        borderTopColor: 'grey'
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});