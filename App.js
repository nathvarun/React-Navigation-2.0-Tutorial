import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image
} from "react-native";
import { createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Content, Header, Body } from 'native-base'

const CustomDrawerContentComponent = (props) => (

  <Container>
    <SafeAreaView style={styles.safeArea}>

      <Header style={styles.drawerHeader}>
        <Body>
          <Image
            style={styles.drawerImage}
            source={require('./assets/Unsure-Programmer-Logo.png')} />
        </Body>
      </Header>

      <Content>
        <DrawerItems {...props} />
      </Content>
    </SafeAreaView>

  </Container>

);

export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    )
  }
}
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
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
    )
  }
}
const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
}, {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',

  });

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }
});