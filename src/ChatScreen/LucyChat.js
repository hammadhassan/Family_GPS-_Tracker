import React from "react";
import { Alert, ToastAndroid, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";
import HomeScreen from "../HomeScreen";
// import { FormLabel, FormInput } from 'react-native-elements'
import firebase from "firebase";


export default class LucyChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name: "",
        // uid: ""
    }
}
createCircle() {
  var user = firebase.auth().currentUser;
  Admin = user.uid;
    var addCircle = {
        Circle: {
          name: this.state.name,
          // uid: this.state.uid
        }
      }
      var db = firebase.database();
      let dbRef = db.ref().child('Circles/');
      dbRef.push(addCircle)
      ToastAndroid.show("Your Circle has been Saved", ToastAndroid.SHORT);
      // this.props.navigate("Invite")
      this.setState({
        name: ""
      })
}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Add Circle</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Circle Name</Label>
            <Input 
            value={this.state.name}
            onChangeText={name => { this.setState({ name }) }}
            //placeholder="Please enter Name"
            />
          </Item>
          <Button
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={this.createCircle.bind(this)}>
            <Text>Save Your Circle</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}