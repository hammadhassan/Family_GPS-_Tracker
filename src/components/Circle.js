// import React, { Component } from 'react';
// import { View, Button, FlatList, Image, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native'
// import MapView from "react-native-maps";
// import RNGooglePlaces from 'react-native-google-places';
// import axios from 'axios';
// // import { Spinner } from './common';
// // import { Card, ListItem  } from 'react-native-elements'
// import { Container, Content, List, ListItem, Text, Separator , Item } from 'native-base';

// class Circle extends Component {
//   constructor(props) {
//     super(props);
//     console.disableYellowBox = true;
//     this.state = {
//       // location: {
//       // latitude: null,
//       // longitude: null,
//       // latitudeDelta: null,
//       // longitudeDelta: null,
//     // // },
//     //   error: null,
//       // latitude: 24.830294039871763,
//       // latitudeDelta: 0.0033632258318370134,
//       // longitude: 67.04754587262869,
//       // longitudeDelta: 0.003080181777,
//         // latitude: 24.8841584,
//         // longitude: 67.1379614,
//         // latitudeDelta: 0.0002,
//         // longitudeDelta: 0.0021,
//         // latitude: 24.882830499999997,
//         // longitude: 67.0680423,
//         latitude: 24.882830499999997,
//         longitude: 67.0680423,
//         latitudeDelta: 0.0002,
//         longitudeDelta: 0.0021,
//         nearbyPlaces: [],
//         isLoading: false
//     }
//     this.renderList = this.renderList.bind(this)
//   }

// openSearchModal() {
//     RNGooglePlaces.openAutocompleteModal()
//       .then((place) => {
//         console.log(place);
//         this.setState({
//           latitude: place.latitude,
//           longitude: place.longitude
//         })
//         // place represents user's selection from the
//         // suggestions and it is a simplified Google Place object.
//       })
//       .catch((error) => console.log(error));
//   }

// componentWillMount() {
//     this.watchId = navigator.geolocation.watchPosition(
//       (position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: position.coords.latitudeDelta,
//           longitudeDelta: position.coords.longitudeDelta,
//           error: null,
//         });
//       },
//       (error) => this.setState({ error: error.message }),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
//     );
//   }

// getNearByPlaces() { 
//     const apiKey = 'AIzaSyDeTyUnXpeHr9G8HrKc0-3nEwzNyGmjmpI';
//     const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"
//     let completeUrl = `${url}location=${this.state.latitude},${this.state.longitude}&radius=500&type=restaurant&key=${apiKey}`;
//     axios.get(completeUrl)
//       .then(
//       response => {
//         console.log(response);
//         this.setState({
//           nearbyPlaces: response.data.results,
//         })
//       })
//   }

// renderList() {
//         if (this.state.isLoading) {
//             return <ActivityIndicator />
//         }
//         return (
//         <FlatList
//             data={this.state.nearbyPlaces}
//             renderItem={({ item }) =>
//               <View>
//                 <FlatList
//                   data={item.photos}
//                   renderItem={({ item }) =>
//                     <View>
//                       <Image style={{ width: 200, height: 100 }} source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photo_reference}&key=AIzaSyBTeynBGQE3bjKAewueKWEVtbt9JlrUIn8` }} />
//                     </View>
//                   }
//                 />
//                 <Text>Name: {item.name}</Text>
//                 <Text>Rating: {item.rating}</Text>
//               </View>
//             }
//           />
//         )
//     }

//   render() {
//     return (
//       <View style={styles.container}>
//           <ScrollView>
//         <View style={{ marginBottom: 20, paddingBottom: 40 }}>
//             <Button title="Enter Place for Near By Resturant" onPress={() => this.openSearchModal()} />
//             <Text></Text>
//           <Button title="Press for Near By Restautrants" onPress={this.getNearByPlaces.bind(this)} />
//           {this.renderList()}
//         </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// export default Circle;

// const styles = StyleSheet.create({
//   container: {
//       paddingLeft: 10,
//       paddingRight: 10,
//       marginRight: 10,
//       marginLeft: 10,
//       marginTop: 15,
//       marginBottom: 20
//     },
//   cont: {
//    backgroundColor: "white"
//   },
//   list: {
//     borderWidth: 1
//   },
//   text: {
//     marginTop :20,
//     marginLeft :20,
//     marginRight: 20
//   }
// });

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from "react-native-maps";
import { DrawerNavigator }from "react-navigation"

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
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  // map: {
  //   ...StyleSheet.absoluteFillObject,
  // },
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

// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Home',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./chats-icon.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     );
//   }
// }

// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Notifications',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./notif-icon.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });

// const MyApp = DrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });

export default Circle;
