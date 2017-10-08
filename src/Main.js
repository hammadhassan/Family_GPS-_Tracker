//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerNavigator} from 'react-navigation';
import tabNav from './tabnav';

const drawernav = DrawerNavigator({
    DrawerItem1: {
        screen: tabNav,
        navigationOptions: {
            drawer: {
                label: 'Drawer 1',
                icon: ({ tintColor }) => <Icon name="rocket" size={24} />
            },
        },
    },
});
// create a component
class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Main</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Main;
