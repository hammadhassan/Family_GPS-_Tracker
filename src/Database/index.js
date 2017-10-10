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

/*

import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from "react-native-maps";
import { DrawerNavigator }from "react-navigation"
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Drawer } from 'native-base';
import Family from '../Map/Family';
import firebase from "firebase";
import Icon from "react-native-vector-icons/FontAwesome";

class Circle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {
        latitude: 24.882830499999997,
        longitude: 67.0680423,
        latitudeDelta: 0.0002,
        longitudeDelta: 0.0021,
      }
    }
  }


/*
  latitude: 24.8841584,
  longitude: 67.1379614,
  latitudeDelta: 0.0002,
  longitudeDelta: 0.0021,*/

  // onRegionChange(region) {
  //   this.setState({ region });
  // }
/* initialRegion={this.state.region}
            mapType="standard"
            showsMyLocationButton
            followsUserLocation={true}
            showsUserLocation={true}
            // showsCompass
            moveOnMarkerPress
            onRegionChange={this.onRegionChange}
            toolbarEnabled */
    /*logout() {
            firebase.auth().signOut().then( () => {
            // Sign-out successful.
            this.props.navigation.navigate("Welcome");
            }).catch(function(error) {
            // An error happened.
            });
        }
    closeDrawer() {
      this.drawer._root.close();
    }
    openDrawer() {
      this.drawer._root.open();
    }
  render() {
    // closeDrawer = () => {
    //   this.drawer._root.close()
    // };
    return (
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<Family navigator={this.navigator} />}
      onClose={() => this.closeDrawer.bind(this)} >
      <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
            
          </Button>
        </Left>
        <Body>
          <Title>Family Trakcer</Title>
        </Body>
        <Right>
          <Button transparent
          onPress={this.logout.bind(this)}
          >
            <Icon name='log-out' />
          </Button>
        </Right>
      </Header>
      <View style={styles.container}>
          <MapView style={styles.map}
          region={this.state.location}
            mapType="standard"
            showsMyLocationButton
            followsUserLocation={true}
            showsUserLocation={true}
            showsCompass
            moveOnMarkerPress
            toolbarEnabled
            />
      </View>
    </Container>
    </Drawer>    
    );
  }
}



const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});

*/