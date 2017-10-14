import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import { AppRegistry, View, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  List, ListItem, Separator,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";
import HomeScreen from "../HomeScreen";
import firebase from "firebase";

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
        Data : []
      };
    }
componentDidMount() {
    var DataArr = [];
    let dbRef = firebase.database().ref("Circles");
    dbRef.on("child_added", snap => {
      DataArr = this.state.Data;
      DataArr.push(snap.val());
      this.setState({
        Data: DataArr
      });
    });
    // alert("users")
    }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{flex: 1}}>
            <Title>{this.state.Data.name}</Title>
            <Title>Your Circle</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        {this.state.Data.map((value, i) => {
            return <List style={styles.list} key={i}>
              <ListItem >
              <Icon name="md-people" />
              <Text style={styles.text}>Circle Name: {value.Circle.name}</Text>
              {/* <Text style={styles.text}>Circle Name: Text</Text> */}
              {/*<Icon style={styles.icon}
              name="settings" />*/}
              </ListItem>
            </List>
          })}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: "white"
    },
    list: {
      borderWidth: 1
    },
    text: {
      marginTop :20,
      marginLeft :20,
      marginRight: 20
    },
    icon: {
        justifyContent: "flex-end"
    }
  })