// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TextInput, AsyncStorage } from 'react-native';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
// import { FormLabel, FormInput } from 'react-native-elements'
// import firebase from "firebase";

// class Add extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: "",
//             uid: ""
//         }
//     }
//     createCircle() {
//       var user = firebase.auth().currentUser;
//         var addCircle = {
//             Circles: {
//               name: this.state.name,
//               uid: this.state.uid
//             }
//           }
//           var db = firebase.database();
//           let dbRef = db.ref().child('Circles');
//           dbRef.push(addCircle)
//     }
//     render() {
//         return (
//         <Container>
//             <Header>
//               <Left>
//                 <Button transparent>
//                   <Icon name='arrow-back' />
//                 </Button>
//               </Left>
//               <Body>
//                 <Title>Create Your Circle</Title>
//               </Body>
//               <Right>
//                 <Button transparent>
//                   <Icon name='user-plus' />
//                 </Button>
//               </Right>
//             </Header>
//             <View style={styles.container}>
//             <FormLabel>Name</FormLabel>
//             <FormInput
//             value={this.state.name}
//             onChangeText={text => { this.setState({ text }) }}
//             placeholder="Please enter Name"
//             />
//             <Button
//             title="Save"
//             >
//                   <Icon name='save' />
//             </Button>
//             </View>
//           </Container>    
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
// });

// export default Add;