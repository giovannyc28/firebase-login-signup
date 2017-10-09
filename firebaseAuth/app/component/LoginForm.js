import React, { Component } from 'react';
import { View, Button, TextInput, TouchableOpacity, Text, Spinner } from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     email: '',
     password: '',
     error: ''
   };
   this.onLoginPress= this.onLoginPress.bind(this);
  }

  onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { alert('Successful login') })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { alert("Successfully Created new account") })
                    .catch(() => {
                       alert('Something wrong') 
                    });
            });
   }


  render() {
    return (
      <View>
          <Text style={styles.title} >Login with Firebase </Text>
          <TextInput
            style={{height: 40}}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            placeholder="Enter your email"
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Enter your password"
          />
          <TouchableOpacity onPress={this.onLoginPress}>
            <View style={styles.loginView}>
              <Text style={styles.loginText}>LogIn/Signup</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = {
    errorTextStyle: {
      color: '#E64A19',
      alignSelf: 'center',
      paddingTop: 10,
      paddingBottom: 10
    },
    loginView: {
      margin: 20,
      height: 40,
      backgroundColor:'#E64A19',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginText: {
      color: '#fff',
    },
    title: {
      alignSelf: 'center',
      margin: 40,
      fontSize: 20,
    }
};
export default LoginForm;