import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Slides from "./Slides";
import { TabNavigator, StackNavigator, } from 'react-navigation';
import Circle from "./Circle";
import LoginScreen from "../Auth/Login";
import SignupScreen from "../Auth/SignUp";
import Msg from "./msg";

const SLIDES_DATA = [
    // { text: "Welcome to Family Tracker" , color: '#03A9F4' },
    // { text: "Locate your family " , color: '#009688' },
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
    onSlidesCompleteLogin() {
        this.props.navigation.navigate("Login")
    }
    onSlidesCompleteSignUp() {
        this.props.navigation.navigate("SignUp")
    }
    render() {
        return (
        <Slides data={SLIDES_DATA} 
        onCompleteCircle={this.onSlidesCompleteCircle.bind(this)}
        onCompleteLogin={this.onSlidesCompleteLogin.bind(this)}
        onCompleteSignUp={this.onSlidesCompleteSignUp.bind(this)}
        />
        );
    }
}

const MainNavigator  = StackNavigator({
    Welcome: { screen: WelcomeScreen , navigationOptions: {tabBarVisible: false}},
    Login : { screen: LoginScreen, navigationOptions: {tabBarVisible: false} },
    SignUp : { screen: SignupScreen, navigationOptions: {tabBarVisible: false} }
  });
  
  const MainNav = TabNavigator({
    Main: {screen : MainNavigator , navigationOptions: {tabBarVisible: false} },
    Home: {screen: Circle , navigationOptions: {tabBarVisible: false} }
    
  },
//   {tabBarVisible: false}
)

export default (WelcomeScreen, MainNav);