import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Users extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Users</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
});

export default Users;