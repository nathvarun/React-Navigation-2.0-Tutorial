import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign In" onPress={() => this.props.navigation.navigate('SignIn')} />
                <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} />
            </View>
        );
    }
}
export default WelcomeScreen
    ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});