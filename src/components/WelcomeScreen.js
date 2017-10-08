import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Slides from "./Slides";
import { TabNavigator, StackNavigator, } from 'react-navigation';
import Circle from "./Circle";
const SLIDES_DATA = [
    { text: "Welcome to Family Tracker" , color: '#03A9F4' },
    { text: "Locate your family " , color: '#009688' },
    { text: "Invite your family & Friends" , color: '#03A9F4' }
];

class WelcomeScreen extends Component {
   static navigationOptions = {
    header: null,
    tabBarVisible: false
    }
    // constructor(props){
    //     super(props)
    //       this.state = {
    //       loggedIn: false
    //       }
    // }   

    onSlidesCompleteCircle() {
        this.props.navigation.navigate("Home")
    }
    // onSlidesCompleteSignUp() {
    //     this.props.navigation.navigate("SignUp")
    // }
    render() {
        return (
        <Slides data={SLIDES_DATA} 
        onCompleteCircle={this.onSlidesCompleteCircle.bind(this)}
        />
        );
    }
}

const MainNavigator  = StackNavigator({
    Welcome: { screen: WelcomeScreen , navigationOptions: {tabBarVisible: false}},
  });
  
  const MainNav = TabNavigator({
    Main: {screen : MainNavigator , navigationOptions: {tabBarVisible: false} },
    Home: {screen: Circle}
    
  },
  {tabBarVisible: false}
)

export default (WelcomeScreen, MainNav);