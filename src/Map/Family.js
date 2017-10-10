import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Location from "./Location"
class Family extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Location />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default Family;
