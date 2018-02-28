import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import RouterComponent from './Router';
import firebase from 'firebase';
import firebaseConfig from '../constants/config'

class TodoScreen extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCqpSpWIOZ64MsSZ5G0WbfEGSyfRIaLwak",
            authDomain: "todo-de7b6.firebaseapp.com",
            databaseURL: "https://todo-de7b6.firebaseio.com",
            projectId: "todo-de7b6",
            storageBucket: "todo-de7b6.appspot.com",
            messagingSenderId: "832961517938"

        };
        firebase.initializeApp(config);
    }

    render() {
        return (

              <RouterComponent />

        );
    }
}



export default TodoScreen;
