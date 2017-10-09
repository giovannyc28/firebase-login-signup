import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Config from 'react-native-config';
import firebase from 'firebase';
import LoginForm from './app/component/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBkP3ovBefuls9MTZ9X176MqORlVqAlpck',
            authDomain: 'reactfirebase-e69e0.firebaseapp.com',
            databaseURL: 'https://reactfirebase-e69e0.firebaseio.com',
            projectId: 'reactfirebase-e69e0',
            storageBucket: 'reactfirebase-e69e0.appspot.com',
            messagingSenderId: '470892154345'
        });
    }
    render() {
        return (
            <View>
                <LoginForm />
            </View>
        );
    }
}

export default App;
