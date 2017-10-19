import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Join extends Component {
    constructor() {
        super();
        this.state = {
          circle: []
        };
      }
      joinCircle(GroupId) {
        let flag = false;
        let currentUserId = firebase.auth().currentUser.uid;
            console.log('currentUser', currentUserId);
            let members = {
                Uid: currentUserId
            }
            firebase.database().ref('Circle/').once('value', (data) => {
                let obj = data.val();
                obj.groupId = data.key;
                console.log("=>>>>>", obj)
                let nodeKey;
                for (var key in obj) {
                    if (joining.joinKey === key.slice(key.length - 6)) {
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
    
                console.log("nodeKey", nodeKey)
            })
      }
    render() {
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
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Invite Code</Label>
            <Input 
            value={this.state.name}
            onChangeText={circle => { this.setState({ circle }) }}
            //placeholder="Please enter Name"
            />
          </Item>
          <Button
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={this.joinCircle.bind(this)}>
            <Text>Join Circle</Text>
          </Button>
        </Content>
      </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Join;
