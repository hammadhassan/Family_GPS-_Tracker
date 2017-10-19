import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import { AppRegistry, View, StatusBar, TouchableOpacity } from "react-native";
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
    openUser() {
      
      let currentUser = firebase.auth().currentUser.uid;
      firebase.database().ref('Circles/' + currentUser + '/').on('value', (data) => {
        let obj = data.val();
        obj.groupId = data.key;
        alert(data);
        alert(currentUser);
        // dispatch(SeletedGroupData(obj));
        // if (obj.Admin === currentUser) {
        //     Actions.adminright();
        // } else {
        //     Actions.groupJoin()
        // }
    })
  }

componentDidMount() {
    var DataArr = [];
    let dbRef = firebase.database().ref("Circles/");
    dbRef.on("child_added", snap => {
      // let obj = data.val();
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
    // const {Circle} = this.props;
    // alert(Circle)
    // let AllGroups = Object.keys(this.props.Group).map((key, index) => {
    // let val = this.props.Group[key];
    // let GroupId = key;
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
              <ListItem avatar>
              <Left>
              <Icon name="md-people" />
              </Left>
              <Body>
              <Text style={styles.text}>Circle Name: {value.Circle.name}</Text>
              </Body>
              <Right>
              {/* <Icon name="settings" /> */}
              <Button onPress={this.openUser.bind(this, currentUser)} bordered >
                <Text>
                    Open
                </Text>
              </Button>
              </Right>
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
      // marginRight: 20
    },
  })

  /*
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
              <ListItem avatar>
              <Left>
              <Icon name="md-people" />
              </Left>
              <Body>
              <Text style={styles.text}>Circle Name: {value.Circle.name}</Text>
              </Body>
              <Right>
              <Icon name="settings" />
              <Button onPress={this.openUser.bind(this, GroupId)} bordered >
              <Text>
                  Open
              </Text>
            </Button>
            </Right>
            </ListItem>
          </List>
        })}
      </Content>
    </Container>
  */