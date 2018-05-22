import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>1. Checkout the Tutorial branch that you want to view!</Text>
        <View style={styles.codeView}>
          <Text style={styles.code}>$ git branch --all</Text>
          <Text style={styles.code}>* master</Text>
          <Text style={styles.code}>* remotes/origin/1-stacknavigator</Text>
          <Text style={styles.code}>* remotes/origin/2-tabnavigator</Text>
        </View>
        <Text style={styles.title}>2. To view the first tutorial</Text>
        <View style={styles.codeView}>
          <Text style={styles.code}>$ git checkout 1-stacknavigator</Text>
        </View>
        <Text style={styles.title}>3. Refresh the Simulator!</Text>


      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignSelf: 'flex-start', paddingHorizontal: 20,
    fontWeight: "700",

  },
  codeView: {
    width: "90%",
    borderRadius: 5,
    margin: 20,
    padding: 20,
    backgroundColor: '#eaeaea'
  },
  code: {
    fontWeight: "400",
    fontSize: 15
  }
});