import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from "firebase";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class Location extends Component {

  constructor() {
    super()
    this.state = {
      latitude: '',
      longitude: '',
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          });
          // alert(this.state.location.latitude)
          // alert(this.state.location.longitude)
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    }
  saveLocation() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var fullDate = day + '/' + month + '/' + year;
    var usersData = {
      Location: {
        lat: this.state.latitude, 
        long: this.state.longitude,
        date: fullDate,
      }
    }
    var db = firebase.database();
    let dbRef = db.ref().child('Location');
    dbRef.push(usersData)
  }

  render() {
    return (

      <View>

        <Button title="Save Location"
          onPress={this.saveLocation.bind(this)}
        />

        <Text>latitude : {this.state.latitude}</Text>
        <Text>longitude : {this.state.longitude}</Text>

      </View>
    );
  }
}
export default Location;