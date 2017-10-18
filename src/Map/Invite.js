import React, { Component } from 'react';
import { View, StyleSheet, Alert, ToastAndroid, Dimensions } from 'react-native';
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
import * as firebase from 'firebase';

class Invite extends Component {
  constructor() {
    super();
    // this.state = {
    //   Circle: []
    // };
  }
  joinCircle(GroupId) {
    let flag = false;
    let currentUserId = firebase.auth().currentUser.uid;
        // console.log('currentUser', currentUserId);
        // let members = {
        //     Uid: currentUserId
        // }
        firebase.database().ref('Circle/').once('value', (data) => {
            let obj = data.val();
            obj.groupId = data.key;
            // console.log("=>>>>>", obj)
            let nodeKey;
            for (var key in obj) {
                if (joining.joinKey === key.slice(key.length - 5)) {
                    flag = true;
                    nodeKey = key;
                    firebase.database().ref('Circle/' + nodeKey + '/members/').push(currentUserId)
                        .then((members) => {
                            ToastAndroid.show('You are added', ToastAndroid.SHORT);
                        })
                }
            }
            if (flag == false) {
                ToastAndroid.show('Please enter your group key', ToastAndroid.SHORT);
            }

            // console.log("nodeKey", nodeKey)
        })
  }


  render() {
    const {
            Circle
        } = this.props;
  const { navigate } = this.props.navigation;
  let AllGroups = Object.keys(this.props.Circle).map((key, index) => {
            let val = this.props.Circle[key];
            let GroupId = key;
            return (
                <List key={index}>
                    <ListItem avatar>
                        // <Left>
                        //     <Thumbnail size={50} source={groupAvatar} />
                        // </Left>
                        <Body>
                            <Text>{val.Gname}</Text>
                        </Body>
                        <Right>
                            <Button onPress={this.joinCircle.bind(this, GroupId)} bordered >
                                <Text>
                                    Open
                                </Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            )
        }
        )
  // const { navigate } = this.props.navigation;
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
            <Title>Invites</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            {AllGroups}
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default  Invite