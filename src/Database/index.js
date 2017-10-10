import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from "firebase";

class Database extends Component {




    render() {
        return (
            <View style={styles.container}>
                <Text>Database</Text>
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

export default Database;