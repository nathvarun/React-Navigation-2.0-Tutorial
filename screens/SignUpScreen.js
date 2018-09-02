import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class SignUpScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SignUpScreen</Text>
            </View>
        );
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});