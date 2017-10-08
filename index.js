import { AppRegistry } from 'react-native';
import App from './App';
import WelcomeScreen from "./src/components/WelcomeScreen";
import * as firebase from 'firebase';

// export const firebaseConfig = {
//     apiKey: "AIzaSyA2pLH8IpQGIRoAtrAR7z0dmcDjGG-iNTw",
//     authDomain: "family-gps-track-1507432863873.firebaseapp.com",
//     databaseURL: "https://family-gps-track-1507432863873.firebaseio.com",
//     projectId: "family-gps-track-1507432863873",
//     storageBucket: "",
//     messagingSenderId: "112053881288"
//   };
//   firebase.initializeApp(firebaseConfig);
  
  export const firebaseConfig = {
    apiKey: "AIzaSyBnzrd-cOrgyo38QSkdzeb3K462L-u-6Ik",
    authDomain: "tourist-guide-1502027695550.firebaseapp.com",
    databaseURL: "https://tourist-guide-1502027695550.firebaseio.com",
    projectId: "tourist-guide-1502027695550",
    storageBucket: "",
    messagingSenderId: "783117883841"
  };
  
  firebase.initializeApp(firebaseConfig);


// AppRegistry.registerComponent('FamilyTracker', () => App);
AppRegistry.registerComponent('FamilyTracker', () => WelcomeScreen);